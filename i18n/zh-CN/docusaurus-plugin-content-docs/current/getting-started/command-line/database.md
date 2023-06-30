---
slug: /database
---

# 数据库介绍

:::note

不同的数据库具有不同的数据类型。下表以mysql/mariadb为例。

:::

## activity
>
> `activity` 表记录用户的各种行为，如投票等。

| COLUMN             | DATA TYPE  | NULLABLE | KEY | DEFAULT | COMMENT                                                                     |
|--------------------|------------|----------|-----|---------|-----------------------------------------------------------------------------|
| id                 | bigint(20) | NO       | PRI |         | activity id                                                                 |
| created_at         | timestamp  | YES      |     |         | create time                                                                 |
| updated_at         | timestamp  | YES      |     |         | update time                                                                 |
| cancelled_at       | timestamp  | YES      |     |         | cancelled time                                                              |
| user_id            | bigint(20) | NO       | MUL |         | the user ID that generated the activity or affected by the activity         |
| trigger_user_id    | bigint(20) | NO       | MUL | 0       | the trigger user ID that generated the activity or affected by the activity |
| object_id          | bigint(20) | NO       | MUL | 0       | the object ID that affected by the activity                                 |
| original_object_id | bigint(20) | NO       |     | 0       | the original object ID that activity                                        |
| activity_type      | int(11)    | NO       |     |         | activity type, correspond to config id                                      |
| cancelled          | tinyint(4) | NO       |     | 0       | mark this activity if cancelled                                             |
| rank               | int(11)    | NO       |     | 0       | rank of current operating user affected                                     |
| has_rank           | tinyint(4) | NO       |     | 0       | this activity has rank or not                                               |
| revision_id        | bigint(20) | NO       |     | 0       | revision id                                                                 |

## answer
>
> `answer` 表记录答案信息。

| COLUMN            | DATA TYPE  | NULLABLE | KEY | DEFAULT           | COMMENT                                 |
|-------------------|------------|----------|-----|-------------------|-----------------------------------------|
| id                | bigint(20) | NO       | PRI |                   | answer id                               |
| created_at        | timestamp  | NO       |     | CURRENT_TIMESTAMP | create time                             |
| updated_at        | timestamp  | YES      |     |                   | update time                             |
| question_id       | bigint(20) | NO       |     | 0                 | question id                             |
| user_id           | bigint(20) | NO       | MUL | 0                 | answer user id                          |
| last_edit_user_id | bigint(20) | NO       |     | 0                 | last edit user id                       |
| original_text     | mediumtext | NO       |     |                   | original text                           |
| parsed_text       | mediumtext | NO       |     |                   | parsed text                             |
| status            | int(11)    | NO       |     | 1                 | answer status(available: 1;deleted: 10) |
| adopted           | int(11)    | NO       |     | 1                 | adopted (1 failed 2 adopted)            |
| comment_count     | int(11)    | NO       |     | 0                 | comment count                           |
| vote_count        | int(11)    | NO       |     | 0                 | vote count                              |
| revision_id       | bigint(20) | NO       |     | 0                 | revision id                             |

## collection
>
> `collection` 表记录用户对任何对象的收藏信息。

| COLUMN                     | DATA TYPE    | NULLABLE   | KEY   | DEFAULT             | COMMENT                    |
|----------------------------|--------------|------------|-------|---------------------|----------------------------|
| id                         | bigint(20)   | NO         | PRI   | 0                   | collection id              |
| created_at                 | timestamp    | NO         |       | CURRENT_TIMESTAMP   | created time               |
| updated_at                 | timestamp    | NO         |       | CURRENT_TIMESTAMP   | updated time               |
| user_id                    | bigint(20)   | NO         | MUL   | 0                   | user id                    |
| object_id                  | bigint(20)   | NO         |       | 0                   | object id                  |
| user_collection_group_id   | bigint(20)   | NO         |       | 0                   | user collection group id   |

## collection_group

| COLUMN        | DATA TYPE   | NULLABLE | KEY | DEFAULT           | COMMENT                               |
|---------------|-------------|----------|-----|-------------------|---------------------------------------|
| id            | bigint(20)  | NO       | PRI |                   | id                                    |
| created_at    | timestamp   | NO       |     | CURRENT_TIMESTAMP | created time                          |
| updated_at    | timestamp   | NO       |     | CURRENT_TIMESTAMP | updated time                          |
| user_id       | bigint(20)  | NO       | MUL | 0                 | user id                               |
| name          | varchar(50) | NO       |     |                   | the collection group name             |
| default_group | int(11)     | NO       |     | 1                 | mark this group is default, default 1 |

## comment
>
> `comment` 表记录有关问题或答案的评论。

