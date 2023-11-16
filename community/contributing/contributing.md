---
slug: /contributing
---

# Contributing

> Thanks for your interest in contributing to Answer!

## Code of Conduct

Answer has adopted a Code of Conduct that we expect project participants to adhere to. Please read the [full text](https://www.apache.org/foundation/policies/conduct.html) so that you can understand what actions will and will not be tolerated.

## Get Innolved

There are many ways to contribute to Answer, and many of them do not involve writing any code. Here's a few ideas to get started:

- Simply start using Answer. Go through the [Getting Started](/docs/installation) guide. Does everything work as expected? If not, we're always looking for improvements. Let us know by [opening an issue](#).
- Look through the [open issues](https://github.com/apache/incubator-answer/issues). Provide workarounds, ask for clarification, or suggest labels. Help [triage issues](#).
- If you find an issue you would like to fix, [open a pull request](#). Issues tagged as [Good first issue](https://github.com/apache/incubator-answer/labels/good%20first%20issue) are a good place to get started.
- Read through the [Answer docs](/docs). If you find anything that is confusing or can be improved, you can click "Edit this page" at the bottom of most docs, which takes you to the GitHub interface to make and propose changes.
- Take a look at the [features requested](https://github.com/apache/incubator-answer/labels/enhancement) by others in the community and consider opening a pull request if you see something you want to work on.

Contributions are very welcome. If you think you need help planning your contribution, please ping us on Twitter at [@answerdev](https://twitter.com/answerdev) and let us know you are looking for a bit of help.

### Creating an Issue

- Feel free to ask your questions if you have any.

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
