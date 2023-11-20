---
slug: /faq
---

# FAQ

## How do I access the installation page?

Heading to <http://localhost:9080/install> to access installation page.

## Why can't I receive the registration email?

You should configure you own SMTP in `Admin -> Settings -> SMTP`.

## How do I switch the default language?

- Site's default language can be switched in `Admin -> Settings -> Interface`.
- Users can switch languages in their own `Settings -> Interface`.

## What are the currently supported database types? Is migration supported?

We support MySQL, PostgreSQL, SQLite3. Unfortunately, we **do not** currently support data migration.
So we recommend using SQLite3 **just for the experience** and MySQL for actual use.
