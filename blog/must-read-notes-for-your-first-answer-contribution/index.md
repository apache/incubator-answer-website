---
date: 2024-02-04
title: "Must-Read Notes for Your First Answer Contribution"
authors: [LinkinStar]
category: Community
featured: true
image: 2024-02-04-cover@4x.png
description: "Before the debut, check the must-read notes to ensure your first Answer contribution shines."

---

> I want to contribute code to Answer, so what do I need to be concerned about when contributing for the first time?

In this blog, I want to talk about the first contribution to Answer. This blog aims to help you contribute to Answer more professionally.

## Steps to Contribute
When start contributing, here are the steps to you need to follow:
1. Find or create an issue.
2. You were assigned to the issue.
3. Submit a pull request.
4. Wait for the pull request to be reviewed.
5. Make changes if necessary.
6. The pull request is merged.

## Issue First
Before start contributing, you need to find an issue to work on. If issue doesn't exist, you need to create one first. BTW, the `good first issue` is a label means that the issue is friendly to new contributors. So you can find this kind of issue to start your contribution.

- I'm trying to work out a bug, so I need to create an issue first.
- I'm trying to add a new feature, so I need to create an issue first.
- I'm trying to improve the documentation, so I need to create an issue first.
- ...

Create an issue and let us know that you plan on creating a pull request for it. If an issue already exists, please comment on that issue letting us know you would like to submit a pull request for it. **This helps us to keep track of the pull request and make sure there isn't duplicated effort.** After we assign the issue to you, you can start working on it.

## Choose the Right Branch
Which branch should you choose when you submit your PR?

- The `main` branch corresponds to the **latest version** of answer. If you're doing a **fix** for the latest version, then select the main branch.
- The `dev` branch is for the **next version**, so if you're working on a **new feature**, checkout of the dev branch and PR for it.

Normally, we mark milestones on an issue to keep track of which version the issue should be fixed in. So you can check which version you should commit to based on the milestone.

## Code of Conduct
Apache Answer has adopted a Code of Conduct that we expect project participants to adhere to. Please read the [full text](https://www.apache.org/foundation/policies/conduct.html) so that you can understand what actions will and will not be tolerated.

## Code Style
When you start contributing, you need to follow the code style.

- [FRONTEND](https://answer.apache.org/community/development#code-conventions)
- [BACKEND](https://answer.apache.org/community/development#code-conventions-1)

## License
Normally, your contributions do not import third-party dependencies. However, if you encounter such a situation, you must import a third-party dependency. **Then you need to make sure that the license of the dependency is one that meets Apache's requirements.** If you are not sure if the requirements are met, you can ask us before submitting your PR.

## Commit message
When you start contributing, you need to follow the [commit message format](https://answer.apache.org/community/pull-request#semantic-commit-messages).

## Testing
This is a very important part of contributing. When you finish your code, you need to test your code to make sure that your code is working correctly. 

1. Compile your code to make sure that your code can build successfully.
2. Run and test your code to make sure that features are working correctly.
3. If you have no environment to test, such as Windows, you can ask us to help you test.

## Double Check the ASF Headers
If you add new files, please make sure that the file has the ASF header. You can run the following command to add the ASF header automatically.

```bash
$ make lint
```

## Summary
Following these steps helps us merge PRs efficiently. We can't wait to see your first contribution that shapes Answer better.