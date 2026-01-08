---
slug: /questions
---

# Questions

Every question moves through two independent axes: its moderation status (pending, normal, closed, deleted) and its visibility (pinned, listed, unlisted). Answers have their own lightweight review flow. Use the tables and collapsible reference below to keep conversations tidy without overwhelming readers.

---

## Question status

![Question state diagram](/img/docs/questions-question-status.drawio.svg)

Questions always start as **Pending** when moderation is enabled. Once approved they become **Normal** entries that are eligible for answers, voting, and highlighting. Moderators can optionally **Close** normal questions (preventing new answers) or **Delete** them outright. Deleted questions remain restorable until purged.

- **Approve** moves Pending to Normal. **Reject** sends Pending directly to Deleted, which hides it from everyone but moderators.
- **Unapprove** re-opens a Normal item for moderation (back to Pending) without erasing content, which is useful after large edits.
- **Close** freezes a Normal question while leaving it searchable; **Reopen** drops it back to Normal when the issue is resolved.
- **Delete** can happen from Pending, Normal, or Closed. **Undelete** revives the post, returning it to Pending (if it was never published) or Normal.

<details>
<summary>When to leave a question Pending</summary>

- Use Pending to pause low-effort or policy-sensitive submissions until they can be clarified.
- Add an internal comment before rejecting so other moderators understand the decision trail.

</details>

<details>
<summary>Closing vs. deleting</summary>

- Close when the content is valuable but the conversation needs to stop (duplicates, off-topic but informative, answered elsewhere).
- Delete when the content should not appear in search or feeds (spam, personal data). You can still undelete if needed.

</details>

## Question visibility

![Question visibility diagram](/img/docs/questions-question-visibility.drawio.svg)

Status alone does not control prominence. Visibility lets you decide where a question is surfaced:

- **Pinned**: Always shown at the top of list pages for its tags or spaces. Reserve for onboarding, policies, or featured announcements.
- **Visible (listed)**: Default state. Appears in feeds, search, tag pages, and widgets.
- **Unlisted**: Hidden from public lists but still accessible via direct URL. Great for private escalations or drafts shared with SMEs.

Transitions are instant and lossless:

- `Pin` promotes a visible item to the pinned slot; `Unpin` returns it to the standard list order.
- `Unlist` removes an item from feeds without deleting; `List` reintroduces it later.

:::tip Keep visibility simple
Limit pinned questions to one or two per topic so learners do not scroll past walls of announcements. Pair unlisted items with a follow-up workflow (e.g., convert to documentation) so they do not languish.
:::

## Answer status

![Answer state diagram](/img/docs/questions-answer-status.drawio.svg)

Answer review mirrors the question workflow but skips closing and visibility controls:

- **Pending** answers show only to moderators and the author until approved.
- **Normal** answers are fully public and can be voted or accepted.
- **Deleted** answers disappear from the thread but stay recoverable.

<details>
<summary>Moderation actions</summary>

- Approve or reject from the question’s Answers tab; rejected answers go straight to Deleted.
- Unapprove when an existing answer needs a second look after edits.
- Delete abusive or obsolete answers; Undelete restores them if context changes.

</details>

## Best practices

- Enable email or in-app notifications for the review queue so Pending items do not stall.
- Combine status and visibility intentionally (for example, Closed + Pinned for canonical FAQs, or Normal + Unlisted for invite-only betas).
- When you delete, leave a moderator note describing why; it travels with the revision history and speeds up future audits.
