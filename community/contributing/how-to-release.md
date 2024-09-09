---
slug: /how-to-release
---

# How to Release

All Apache projects are required to follow the [Apache Release Policy](https://www.apache.org/legal/release-policy.html). This guide is intended to help you understand the policy and how to release projects at Apache.

## Release Process
1. Create a GPG key if you don't have one.
3. Upload release artifacts to svn repository.
4. Verify the release artifacts.
5. Start a vote.
6. Announce the vote result and release.

## Create a GPG key
Create a GPG key if you don't have one. You can follow the instructions [here](https://www.apache.org/dev/openpgp.html).

```shell
# create a GPG key
$ gpg --full-generate-key

# list the GPG keys
$ gpg  --keyid-format SHORT --list-keys

# upload the GPG key to the key server, xxx is the GPG key id
$ gpg --keyserver keyserver.ubuntu.com --send-key xxx

# append the GPG key to the KEYS file the svn repository
$ svn co https://dist.apache.org/repos/dist/release/incubator/answer/
$ (gpg --list-sigs xxx@apache.org && gpg --export --armor xxx@apache.org) >> KEYS
$ svn ci -m "add gpg key" 
```


## Upload the release artifacts to the svn repository

### Prepare all the release artifacts

1. Create the RC tag in the git repository and write the release notes.
   1. notice 1: Remember to select `Set as a pre-release` before clicking `Publish release`.
   2. notice 2: Release notes should choose a tag that is not the branch, such as `v1.2.0-RC1`.
3. Build the release artifacts(bundles, source archives, etc).

### Sign the release artifacts

Sign the release artifacts with the GPG key. **Be careful to check that the binary file is complete to avoid a size of 0.**

```shell
# sign the release artifacts, xxxx is xxx@apache.org
$ for i in *.tar.gz; do echo $i; gpg --local-user xxxx --armor --output $i.asc --detach-sig $i ; done
```

### Create the checksums for the release artifacts

```shell
# create the checksums
$ for i in *.tar.gz; do echo $i; sha512sum  $i > $i.sha512 ; done
```

### Upload to the svn repository
> **NOTICE** The repository address where the GPG key is created and the prepository address where the release artifacts are uploaded are not the same. The GPG key is uploaded to the `https://dist.apache.org/repos/dist/release/incubator/answer/` repository, and the release artifacts are uploaded to the `https://dist.apache.org/repos/dist/dev/incubator/answer/` repository.

1. Create a directory for the release artifacts in the svn repository.
   ```shell
   $ svn co https://dist.apache.org/repos/dist/dev/incubator/answer/
   ```
2. Upload the release artifacts to the svn repository.
   ```shell
   $ cp /path/to/release/artifacts/* ./{release-version}/
   $ svn add ./{release-version}/*
   ```
3. release-version format: 1.3.1-incubating
   ```shell
   $ svn commit -m "add Apache Answer release artifacts for {release-version}"
   ```
The release artifacts should be uploaded to the `https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}` directory.


**IMPORTANT** After completion, visit the link `https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}` to check whether the file upload is correct.

![correct result](/img/community/release.jpeg)


## Verify the release artifacts

Following is the basic check items for the release artifacts.

- [ ] Download links are valid.
- [ ] Checksums and PGP signatures are valid.
- [ ] Source code distributions have correct names matching the current release.
- [ ] LICENSE and NOTICE files are correct for each Apache Answer repo.
- [ ] All files have license headers if necessary.
- [ ] No unlicensed compiled archives bundled in source archive.

### How to verify the signatures

```shell
# download KEYS
$ curl https://dist.apache.org/repos/dist/release/incubator/answer/KEYS > KEYS

# import KEYS and trust the key, please replace the email address with the one you want to trust.
$ gpg --import KEYS
$ gpg --edit-key linkinstar@apache.org
gpg> trust
gpg> 5
gpg> y
gpg> quit

# enter the directory where the release artifacts are located
$ cd /path/to/release/artifacts

# verify the signature
$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done

# if you see 'Good signature' in the output, it means the signature is valid.
```

### How to verify the checksums

```shell
# verify the checksums
$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done
```

## Start a vote

1. Send a vote email to the dev@answer.apache.org. Incubator need to first do a vote on their dev list and that vote requires at least **3 +1s from Apache Answer PPMC members**.
2. Wait for at **least 72 hours** or until the necessary number of votes are reached.
3. Announce the result of the vote on the dev list.
4. If the dev vote passes, send email to the general@incubator.apache.org to request a vote on the general list. The incubator vote needs at least **3 +1s from Incubator PMC members**
   (binding votes).
5. Wait for at **least 72 hours** or until the necessary number of votes are reached.
6. Announce the result of the vote on the general list.

### Vote email template

**NOTICE**  Directly copying the email content will cause the format to be incorrect. It is recommended to copy the email to a `.txt` file. After writing the content, copy it into the email tool you are using.  `The vote tread` and `Vote Result` is not needed during the first round of voting in dev.

How to get the link to The vote thread:
1. Find the email you sent from the apache mailing list.
2. Click the link button below the email to get the link you need.

![vote thread link](/img/community/vote-tread-link.jpeg)



```text
[VOTE] Release Apache Answer (Incubating) {release-version}

Hello,

    This is a call for vote to release Apache Answer (Incubating) version {release-version}.

    The vote thread:
        https://lists.apache.org/thread/{id}

    Vote Result:
        https://lists.apache.org/thread/{id}

    The release candidates:
        https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}/
    
    Release notes:
        https://github.com/apache/incubator-answer/releases/tag/{release-version}

    Git tag for the release:
        https://github.com/apache/incubator-answer/releases/tag/{release-version}
    
    Git commit id for the release:
        https://github.com/apache/incubator-answer/commit/{id}

    Keys to verify the Release Candidate:
        https://downloads.apache.org/incubator/answer/KEYS
        
    The vote will be open for at least 72 hours or until the necessary number of votes are reached.

    Please vote accordingly:

    [ ] +1 approve
    [ ] +0 no opinion
    [ ] -1 disapprove with the reason

    Checklist for reference:

    [ ] Download links are valid.
    [ ] Checksums and PGP signatures are valid.
    [ ] Source code distributions have correct names matching the current release.
    [ ] LICENSE and NOTICE files are correct for each Apache Answer repo.
    [ ] All files have license headers if necessary.
    [ ] No unlicensed compiled archives bundled in source archive.

    To compile from the source, please refer to:
    
    https://github.com/apache/incubator-answer#building-from-source

Thanks,
<YOUR NAME>
```

### ANNOUNCE email template

```text
Hello everyone,

The Apache Answer (Incubating) {release-version} has been released!

Apache Answer is a Q&A platform software for teams at any scale.
Whether it's a community forum, help center, or knowledge management platform, you can always count on Apache Answer.

Download Links: https://downloads.apache.org/incubator/answer/

Release Notes: https://github.com/apache/incubator-answer/releases/tag/{release-version}

Website: https://answer.apache.org/

Resources:
- Issue: https://github.com/apache/incubator-answer/issues
- Mailing list: dev@answer.apache.org

Thanks,
<YOUR NAME>
```

## Migrating the release artifacts to the release Apache SVN

Before announcing the vote result, you need to migrate the release artifacts from the dev Apache SVN to the release Apache SVN. The release artifacts should be uploaded to the `https://dist.apache.org/repos/dist/release/incubator/answer/{release-version}` directory.

```shell
$ svn mv https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version} https://dist.apache.org/repos/dist/release/incubator/answer/{release-version} -m "transfer packages for answer {release-version}"
```

## Note
### RC Tag
When you want to release a new version, you need to create a new RC tag in the git repository firstly. The tag name should be `v{release-version}-rc{rc-version}`. This has the advantage of avoiding tag deletion. 

For example, if you want to release version `1.2.0`, you need to create a tag named `v1.2.0-RC1`. RC means Release Candidate. After the release vote is passed, you need to create a new tag named `v1.2.0` based on the RC tag. However, if the vote is not passed, you can fix the problems and create a new RC tag such as `v1.2.0-RC2` and start a new vote.
