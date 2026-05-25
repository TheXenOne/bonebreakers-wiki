# The Bonebreakers Wiki

This repository contains the player-facing campaign wiki for **The Bonebreakers**, a Dungeons & Dragons campaign.

The site is built with [Quartz](https://quartz.jzhao.xyz/) and published as a static wiki. Campaign pages live in `content/`; raw source notes, when available locally, live in `sources/` and are not published.

## Working On The Wiki

- Published wiki pages live in `content/`.
- Use Markdown wiki links such as `[[locations/world/agria/southlands/ikiria|Ikiria]]`.
- Use kebab-case filenames for new pages.
- Do not invent campaign facts. Mark uncertain claims as `Needs review`.
- Prefer stable lore and established wiki canon over inconsistent raw session-note spellings.
- Keep pages player-facing and avoid speculative DM-only secrets.

See `AGENTS.md` for the full editing rules and folder conventions used by coding assistants.

## Useful Commands

```bash
npm ci
npm run serve
npm run quartz -- build
```

The local preview normally runs at `http://localhost:8080/`.

## Project Structure

- `content/` - published campaign wiki pages
- `sources/` - local raw campaign source documents, ignored by git
- `quartz/` - Quartz static-site generator code
- `quartz.config.ts` - site configuration
- `quartz.layout.ts` - site layout and navigation components

## License And Ownership

Quartz is distributed under the MIT License. See `LICENSE.txt` for the Quartz license notice.

The wiki content in `content/`, along with campaign-specific text, names, places, characters, and notes, is Bonebreakers campaign material and belongs to the respective players, DM, and other contributors.
