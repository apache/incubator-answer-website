---
slug: /contributing
---

# Contributing

Thanks for your interest in contributing to Apache Answer, hopefully, this document makes the process for contributing clear.

The [Open Source Guides](https://opensource.guide/) website has a collection of resources for individuals, communities, and companies who want to learn how to run and contribute to an open source project. Contributors and people new to open source alike will find the following guides especially useful:

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Building Welcoming Communities](https://opensource.guide/building-community/)

## Code of conduct

Apache Answer has adopted a Code of Conduct that we expect project participants to adhere to. Please read the [full text](https://www.apache.org/foundation/policies/conduct.html) so that you can understand what actions will and will not be tolerated.

## Get involved

Apache Answer is an open source project built by passionate users, contributors, and PMC members. We are committed to creating an open and inclusive community, and we welcome everyone to join us in embracing the Apache way and building open source together.

Anyone can contribute to Answer. In addition to contributing code, there are many other ways to get involved, such as:

**Using Answer**

- Getting started with Answer is easy. Just follow our [Getting Started Guide](/docs/installation) to see if everything works as expected.
- If not, you can [create an issue](/community/issues) to report a bug or suggest an improvement.

**Triaging issues and pull requests**

- Ask for more information if you believe the [issues](/community/issues) does not provide all the details required to solve it.
- Suggest [labels](https://github.com/apache/incubator-answer/labels) that can help categorize issues.
- Flag issues that are stale or that should be closed.
- Ask for test plans and review code.

**Contributing code**

- Claim the issue if you find one that you can solve. Create a [pull request](/community/pull-request) to submit your changes.
- Issues labeled as [`good first issue`](https://github.com/apache/incubator-answer/labels/good%20first%20issue)" are great for getting started.

**Improving documentations**

- If you find any typos, grammar, or errors when reading our [docs](/docs), simply click on "Edit this page" and make edits on GitHub.

**Develop plugins**

- Extend the functionality of Answer with plugins.
- There are features that users are expecting, and you can claim or create your needs with [develop and submit](/community/plugins).

**Helping with version releases**

- Help us make Answer even better by testing new candidate releases and voting on [dev@answer.apache.org](https://lists.apache.org/list.html?dev@answer.apache.org).
- If you don't find any problems, give it a `+1 (non-binding)` upvote.
- If you find a problem, give it a `-1 (non-binding)` downvote.

**Contributing translations**

- If you are fluent in a language other than English, you can help us translate Answer into other languages using [Crowdin](https://crowdin.com/project/answer).
- Please refer to the [Contributing Translations Guide](/community/translation) for more information.

**Helping with support**

- You can be of great help by helping other users on [Answer Meta](https://meta.answer.dev).
- Reply and solve the questions in the [Mailing List](/community/#mailing-list).

**Promoting Answer**

- Share Answer on Social Media
- Share your story with Answer to more people
- Join our meetup, forum, etc.

**Others**

- Got new ideas? All contributions are very welcome.
- If you think you need help planning your contribution, please [reach us](/community/#others) and let us know you are looking for a bit of help.

<!-- There are many ways to contribute to Answer, and many of them do not involve writing any code. Here's a few ideas to get started:

- Simply start using Answer. Go through the [Getting Started](/docs/installation) guide. Does everything work as expected? If not, we're always looking for improvements. Let us know by [opening an issue](/community/issues).
- Look through the [open issues](https://github.com/apache/incubator-answer/issues). Provide workarounds, ask for clarification, or suggest labels. Help [triage issues](#triaging-issues-and-pull-requests).
- If you find an issue you would like to fix, [open a pull request](/community/pull-request). Issues tagged as [Good first issue](https://github.com/apache/incubator-answer/labels/good%20first%20issue) are a good place to get started.
- Read through the [Answer docs](/docs). If you find anything that is confusing or can be improved, you can click "Edit this page" at the bottom of most docs, which takes you to the GitHub interface to make and propose changes.
- Take a look at the [features requested](https://github.com/apache/incubator-answer/labels/enhancement) by others in the community and consider opening a pull request if you see something you want to work on. -->


## Development process

Answer uses [GitHub](https://github.com/apache/incubator-answer) as its source of truth. The core team will be working directly there. All changes will be public from the beginning.

All pull requests will be checked by the continuous integration system, GitHub actions. There are unit tests, and much more.

### Branch organization

Answer has one primary branch `main` and we use feature branches with deploy previews to deliver new features with pull requests.
