---
slug: /database
---

# Database Schema

:::note

Different databases have different data types. The following table presumes use of mysql/mariadb as an example.

:::

## activity

> `activity` table records various actions of users, such as votes, etc.

| COLUMN          | DATA TYPE  | NULLABLE | KEY | DEFAULT | COMMENT                                                                     |
| --------------- | ---------- | -------- | --- | ------- | --------------------------------------------------------------------------- |
| id              | bigint(20) | NO       | PRI |         | activity id                                                                 |
| created_at      | timestamp  | YES      |     |         | create time                                                                 |
| updated_at      | timestamp  | YES      |     |         | update time                                                                 |
| user_id         | bigint(20) | NO       | MUL |         | the user ID that generated the activity or affected by the activity         |
| trigger_user_id | bigint(20) | NO       | MUL | 0       | the trigger user ID that generated the activity or affected by the activity |
| object_id       | bigint(20) | NO       | MUL | 0       | the object ID that affected by the activity                                 |
| activity_type   | int(11)    | NO       |     |         | activity type, correspond to config id                                      |
| cancelled       | tinyint(4) | NO       |     | 0       | mark this activity if cancelled                                             |
| rank            | int(11)    | NO       |     | 0       | rank of current operating user affected                                     |
| has_rank        | tinyint(4) | NO       |     | 0       | this activity has rank or not                                               |

## answer

> `answer` table records the answer info.

| COLUMN        | DATA TYPE  | NULLABLE | KEY | DEFAULT           | COMMENT                                 |
| ------------- | ---------- | -------- | --- | ----------------- | --------------------------------------- |
| id            | bigint(20) | NO       | PRI |                   | answer id                               |
| created_at    | timestamp  | NO       |     | CURRENT_TIMESTAMP | create time                             |
| updated_at    | timestamp  | NO       |     | CURRENT_TIMESTAMP | update time                             |
| question_id   | bigint(20) | NO       |     | 0                 | question id                             |
| user_id       | bigint(20) | NO       | MUL | 0                 | answer user id                          |
| original_text | mediumtext | NO       |     |                   | original text                           |
| parsed_text   | mediumtext | NO       |     |                   | parsed text                             |
| status        | int(11)    | NO       |     | 1                 | answer status(available: 1;deleted: 10) |
| adopted       | int(11)    | NO       |     | 1                 | adopted (1 failed 2 adopted)            |
| comment_count | int(11)    | NO       |     | 0                 | comment count                           |
| vote_count    | int(11)    | NO       |     | 0                 | vote count                              |
| revision_id   | bigint(20) | NO       |     | 0                 | revision id                             |

## collection

> `collection` table records user collection about any object.

|          COLUMN          | DATA TYPE  | NULLABLE | KEY |      DEFAULT      |         COMMENT          |
|--------------------------|------------|----------|-----|-------------------|--------------------------|
| id                       | bigint(20) | NO       | PRI |                 0 | collection id            |
| created_at               | timestamp  | NO       |     | CURRENT_TIMESTAMP | created time             |
| updated_at               | timestamp  | NO       |     | CURRENT_TIMESTAMP | updated time             |
| user_id                  | bigint(20) | NO       | MUL |                 0 | user id                  |
| object_id                | bigint(20) | NO       |     |                 0 | object id                |
| user_collection_group_id | bigint(20) | NO       |     |                 0 | user collection group id |

## collection_group

|    COLUMN     |  DATA TYPE  | NULLABLE | KEY |      DEFAULT      |            COMMENT             |
|---------------|-------------|----------|-----|-------------------|--------------------------------|
| id            | bigint(20)  | NO       | PRI |                   | id                             |
| created_at    | timestamp   | NO       |     | CURRENT_TIMESTAMP | created time                   |
| updated_at    | timestamp   | NO       |     | CURRENT_TIMESTAMP | updated time                   |
| user_id       | bigint(20)  | NO       | MUL |                 0 | user id                        |
| name          | varchar(50) | NO       |     |                   | the collection group name      |
| default_group | int(11)     | NO       |     |                 1 | mark this group is default,    |
|               |             |          |     |                   | default 1                      |

## comment

> `comment` table records the comment about question or answer.

