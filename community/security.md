---
slug: /security
---

# Security

The Apache Software Foundation takes a rigorous stance on eliminating security issues in its software projects. If you find a security bug, with that in mind, please do not file public issues. You can follow the instructions in the [security policy](https://github.com/apache/incubator-answer/security/policy) to report it privately. We will fix it as soon as possible.

# Security fixes

## v1.4.0

### CVE-2024-45719

The ids generated using the UUID v1 version are to some extent not secure enough. It can cause the generated token to be predictable.

https://www.cve.org/CVERecord?id=CVE-2024-45719

## v1.3.5

### CVE-2024-41888

The password reset link remains valid within its expiration period even after it has been used. This could potentially lead to the link being misused or hijacked.

https://www.cve.org/CVERecord?id=CVE-2024-41888

### CVE-2024-41890

User sends multiple password reset emails, each containing a valid link. Within the link's validity period, this could potentially lead to the link being misused or hijacked.

https://www.cve.org/CVERecord?id=CVE-2024-41890

## v1.2.5

### CVE-2024-29217

XSS attack when user changes personal website. A logged-in user, when modifying their personal website, can input malicious code in the website to create such an attack.

https://www.cve.org/CVERecord?id=CVE-2024-29217

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
