---
slug: /contributing
---

# Contributing

> Thanks for your interest in contributing to Answer!

## How to Contribute

> You can contribute directly to the github repo by submitting your PR.

## Creating an Issue

- Feel free to ask your questions if you have any.

## Creating a Pull Request

- We appreciate you taking the time to contribute! Before submitting a pull request, we ask that you please create an issue that explains the bug or feature request and let us know that you plan on creating a pull request for it. If an issue already exists, please comment on that issue letting us know you would like to submit a pull request for it. This helps us to keep track of the pull request and make sure there isn't duplicated effort.

## Commit Message Guidelines

```
<type>(<scope>): <subject>
```

### type

- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests
- chore: Changes to the build process or auxiliary tools and libraries such as documentation generation

### scope

The scope can be anything specifying place of the commit change.

### subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- do not capitalize first letter
- do not place a period . at the end
- entire length of the commit message must not go over 50 characters
- describe what the commit does, not what issue it relates to or fixes
- be brief, yet descriptive - we should have a good understanding of what the commit does by reading the subject

## Development

### Backend

#### Installation

#### Code Conventions

### Frontend

#### Installation

1. Ensure you have [node](https://nodejs.org/en) and [pnpm](https://pnpm.io/installation) installed.
2. After cloning the repository, run the following command. This will install all dependencies as well as build all local packages.
```
cd ./ui
pnpm install
```
3. To start a development server, run `pnpm start`. now, your browser should already open automatically, and autoload `http://localhost:3000`. you can also manually visit it.
4. To switch API, you can modify the `ui/.env.development` file and then re-run pnpm start. If you're just using it yourself, we recommend creating a `.env.development.local` file that defines the address of the api you're going to use.

#### Code Conventions

- **Most important: Look around.** Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation, etc.
- We do have Prettier (a formatter) and ESLint (a syntax linter) to catch most stylistic problems. If you are working locally, you can run  `pnpm lint` and `pnpm prettier` to fix most code formatting.
- **No runtime errors** Before submitting the code, please ensure that there will be no errors when running locally. This will greatly reduce the workload of review.


