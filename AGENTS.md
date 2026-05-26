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
- Treat definitive spellings and naming canon as coming from the published wiki in `/content`.
- If there is any ambiguity or conflict about spelling, names, aliases, or titles, treat the published wiki in `/content` as the source of truth.
- Raw session notes and source documents may contain inconsistent spellings and should not override established wiki canon on names.
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

## Overview and summary style

- Overviews should do more than identify the subject: briefly explain who or what it is, why the Bonebreakers know or care about it, and the current useful state of affairs.
- Weave status details naturally into the overview when they define the subject, such as dead, captured, disgraced, under arrest, charmed, at large, grateful, politically exposed, or becoming a recurring enemy.
- For NPCs, foreground meaningful interactions with the Bonebreakers: encounters, bargains, aid, betrayals, conflicts, rewards, escapes, and the current relationship.
- For locations, establish where the place is, how the party reached or discovered it, what is known inside, and why it matters now. Put high-level orientation on parent pages and detailed room or area discoveries on subpages.
- Include sensory and observed details when they explain what the party actually knows, but fold them into normal prose rather than creating artificial "what they saw" sections.
- Session and main-page summaries should work for someone who missed the session: include the concrete sequence, major discoveries, consequences, and present situation.
- Current-arc summaries should be framed from the Bonebreakers' point of view: what they were sent to do, what they found, who they met, what changed, and where things stand now.
- When truth is uncertain, frame it as party-facing knowledge: evidence suggests, rumours claim, or the matter remains unclear.

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
