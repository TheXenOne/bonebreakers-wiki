import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const explorerOptions = {
  sortFn: (
    a: { isFolder?: boolean; displayName: string; slug?: string; slugSegment?: string },
    b: { isFolder?: boolean; displayName: string; slug?: string; slugSegment?: string },
  ) => {
    const aRoot = a.slug?.split("/")[0] ?? a.slugSegment ?? ""
    const bRoot = b.slug?.split("/")[0] ?? b.slugSegment ?? ""
    const rootOrder: Record<string, number> = {
      characters: 0,
      npcs: 1,
      locations: 2,
      sessions: 3,
      factions: 4,
    }

    const aRootRank = rootOrder[aRoot]
    const bRootRank = rootOrder[bRoot]

    if (aRootRank !== undefined && bRootRank !== undefined && aRootRank !== bRootRank) {
      return aRootRank - bRootRank
    }

    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }

    if (!a.isFolder && b.isFolder) {
      return 1
    } else {
      return -1
    }
  },
  filterFn: (node: { isFolder?: boolean; slug?: string; slugSegment?: string }) => {
    const hiddenRootLandingPages = new Set(["characters", "npcs", "locations", "sessions"])

    return (
      node.slugSegment !== "tags" &&
      node.slugSegment !== "peoples-and-creatures" &&
      !(node.isFolder === false && node.slug && hiddenRootLandingPages.has(node.slug))
    )
  },
  mapFn: (node: { displayName: string }) => {
    const manualNames: Record<string, string> = {
      sessions: "Sessions",
      locations: "Locations",
      npcs: "NPCs",
      factions: "Factions",
      agria: "Agria",
      barrowshire: "Barrowshire",
      ikiria: "Ikiria",
      necropolis: "Necropolis",
      westmarsh: "Westmarsh",
      "flux-academy": "Flux Academy",
      "east-agria-company": "East Agria Company",
      "fos-imeras": "Fos Imeras",
      "halls-of-the-blood-king": "Halls of the Blood King",
      "prince-arthurs-retinue": "Prince Arthur's Retinue",
      "barrow-spa-locals": "Barrow Spa Locals",
      "the-barrow": "The Barrow",
      "tarantella-manor": "Tarantella Manor",
      "the-cracked-shield": "The Cracked Shield",
      "monsters-of-westmarsh": "Monsters of Westmarsh",
      "shrine-of-the-oozing-serpent": "Shrine of the Oozing Serpent",
      "west-fort": "Westfort",
    }

    if (manualNames[node.displayName]) {
      node.displayName = manualNames[node.displayName]
      return
    }

    if (/^[a-z0-9-]+$/.test(node.displayName)) {
      node.displayName = node.displayName
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ")
    }
  },
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer(explorerOptions),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(explorerOptions),
  ],
  right: [],
}