| COLUMN           | DATA TYPE  | NULLABLE | KEY | DEFAULT | COMMENT                                  |
| ---------------- | ---------- | -------- | --- | ------- | ---------------------------------------- |
| id               | bigint(20) | NO       | PRI |         | comment id                               |
| created_at       | timestamp  | YES      |     |         | create time                              |
| updated_at       | timestamp  | YES      |     |         | update time                              |
| user_id          | bigint(20) | NO       |     | 0       | user id                                  |
| reply_user_id    | bigint(20) | YES      |     |         | reply user id                            |
| reply_comment_id | bigint(20) | YES      |     |         | reply comment id                         |
| object_id        | bigint(20) | NO       | MUL | 0       | object id                                |
| question_id      | bigint(20) | NO       |     | 0       | question id                              |
| vote_count       | int(11)    | NO       |     | 0       | user vote amount                         |
| status           | tinyint(4) | NO       |     | 0       | comment status(available: 1;deleted: 10) |
| original_text    | mediumtext | NO       |     |         | original comment content                 |
| parsed_text      | mediumtext | NO       |     |         | parsed comment content                   |

## config

> `config` records the site configuration.

| COLUMN | DATA TYPE   | NULLABLE | KEY | DEFAULT | COMMENT                                            |
| ------ | ----------- | -------- | --- | ------- | -------------------------------------------------- |
| id     | int(11)     | NO       | PRI |         | config id                                          |
| key    | varchar(32) | YES      | UNI |         | the config key                                     |
| value  | text        | YES      |     |         | the config value, custom data structures and types |

## meta

> `meta` records some extra information about the object.

|   COLUMN   |  DATA TYPE   | NULLABLE | KEY |      DEFAULT      |   COMMENT    |
|------------|--------------|----------|-----|-------------------|--------------|
| id         | int(10)      | NO       | PRI |                   | id           |
| created_at | timestamp    | NO       |     | CURRENT_TIMESTAMP | created time |
| updated_at | timestamp    | NO       |     | CURRENT_TIMESTAMP | updated time |
| object_id  | bigint(20)   | NO       | MUL |                 0 | object id    |
| key        | varchar(100) | NO       |     |                   | key          |
| value      | mediumtext   | NO       |     |                   | value        |

## notification

> `notification` table records the notification that user received.

| COLUMN     | DATA TYPE  | NULLABLE | KEY | DEFAULT | COMMENT                                 |
| ---------- | ---------- | -------- | --- | ------- | --------------------------------------- |
| id         | bigint(20) | NO       | PRI |         | notification id                         |
| created_at | timestamp  | YES      |     |         | create time                             |
| updated_at | timestamp  | YES      |     |         | update time                             |
| user_id    | bigint(20) | NO       | MUL | 0       | user id                                 |
| object_id  | bigint(20) | NO       | MUL | 0       | object id                               |
| content    | text       | NO       |     |         | notification content                    |
| type       | int(11)    | NO       |     | 0       | notification type(1:inbox;              |
|            |            |          |     |         | 2:achievement)                          |
| is_read    | int(11)    | NO       |     | 1       | read status(unread: 1; read 2)          |
| status     | int(11)    | NO       |     | 1       | notification status(normal: 1;delete 2) |

## question

> `question` table records the question info.

| COLUMN             | DATA TYPE    | NULLABLE | KEY | DEFAULT           | COMMENT                                   |
| ------------------ | ------------ | -------- | --- | ----------------- | ----------------------------------------- |
| id                 | bigint(20)   | NO       | PRI |                   | question id                               |
| created_at         | timestamp    | NO       |     | CURRENT_TIMESTAMP | create time                               |
| updated_at         | timestamp    | NO       |     | CURRENT_TIMESTAMP | update time                               |
| user_id            | bigint(20)   | NO       | MUL | 0                 | user id                                   |
| title              | varchar(150) | NO       |     |                   | question title                            |
| original_text      | mediumtext   | NO       |     |                   | original text                             |
| parsed_text        | mediumtext   | NO       |     |                   | parsed text                               |
| status             | int(11)      | NO       |     | 1                 | question status(available: 1;deleted: 10) |
| view_count         | int(11)      | NO       |     | 0                 | view count                                |
| unique_view_count  | int(11)      | NO       |     | 0                 | unique view count                         |
| vote_count         | int(11)      | NO       |     | 0                 | vote count                                |
| answer_count       | int(11)      | NO       |     | 0                 | answer count                              |
| collection_count   | int(11)      | NO       |     | 0                 | collection count                          |
| follow_count       | int(11)      | NO       |     | 0                 | follow count                              |
| accepted_answer_id | bigint(20)   | NO       |     | 0                 | accepted answer id                        |
| last_answer_id     | bigint(20)   | NO       |     | 0                 | last answer id                            |
| post_update_time   | timestamp    | YES      |     | CURRENT_TIMESTAMP | answer the last update time               |
| revision_id        | bigint(20)   | NO       |     | 0                 | revision id                               |