| COLUMN           | DATA TYPE  | NULLABLE | KEY | DEFAULT | COMMENT                                  |
|------------------|------------|----------|-----|---------|------------------------------------------|
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
>
> `config` 表记录站点配置。

| COLUMN | DATA TYPE    | NULLABLE | KEY | DEFAULT | COMMENT                                            |
|--------|--------------|----------|-----|---------|----------------------------------------------------|
| id     | int(11)      | NO       | PRI |         | config id                                          |
| key    | varchar(128) | YES      | UNI |         | the config key                                     |
| value  | text         | YES      |     |         | the config value, custom data structures and types |

## meta
>
> `meta` 表记录对象的一些额外信息。

|   COLUMN   |  DATA TYPE   | NULLABLE | KEY |      DEFAULT      |   COMMENT    |
|------------|--------------|----------|-----|-------------------|--------------|
| id         | int(10)      | NO       | PRI |                   | id           |
| created_at | timestamp    | NO       |     | CURRENT_TIMESTAMP | created time |
| updated_at | timestamp    | NO       |     | CURRENT_TIMESTAMP | updated time |
| object_id  | bigint(20)   | NO       | MUL |                 0 | object id    |
| key        | varchar(100) | NO       |     |                   | key          |
| value      | mediumtext   | NO       |     |                   | value        |

## notification
>
> `notification` 表记录用户收到的通知。

| COLUMN     | DATA TYPE  | NULLABLE | KEY | DEFAULT | COMMENT                                   |
|------------|------------|----------|-----|---------|-------------------------------------------|
| id         | bigint(20) | NO       | PRI |         | notification id                           |
| created_at | timestamp  | YES      |     |         | create time                               |
| updated_at | timestamp  | YES      |     |         | update time                               |
| user_id    | bigint(20) | NO       | MUL | 0       | user id                                   |
| object_id  | bigint(20) | NO       | MUL | 0       | object id                                 |
| content    | text       | NO       |     |         | notification content                      |
| type       | int(11)    | NO       |     | 0       | notification type(1:inbox; 2:achievement) |
| is_read    | int(11)    | NO       |     | 1       | read status(unread: 1; read 2)            |
| status     | int(11)    | NO       |     | 1       | notification status(normal: 1;delete 2)   |

## power
>
> `power` 表记录所有权限。

| COLUMN        | DATA TYPE      | NULLABLE   | KEY   | DEFAULT   | COMMENT     |
|---------------|----------------|------------|-------|-----------|-------------|
| id            | int(11)        | NO         | PRI   |           |             |
| created_at    | timestamp      | YES        |       |           | create time |
| updated_at    | timestamp      | YES        |       |           | update time |
| name          | varchar(50)    | NO         |       |           | name        |
| power_type    | varchar(100)   | NO         |       |           | power type  |
| description   | varchar(200)   | NO         |       |           | description |

## question
>
> `question` 表记录问题信息。

| COLUMN             | DATA TYPE    | NULLABLE | KEY | DEFAULT           | COMMENT                                   |
|--------------------|--------------|----------|-----|-------------------|-------------------------------------------|
| id                 | bigint(20)   | NO       | PRI |                   | question id                               |
| created_at         | timestamp    | NO       |     | CURRENT_TIMESTAMP | create time                               |
| updated_at         | timestamp    | NO       |     | CURRENT_TIMESTAMP | update time                               |
| user_id            | bigint(20)   | NO       | MUL | 0                 | user id                                   |
| last_edit_user_id  | bigint(20)   | NO       |     | 0                 | last edit user id                         |
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
>
> `report` 表记录用户举报的内容。

| COLUMN           | DATA TYPE  | NULLABLE | KEY | DEFAULT | COMMENT                                  |
|------------------|------------|----------|-----|---------|------------------------------------------|
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
>
> `revision` 表记录历史修订和版本内容。

| COLUMN         | DATA TYPE    | NULLABLE | KEY | DEFAULT | COMMENT                                     |
|----------------|--------------|----------|-----|---------|---------------------------------------------|
| id             | bigint(20)   | NO       | PRI |         | id                                          |
| created_at     | timestamp    | YES      |     |         | create time                                 |
| updated_at     | timestamp    | YES      |     |         | update time                                 |
| user_id        | bigint(20)   | NO       |     | 0       | user id                                     |
| object_type    | int(11)      | NO       |     | 0       | revision type(question: 1; answer 2; tag 3) |
| object_id      | bigint(20)   | NO       | MUL | 0       | object id                                   |
| title          | varchar(255) | NO       |     |         | title                                       |
| content        | text         | NO       |     |         | content                                     |
| log            | varchar(255) | YES      |     |         | log                                         |
| status         | int(11)      | NO       |     | 1       | revision status(normal: 1; delete 2)        |
| review_user_id | bigint(20)   | NO       |     | 0       | review user id                              |

