# How to Release

## Apache Release Guide
> All Apache projects are required to follow the [Apache Release Policy](https://www.apache.org/legal/release-policy.html). This guide is intended to help you understand the policy and how to release projects at Apache.

## Release Process
1. Prepare all the release artifacts.
2. Upload the release artifacts to the svn repository.
3. Verify the release artifacts.
4. Vote on the release.

## Prepare all the release artifacts
1. Create the RC tag in the git repository and write the release notes.
2. Build the release artifacts(bundles, source archives, etc).
3. Sign the release artifacts.
4. Create the checksums for the release artifacts.

## Upload the release artifacts to the svn repository
1. Create a directory for the release artifacts in the svn repository.
2. Upload the release artifacts to the svn repository.
3. Upload the KEYS file to the svn repository.

## Verify the release artifacts
Basic check items:

- [ ] Download links are valid.
- [ ] Checksums and PGP signatures are valid.
- [ ] Source code distributions have correct names matching the current release.
- [ ] LICENSE and NOTICE files are correct for each Answer repo.
- [ ] All files have license headers if necessary.
- [ ] No unlicensed compiled archives bundled in source archive.

### How to verify the signatures

```shell
# download KEYS
$ curl https://dist.apache.org/repos/dist/dev/incubator/answer/KEYS > KEYS

# import KEYS and trust the key
$ gpg --import KEYS
$ gpg --edit-key joyqi@apache.org
gpg> trust
gpg> 5
gpg> y
gpg> quit

# verify the signature
$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done
```

### How to verify the checksums

```shell
# verify the checksums
$ for i in *.tar.gz; do echo $i; sha512sum --check  $i.sha512; done
```

## Vote on the release
1. Send a vote email to the `dev@answer.apache.org`. Incubator need to first do a vote on their dev list and that vote requires at least 3 +1s from Answer PPMC members.
2. Wait for at least 72 hours or until the necessary number of votes are reached.
3. Announce the result of the vote on the dev list.
4. If the dev vote passes, send email to the `general@incubator.apache.org` to request a vote on the general list. The incubator vote needs at least 3 +1s from Incubator PMC members
   (binding votes).
5. Wait for at least 72 hours or until the necessary number of votes are reached.
6. Announce the result of the vote on the dev list.

### Vote Email Template

```text
[VOTE] Release Apache Answer(Incubating) {release-version}

Hello,

    This is a call for vote to release Apache Answer(Incubating) version {release-version}.

    The vote thread:
        https://lists.apache.org/thread/xxxxxx

    Vote Result:
        https://lists.apache.org/thread/xxxxxx

    The release candidates:
        https://dist.apache.org/repos/dist/dev/incubator/answer/{release-version}/
    
    Release notes:
        https://github.com/apache/incubator-answer/releases/tag/{release-version}

    Git tag for the release:
        https://github.com/apache/incubator-answer/releases/tag/{release-version}
    
    Git commit id for the release:
        https://github.com/apache/incubator-answer/commit/xxxxxxxxxxx

    Keys to verify the Release Candidate:
        https://dist.apache.org/repos/dist/dev/incubator/answer/KEYS
        
    The vote will be open for at least 72 hours or until the necessary number of votes are reached.

    Please vote accordingly:

    [ ] +1 approve
    [ ] +0 no opinion
    [ ] -1 disapprove with the reason

    Checklist for reference:

    [ ] Download links are valid.
    [ ] Checksums and PGP signatures are valid.
    [ ] Source code distributions have correct names matching the current release.
    [ ] LICENSE and NOTICE files are correct for each Answer repo.
    [ ] All files have license headers if necessary.
    [ ] No unlicensed compiled archives bundled in source archive.

    To compile from the source, please refer to:
    
    https://github.com/apache/incubator-answer#building-from-source

Thanks,
LinkinStar
```