## report

> `report` table records the content of user reports

| COLUMN           | DATA TYPE  | NULLABLE | KEY | DEFAULT | COMMENT                                  |
| ---------------- | ---------- | -------- | --- | ------- | ---------------------------------------- |
| id               | bigint(20) | NO       | PRI |         | id                                       |
| created_at       | timestamp  | YES      |     |         | create time                              |
| updated_at       | timestamp  | YES      |     |         | update time                              |
| user_id          | bigint(20) | NO       |     |         | reporter user id                         |
| object_id        | bigint(20) | NO       |     |         | object id                                |
| reported_user_id | bigint(20) | NO       |     | 0       | reported user id                         |
| object_type      | int(11)    | NO       |     | 0       | revision type                            |
| report_type      | int(11)    | NO       |     | 0       | report type                              |
| content          | text       | NO       |     |         | report content                           |
| flagged_type     | int(11)    | NO       |     | 0       | flagged type                             |
| flagged_content  | text       | YES      |     |         | flagged content                          |
| status           | int(11)    | NO       |     | 1       | status(normal: 1; pending:2; delete: 10) |

## revision

> `revision` table records the object revision and the content of the version.

| COLUMN      | DATA TYPE    | NULLABLE | KEY | DEFAULT | COMMENT                                     |
| ----------- | ------------ | -------- | --- | ------- | ------------------------------------------- |
| id          | bigint(20)   | NO       | PRI |         | id                                          |
| created_at  | timestamp    | YES      |     |         | create time                                 |
| updated_at  | timestamp    | YES      |     |         | update time                                 |
| user_id     | bigint(20)   | NO       |     | 0       | user id                                     |
| object_type | int(11)      | NO       |     | 0       | revision type(question: 1; answer 2; tag 3) |
| object_id   | bigint(20)   | NO       | MUL | 0       | object id                                   |
| title       | varchar(255) | NO       |     |         | title                                       |
| content     | text         | NO       |     |         | content                                     |
| log         | varchar(255) | YES      |     |         | log                                         |
| status      | int(11)      | NO       |     | 1       | revision status(normal: 1; delete 2)        |

## site_info

> `site_info` table records the site information about interface or something related

| COLUMN     | DATA TYPE   | NULLABLE | KEY | DEFAULT | COMMENT                                    |
| ---------- | ----------- | -------- | --- | ------- | ------------------------------------------ |
| id         | int(11)     | NO       | PRI |         | id                                         |
| created_at | timestamp   | YES      |     |         | create time                                |
| updated_at | timestamp   | YES      |     |         | update time                                |
| type       | varchar(64) | NO       |     |         | type                                       |
| content    | mediumtext  | NO       |     |         | content                                    |
| status     | int(11)     | NO       |     | 1       | site info status(available: 1;deleted: 10) |

## tag

> `tag` table records the tag information.

| COLUMN             | DATA TYPE   | NULLABLE | KEY | DEFAULT | COMMENT                              |
| ------------------ | ----------- | -------- | --- | ------- | ------------------------------------ |
| id                 | bigint(20)  | NO       | PRI |         | tag_id                               |
| created_at         | timestamp   | YES      |     |         | create time                          |
| updated_at         | timestamp   | YES      |     |         | update time                          |
| main_tag_id        | bigint(20)  | NO       |     | 0       | main tag id                          |
| main_tag_slug_name | varchar(35) | NO       |     |         | main tag slug name                   |
| slug_name          | varchar(35) | NO       | UNI |         | slug name                            |
| display_name       | varchar(35) | NO       |     |         | display name                         |
| original_text      | mediumtext  | NO       |     |         | original comment content             |
| parsed_text        | mediumtext  | NO       |     |         | parsed comment content               |
| follow_count       | int(11)     | NO       |     | 0       | associated follow count              |
| question_count     | int(11)     | NO       |     | 0       | associated question count            |
| status             | int(11)     | NO       |     | 1       | tag status(available: 1;deleted: 10) |
| revision_id        | bigint(20)  | NO       |     | 0       | revision id                          |

