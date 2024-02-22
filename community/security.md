---
slug: /security
---

# Security

The Apache Software Foundation takes a rigorous stance on eliminating security issues in its software projects. If you find a security bug, with that in mind, please do not file public issues. You can follow the instructions in the [security policy](https://github.com/apache/incubator-answer/security/policy) to report it privately. We will fix it as soon as possible.

# Security fixes

## v1.2.1

### CVE-2024-22393

Pixel Flood Attack by uploading large pixel files will cause server out of memory. A logged-in user can cause such an attack by uploading an image when posting content.

https://www.cve.org/CVERecord?id=CVE-2024-22393

### CVE-2024-26578

Repeated submission during registration resulted in the registration of the same user. When users register, if they rapidly submit multiple registrations using scripts, it can result in the creation of multiple user accounts simultaneously with the same name.

https://www.cve.org/CVERecord?id=CVE-2024-26578

### CVE-2024-23349

XSS attack when user enters summary. A logged-in user, when modifying their own submitted question, can input malicious code in the summary to create such an attack.

https://www.cve.org/CVERecord?id=CVE-2024-23349

## v1.2.0

### CVE-2023-49619

Under normal circumstances, a user can only bookmark a question once, and will only increase the number of questions bookmarked once. However, repeat submissions through the script can increase the number of collection of the question many times.

https://www.cve.org/CVERecord?id=CVE-2023-49619