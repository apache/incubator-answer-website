---
slug: /security
---

# Security

The Apache Software Foundation takes a rigorous stance on eliminating security issues in its software projects. If you find a security bug, with that in mind, please do not file public issues. You can follow the instructions in the [security policy](https://github.com/apache/incubator-answer/security/policy) to report it privately. We will fix it as soon as possible.

# Security fixes

## v1.2.0

### CVE-2023-49619

Under normal circumstances, a user can only bookmark a question once, and will only increase the number of questions bookmarked once. However, repeat submissions through the script can increase the number of collection of the question many times.

https://www.cve.org/CVERecord?id=CVE-2023-49619