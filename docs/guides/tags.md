---
slug: /tags
---

# Tags

Tags keep threads discoverable, route questions to subject-matter experts, and drive notifications for followers. Use the sections below to jump between end-user tasks and moderator or admin workflows.

## Common Usage

| Action | Where | Key steps |
| --- | --- | --- |
| Browse tags | `/tags` | Search or sort by **Popular**, **Name**, or **Newest**; open a card for details. |
| Follow / unfollow | Tag card or tag header | Toggle **Follow** / **Following**, or edit the **Following tags** card on the sidebar in `/questions` path to batch-manage followed tags. |
| Tune notifications | Tag header → bell icon → **User settings → Notifications** | Enable **All new questions for following tags** for inbox/email alerts. |
| Add tags when asking | Ask form | Up to **5 tags** per post. Required/recommended tags highlight automatically. |

## Asking with tags

- The selector enforces the site's minimum/maximum tag rules and surfaces hints such as "Add at least two tags" when configured in Admin settings.
- Recommended tags float to the top; reserved tags show a badge and can only be added by moderators.
- Users with the `tag.add` permission can create tags inline via `+ Create "term"`. Display names and slugs share a 35-character limit.
- Keep the primary technology first, then add version or context tags. Avoid duplicates—use synonyms or merges instead.

## Tag pages

- `/tags/{slug}` shows the public landing page: excerpt, follow button, bell shortcut, and a sortable question list (**Newest**, **Active**, **Unanswered**, **Frequent**, **Score**).
- `/tags/{slug}/info` hosts the wiki with full Markdown content, edit history, and moderator actions (**Edit**, **Delete**, **Merge**, **Undelete**, **History**).

<details>
<summary>Moderator workflows</summary>

#### Create or edit tags

1. Open `/tags/create` (roles 2 and 3). The form mirrors the inline modal and adds a rich-text editor for the wiki body.
2. After posting you land on `/tags/{slug}/info`; moderated sites may show a "Waiting for review" toast.
3. Future changes live at `/tags/{tag_id}/edit`, which includes an edit summary field and revision dropdown for quick rollbacks.

**Guidelines**
- Display names and slugs share the `TAG_SLUG_NAME_MAX_LENGTH` limit (35 characters).
- The first paragraph becomes the excerpt for cards/search, auto-truncated to ~250 characters.
- Always fill the edit summary so the timeline stays readable.

#### Maintain the wiki and synonyms

- Click **Edit** on the wiki to update markdown; moderation queues may apply.
- Use the synonyms card → **Edit** to add or remove aliases, then **Save synonyms** to persist.
- Synonyms redirect legacy slugs to the canonical tag (`main_tag_slug_name`), keeping followers and counts unified.

#### Merge, delete, restore

- **Merge**: choose **Merge**, select a target tag, and Apache Answer migrates synonyms, followers, and tagged questions before converting the source to a synonym.
- **Delete**: allowed only when the tag has no questions or synonyms; otherwise a modal explains the blocker. Deleted tags display a red "Post deleted" banner.
- **Undelete**: available on deleted wikis; a confirmation modal restores the tag and metadata.

</details>

<details>
<summary>Admin policies</summary>

- **Recommend tags**: curated list pinned at the top of autocomplete; can also be enforced as required tags.
- **Set required tags**: forces each question to include at least one recommended tag.
- **Minimum tags per question**: numeric requirement (0–5) surfaced via the selector hint.
- **Reserved tags**: visible but only applicable by moderators; marked with a badge.

</details>

## Best practices

- Keep slugs short, lowercase, and stable—rename via **Edit** instead of deleting.
- Start every wiki with a concise summary; that paragraph powers tag cards and search previews.
- Use synonyms for spelling variants and merges for true duplicates so history and followers survive.
- Audit the tag list regularly: delete unused tags, reserve sensitive ones, and keep the recommended set aligned with community focus.
