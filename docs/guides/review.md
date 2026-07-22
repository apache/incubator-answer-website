---
slug: /review
---

# Review

Review is the moderation layer that keeps content quality high while enabling community contributions. Moderators triage three streams: pending posts awaiting initial approval, suggested edits from lower-reputation users, and flagged content reported by the community. All reviews happen in a dedicated queue accessible via the admin menu, surfacing only items that require manual decision.

---

## Pending posts

When moderation is enabled (in **Admin → Settings → Write**) or an anti-spam plugin triggers, newly created questions, answers, or comments enter Pending status instead of publishing immediately. Authors see a "Waiting for review" message; everyone else sees nothing until approval.

**Workflow:**
1. Navigate to **Review → Queued post**.
2. Each item displays the full content, author info (reputation, role, past contributions), tags (for questions), and any plugin-supplied reason.
3. Click **Approve** to publish (status moves to Normal) or **Reject** to delete (status moves to Deleted; author is notified).

<details>
<summary>Tips for triaging pending posts</summary>

- Check author reputation and history: first-time posters may need clarification, while high-reputation users rarely submit spam.
- Look for plugin indicators: if an anti-spam filter flagged it, review the reason before approving.
- For borderline cases, leave a comment on the post asking for edits, then return to the queue after the author responds.
- Rejected posts are soft-deleted; you can undelete them later if circumstances change.

</details>

---

## Suggested edits

Users below the "Edit without review" threshold submit changes as suggested edits. The original content remains visible while the proposal waits in a review queue.

**Workflow:**
1. Go to **Review → Suggested Edits**.
2. A side-by-side diff highlights additions (green) and removals (red).
3. Click **Approve** to merge the edit, or **Reject** to discard and leave the original unchanged.

<details>
<summary>When to approve edits</summary>

- **Good edits:** Fix typos, add code formatting, clarify phrasing, insert relevant links, correct grammar, or update deprecated information.
- **Questionable edits:** Trivial changes (adding "thanks" or "hope this helps"), tag-only edits without substantive improvements, or changes that alter technical meaning without justification.
- **Bad edits:** Vandalism, promotional links, introducing errors, or overwriting correct content with wrong answers.

If an edit is close but imperfect, consider approving it then making a follow-up edit yourself.

</details>

<details>
<summary>Handling conflicting edits</summary>

If multiple users suggest changes to the same post, you will see each proposal independently. Approve the best one first; remaining edits will be automatically invalidated if they conflict. You can also manually reject duplicates.

</details>

---

## Flags

Flags are community reports on posts or comments (spam, offensive, duplicate, moderator attention). Flagged items show reporter, reason, any plugin notes, and links to the post and its history.

For full guidance and policy details, see the Flags guide: [Flags](flags.md).

---

## Review permissions

Access to review queues is governed by reputation thresholds. Default values and recommended settings:

| Permission | Default reputation | Notes |
| --- | --- | --- |
| Edit others' questions/answers (needs review) | 100 | Submits as suggested edit |
| Edit tag description (needs review) | 100 | Submits as suggested edit |
| Review question edits | 1000 | Can approve/reject suggested edits to questions |
| Review answer edits | 1000 | Can approve/reject suggested edits to answers |
| Review tag edits | 2500 | Can approve/reject suggested edits to tag wikis |
| Edit others' questions/answers (without review) | 1000 | Bypasses review queue |
| Edit tag description (without review) | 10000 | Bypasses review queue |

Adjust these in **Admin → Settings → Privileges** to match your community size. Smaller communities may lower thresholds to empower more moderators; larger communities may raise them to ensure experienced reviewers.

---

## Automation and plugins

Apache Answer supports anti-spam and content review plugins that can automatically:
- Hold low-reputation or suspicious posts for manual review.
- Reject or delete clear spam without moderator intervention.
- Tag posts with risk scores or reasons (e.g., "contains banned keywords").

Enable plugins in **Admin → Plugins** and configure thresholds in each plugin's settings. Combine automation with manual review to balance efficiency and accuracy.
