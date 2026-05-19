# Bonebreakers Wiki Instructions

This is a public player-facing D&D campaign wiki built with Quartz.

## Source material

Raw source documents live in `/sources`:

- `sources/session-notes.md`
- `sources/session-summaries.md`
- `sources/lore.md`

Published wiki pages live in `/content`.

## Core rules

- Do not invent campaign facts.
- Prefer facts from the lore document when describing stable world information.
- Treat definitive spellings and naming canon as coming from `sources/lore.md` first and the published wiki second.
- Raw session notes often contain inconsistent spellings and should not override the lore document or established wiki canon on names.
- Prefer session summaries for narrative session pages.
- Use raw session notes for extra detail, names, events, clues, and unresolved threads.
- When uncertain, write "Needs review" rather than guessing.
- Keep prose clear, concise, and wiki-like.
- Use Markdown wiki links like `[[locations/ikiria|Ikiria]]`.
- Use kebab-case filenames.
- Do not delete or rewrite the raw source documents.
- Do not publish giant raw dumps into `/content`.
- If creating pages from source material, include a `source_sessions` field when possible.
- This is a player-facing wiki, so avoid adding speculative DM-only secrets unless they are explicitly known to the party.

## Folder structure

Use these folders for published pages:

- `content/sessions`
- `content/session-summaries`
- `content/characters`
- `content/locations`
- `content/npcs`
- `content/factions`
- `content/items`
- `content/quests`
- `content/timeline`

## Session page frontmatter

Use this structure for session pages:

---
title: Session 41 – Into the Necropolis
type: session
session: 41
tags:
  - session
source_sessions:
  - 41
---

## Session page notes

- Do not use the heading "Open questions" for historical session pages.
- Use "Threads raised this session" instead.
- For each thread, include a status where possible:
  - Still unresolved
  - Resolved in Session N
  - Partially resolved
  - Needs review
- If a later session answers the question, include a short resolution.
- Do not pretend something is still unknown just because it was unknown at the time.
- Do not spoil speculative or unconfirmed answers.

## NPC page frontmatter

Use this structure for NPC pages:

---
title: Queen Audrey II
type: npc
tags:
  - npc
source_sessions: []
---

## Location page frontmatter

Use this structure for location pages:

---
title: Ikiria
type: location
tags:
  - location
source_sessions: []
---

## Character page frontmatter

Use this structure for player character pages:

---
title: Arden Sable
type: character
tags:
  - character
player: Ben
source_sessions: []
---

## Writing style

- Use clear headings.
- Prefer short paragraphs.
- Avoid over-dramatic prose on wiki pages.
- Session summaries may be more cinematic.
- Entity pages should be factual and easy to scan.
- Frame descriptions as explanations of the current known state of the world, not as commentary about documents or publication status.
- Avoid phrasing such as "recent notes", "published lore", "published sessions", or similar source-referential wording in wiki prose.
- Use "Known appearances", "Relationships", "Associated locations", and "Open questions" where useful.

## Linking rules

- Link important people, places, factions, items, quests, and sessions.
- Do not over-link the same page repeatedly in one short section.
- Use readable display text when useful, for example `[[locations/ikiria|Ikiria]]`.
- Do not create duplicate pages for aliases; add aliases to the existing page instead.

## Quality control

Before finishing a batch of edits:

- Check for broken obvious links.
- Check that new files use kebab-case filenames.
- Check that session numbers are correct.
- Check that no raw source dump has been copied wholesale into `/content`.
- Mark uncertain claims with "Needs review".