## tag_rel

> `tag_rel` table records the relationship between objects and tags

| COLUMN     | DATA TYPE  | NULLABLE | KEY | DEFAULT | COMMENT                                   |
| ---------- | ---------- | -------- | --- | ------- | ----------------------------------------- |
| id         | bigint(20) | NO       | PRI |         | tag_list_id                               |
| created_at | timestamp  | YES      |     |         | create time                               |
| updated_at | timestamp  | YES      |     |         | update time                               |
| object_id  | bigint(20) | NO       | MUL |         | object_id                                 |
| tag_id     | bigint(20) | NO       | MUL |         | tag_id                                    |
| status     | int(11)    | NO       |     | 1       | tag_list_status(available: 1;deleted: 10) |

## uniqid

> `uniqid` table recorded the object_id that can uniquely identify an object.

|   COLUMN    | DATA TYPE  | NULLABLE | KEY | DEFAULT |   COMMENT   |
|-------------|------------|----------|-----|---------|-------------|
| id          | bigint(20) | NO       | PRI |         | uniqid_id   |
| uniqid_type | int(11)    | NO       |     |       0 | uniqid_type |

## user

> The user table recorded basic information about the user.

| COLUMN          | DATA TYPE    | NULLABLE | KEY | DEFAULT | COMMENT                                |
| --------------- | ------------ | -------- | --- | ------- | -------------------------------------- |
| id              | bigint(20)   | NO       | PRI |         | user id                                |
| created_at      | timestamp    | YES      |     |         | create time                            |
| updated_at      | timestamp    | YES      |     |         | update time                            |
| suspended_at    | timestamp    | YES      |     |         | suspended time                         |
| deleted_at      | timestamp    | YES      |     |         | delete time                            |
| last_login_date | timestamp    | YES      |     |         | last login date                        |
| username        | varchar(50)  | NO       | UNI |         | username                               |
| pass            | varchar(255) | NO       |     |         | password                               |
| e_mail          | varchar(100) | NO       |     |         | email                                  |
| mail_status     | tinyint(4)   | NO       |     | 2       | mail status(1 pass 2 to be verified)   |
| notice_status   | int(11)      | NO       |     | 2       | notice status(1 on 2off)               |
| follow_count    | int(11)      | NO       |     | 0       | follow count                           |
| answer_count    | int(11)      | NO       |     | 0       | answer count                           |
| question_count  | int(11)      | NO       |     | 0       | question count                         |
| rank            | int(11)      | NO       |     | 0       | rank                                   |
| status          | int(11)      | NO       |     | 1       | user status(available: 1; deleted: 10) |
| authority_group | int(11)      | NO       |     | 1       | authority group                        |
| display_name    | varchar(30)  | NO       |     |         | display name                           |
| avatar          | varchar(255) | NO       |     |         | avatar                                 |
| mobile          | varchar(20)  | NO       |     |         | mobile                                 |
| bio             | text         | NO       |     |         | bio markdown                           |
| bio_html        | text         | NO       |     |         | bio html                               |
| website         | varchar(255) | NO       |     |         | website                                |
| location        | varchar(100) | NO       |     |         | location                               |
| ip_info         | varchar(255) | NO       |     |         | ip info                                |
| is_admin        | int(11)      | NO       |     | 0       | admin flag                             |

## version

> The version of the current answer is recorded in version table for upgrade.

|     COLUMN     | DATA TYPE | NULLABLE | KEY | DEFAULT |    COMMENT     |
|----------------|-----------|----------|-----|---------|----------------|
| id             | int(11)   | NO       | PRI |         | id             |
| version_number | int(11)   | NO       |     |       0 | version_number |
