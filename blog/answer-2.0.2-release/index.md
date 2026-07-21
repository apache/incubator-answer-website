---
date: 2026-07-21
title: "Apache Answer 2.0.2: AI Reasoning, Email Intervals, Safer Login & More"
authors: [Robin]
category: Release
featured: true
image: 2026-07-21-cover@4x.png
description: "Apache Answer 2.0.2 improves AI chat with reasoning content support, adds flexible email notification settings, hardens authentication and permissions, and fixes a round of short-link, API, and packaging issues."
---

We're pleased to announce **Apache Answer 2.0.2**, a focused patch release that improves the AI chat experience, adds more flexible email settings, and tightens security across authentication, permissions, and content handling.

You can download the release from the [Apache Answer download page](https://answer.apache.org/download) or view the full details on the [GitHub release page](https://github.com/apache/answer/releases/tag/v2.0.2).

---

## ✨ Highlights

### AI Reasoning Content Support

Reasoning models often expose their chain-of-thought before delivering the final answer. Apache Answer now preserves that reasoning content in AI conversation records and the chat UI, so follow-up rounds retain the full context.

- **Add reasoning content support in AI conversation records and chat UI** ([#1530](https://github.com/apache/answer/pull/1530)) by [@hgaol](https://github.com/hgaol)

### Optional Email Verification

For deployments that do not require mandatory email confirmation, administrators can now disable email verification directly from site settings, making onboarding smoother for internal or trusted environments.

- **Allow disabling email verification from site settings** ([#1540](https://github.com/apache/answer/pull/1540)) by [@AsyncAssassin](https://github.com/AsyncAssassin)

### Configurable New-Question Email Intervals

New-question email notifications now support interval-based delivery, and the email throttle has been moved to a dedicated worker with a configurable queue.

- **Add interval support for new question email notifications** ([#1545](https://github.com/apache/answer/pull/1545)) by [@AsyncAssassin](https://github.com/AsyncAssassin)
- **Move new question email throttling to a dedicated worker and make the email queue configurable** by [@AsyncAssassin](https://github.com/AsyncAssassin)

### Graceful Panic Recovery

Unexpected panics are now caught earlier and handled more gracefully, reducing the chance of a single failure tearing down an entire request.

- **Add recovery middleware to handle unexpected panics more gracefully** ([#1537](https://github.com/apache/answer/pull/1537)) by [@hhc7](https://github.com/hhc7)

### Safer External Login

Connector sign-in flows are now more robust against incorrect account binding, and API key access is cleaned up when roles or accounts change.

- **Prevent incorrect external login account binding during connector sign-in flows** by [@LinkinStars](https://github.com/LinkinStars)
- **Remove stale administrative API key access after role or account changes** by [@LinkinStars](https://github.com/LinkinStars)

### Build & Packaging Update

- **Update Docker and CI build flow to use Buildx and Go 1.25** by [@LinkinStars](https://github.com/LinkinStars)

---

## 🔒 Reliability and Security Improvements

Alongside the release note items, the changes between **v2.0.1** and **v2.0.2** also harden several important areas:

- **Short link fixes**: editing questions and accepting answers now work correctly when short links are enabled ([#1541](https://github.com/apache/answer/pull/1541), [#1554](https://github.com/apache/answer/pull/1554))
- **License compliance**: added the missing license entry for `mozillazg-go-unidecode` ([#1552](https://github.com/apache/answer/pull/1552))
- **Header hardening**: `Accept-Language` parsing now rejects malformed oversized headers
- **Revision audit permissions**: approve and reject actions now use aligned permission checks
- **Avatar ownership**: avatar cleanup now enforces ownership checks when updating profile images
- **Content visibility**: deleted or pending answers are restricted in answer and MCP retrieval paths
- **Error handling**: JSON 500 rewriting is limited to API routes and avoids rewriting already-flushed responses
- **URL slugs**: non-Latin titles now generate pragmatic ASCII slugs instead of falling back to `/topic` ([#1526](https://github.com/apache/answer/pull/1526))

These changes make 2.0.2 a recommended upgrade for teams already running 2.0.0 or 2.0.1.

---

## 🙌 Thanks to Our Contributors

Thank you to everyone who contributed code, fixes, and review to this release:

[@ahmedqasid](https://github.com/ahmedqasid), [@AsyncAssassin](https://github.com/AsyncAssassin), [@hgaol](https://github.com/hgaol), [@hhc7](https://github.com/hhc7), [@LinkinStars](https://github.com/LinkinStars), and [@Luffy](https://github.com/sy-records).

We appreciate your help in making Apache Answer more capable and more reliable with every release.