## role
>
> `role` 表记录所有角色。

| COLUMN        | DATA TYPE      | NULLABLE   | KEY   | DEFAULT   | COMMENT     |
|---------------|----------------|------------|-------|-----------|-------------|
| id            | int(11)        | NO         | PRI   |           |             |
| created_at    | timestamp      | YES        |       |           | create time |
| updated_at    | timestamp      | YES        |       |           | update time |
| name          | varchar(50)    | NO         |       |           | name        |
| description   | varchar(200)   | NO         |       |           | description |

## role_power_rel
>
> `role_power_rel` 表记录角色和权限之间的关系。

| COLUMN       | DATA TYPE      | NULLABLE   | KEY   | DEFAULT   | COMMENT     |
|--------------|----------------|------------|-------|-----------|-------------|
| id           | int(11)        | NO         | PRI   |           |             |
| created_at   | timestamp      | YES        |       |           | create time |
| updated_at   | timestamp      | YES        |       |           | update time |
| role_id      | int(11)        | NO         |       | 0         | role id     |
| power_type   | varchar(200)   | NO         |       |           | power       |

## site_info
>
> `site_info` 表记录与界面或其他相关内容有关的站点信息。

| COLUMN     | DATA TYPE   | NULLABLE | KEY | DEFAULT | COMMENT                                    |
|------------|-------------|----------|-----|---------|--------------------------------------------|
| id         | int(11)     | NO       | PRI |         | id                                         |
| created_at | timestamp   | YES      |     |         | create time                                |
| updated_at | timestamp   | YES      |     |         | update time                                |
| type       | varchar(64) | NO       |     |         | type                                       |
| content    | mediumtext  | NO       |     |         | content                                    |
| status     | int(11)     | NO       |     | 1       | site info status(available: 1;deleted: 10) |

## tag
>
> `tag` 表记录标签信息。

| COLUMN             | DATA TYPE   | NULLABLE | KEY | DEFAULT | COMMENT                              |
|--------------------|-------------|----------|-----|---------|--------------------------------------|
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
>
> `tag_rel` 表记录对象和标签之间的关系。

| COLUMN         | DATA TYPE      | NULLABLE     | KEY     | DEFAULT     | COMMENT                                     |
|----------------|----------------|--------------|---------|-------------|---------------------------------------------|
| id             | bigint(20)     | NO           | PRI     |             | tag_list_id                                 |
| created_at     | timestamp      | YES          |         |             | create time                                 |
| updated_at     | timestamp      | YES          |         |             | update time                                 |
| object_id      | bigint(20)     | NO           | MUL     |             | object_id                                   |
| tag_id         | bigint(20)     | NO           | MUL     |             | tag_id                                      |
| status         | int(11)        | NO           |         | 1           | tag_list_status(available: 1;deleted: 10)   |

## uniqid
>
> `uniqid` 表记录可以唯一标识对象的对象ID。

|   COLUMN    | DATA TYPE  | NULLABLE | KEY | DEFAULT |   COMMENT   |
|-------------|------------|----------|-----|---------|-------------|
| id          | bigint(20) | NO       | PRI |         | uniqid_id   |
| uniqid_type | int(11)    | NO       |     |       0 | uniqid_type |

## user
>
> `user` 表记录用户的基本信息。

| COLUMN          | DATA TYPE    | NULLABLE | KEY | DEFAULT | COMMENT                                |
|-----------------|--------------|----------|-----|---------|----------------------------------------|
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
| is_admin        | int(11)      | NO       |     | 0       | admin flag(deprecated)                 |

## user_role_rel
>
> `user_role_rel` 表记录用户和角色之间的关系。

| COLUMN       | DATA TYPE    | NULLABLE   | KEY   | DEFAULT   | COMMENT     |
|--------------|--------------|------------|-------|-----------|-------------|
| id           | int(11)      | NO         | PRI   |           |             |
| created_at   | timestamp    | YES        |       |           | create time |
| updated_at   | timestamp    | YES        |       |           | update time |
| user_id      | bigint(20)   | NO         |       | 0         | user id     |
| role_id      | int(11)      | NO         |       | 0         | role id     |

## version
>
> 当前答案的版本记录在版本表中以进行升级。

|     COLUMN     | DATA TYPE | NULLABLE | KEY | DEFAULT |    COMMENT     |
|----------------|-----------|----------|-----|---------|----------------|
| id             | int(11)   | NO       | PRI |         | id             |
| version_number | int(11)   | NO       |     |       0 | version_number |
