---
---

# 服务端
>
> Below is the guideline for Backend Development

## How to set up a development environment

### Prerequisites

- [Golang](https://go.dev/) `>=1.18`
- Database Dependencies
  - MySQL `(>=5.7)`
  - PostgreSQL `(>=10)`
  - SQLite3
- [wire](https://github.com/google/wire)

### Tools

#### wire

We use `wire` to generate dependencies.

```shell
go get github.com/google/wire/cmd/wire@latest
go generate ./...
go mod tidy
```

Or you can use `make generate`.

#### swag

We use `swag` to generate swagger doc.

```shell
swag init --generalInfo ./cmd/answer/main.go
```

Or you can use enter the script directory and use `./gen-api.sh`

### Build

:::note
If this is your first time starting the Answer, it is best to compile the frontend project once to ensure that you can test it more easily.
Once you get comfortable with the answer, you can copy the configuration file directly to the corresponding directory without compiling the front-end and test it with swagger.
:::

```shell
# Frontend compilation(Recommend). If you encounter problems, please refer to the frontend related documentation
$ make ui
# enter into dir
$ cd cmd/answer/
# compile
$ go build .
```

### Run

#### Install
>
> If this is your first time starting the Answer, you need to follow the steps to install. If not, you can skip this step.

```shell
# init environment
$ ./answer init -C ./answer-data/
```

Heading to [http://localhost:80/install](http://localhost:80/install) to access installation page.

Please refer to the [installation documentation](../../installation) for installation steps.

#### Launch

```shell
./answer run -C ./answer-data/
```

Heading to [http://localhost:80/](http://localhost:80/) to use answer.

### Debug

We use swagger to test api interface. Swagger documentation default is available.
Heading to [http://localhost:80/swagger/index.html](http://127.0.0.1:8080/swagger/index.html) to access swagger page.

You can use swagger for more convenient debugging.

## Project instructions

### Package

```
.
├── cmd (main binary)
├── configs (default configuration)
├── docs (swagger documentation)
├── i18n (International translation)
├── internal
      ├── base (Basic component without service attributes)
            ├── conf (Configuration)
            ├── constant (constant)
            ├── data (database/cache)
            ├── handler (request/response handler)
            ├── middleware (http middleware)
            ├── pager (Pagination)
            ├── reason (error reason key use to translator)
            ├── server (http server)
            ├── translator (translator for translate international)
            └── validator (validator for validate request)
      ├── cli (binary commands)
      ├── controller (request handler controller for user)
      ├── controller_backyard (request handler controller for admin)
      ├── entity (all entity about database table)
      ├── install (installation related)
      ├── migrations (upgrade related)
      ├── repo (database/cache operations)
      ├── router (http router)
      ├── schema (request/response schema)
      └── service (business logic)
├── pkg (tools or third party)
└── ui (frontend)
```

### Dependencies between packages

For most api, the flow chart is very simple as follows.

```
router -> middleware -> controller(use schema) -> service -> repo(use entity)
```

If you want to develop a new API, you can follow the steps below.

1. Adding a routing rule (GET/POST/PUT...) in router.
2. Adding a controller for handler requests. the request should be validated in the controller.
3. Adding a service to process business.
4. Adding a repo for saving or querying data from the database or cache.
5. Regenerate swagger documentation and test API.

## Code specification

### Basic

We recommend that you follow [uber's Golang Guidelines](https://github.com/uber-go/guide) code style.

### Lint

`golangci-lint` is a fast Go linters runner. We use [golangci-lint](https://github.com/golangci/golangci-lint) to lint our code.

You can use the following command to check your code format.

```bash
go install github.com/golangci/golangci-lint/cmd/golangci-lint@v1.50.0
golangci-lint run
```

## What do we need you to contribute

### Fix Bug

If you find a bug, please don't hesitate to [submit an issue](https://github.com/answerdev/answer/issues) to us.
If you can fix it, please include a note with your issue submission.
If it is a bug definitely, you can submit your PR after we confirm it, which will ensure you don't do anything useless.

### Code Review & Comment

In our development, some codes are not logical we know. If you find it, please don't hesitate to submit PR to us.
In the same way, some function has no comment. We would appreciate it if you could help us supplement it.

### Unit Tests(Much-needed)

Our current unit test coverage is as follows. As you can see we have many more unit tests to add, so we would be happy for you to add them.

<img
src={require('/img/repo-unit-test-coverage-rate.png').default}
alt="repo-unit-test-coverage-rate"
width="300"
/>

### Translation

All our translations are placed in the i18n directory.

1. If you find that the corresponding key in the language you are using does not have a translation, you can submit your translation.
2. If you want to submit a new language translation, please add your language to the `i18n.yaml` file.

### Features or Plugin

1. We developed the features for the plan based on the [roadmap](https://github.com/orgs/answerdev/projects/1). If you are suggestions for new functions, please confirm whether they have been planned.
2. Plugins will be available in the future, so stay tuned.

## Notice

### Modify the database table structure is very hard

Usually, we don't want to modify the field that already exists in the database table.
If you need to change it, follow these rules.

1. Adding fields is better than modifying them.
2. Modifying any field needs to take into account the impact on the existing data.
3. Changes to database tables need to be tested for impact on different types of databases, and different SQL statements need to be given for different types of databases. For MySQL/PostgreSQL/sqlite3.

## Built with

The Answer application's backend is built with the following components/libraries:

- [pacman](https://github.com/segmentfault/pacman) - Yet Another Toolkit to Build Golang Application Quickly.
- [gin](https://github.com/gin-gonic/gin/) - Router.
- [validator](https://github.com/go-playground/validator/) - Validator.
- [xorm](https://xorm.io/) - ORM.
- [cobra](https://github.com/spf13/cobra) - CLI applications.
- [swag](https://github.com/swaggo/swag) -  Swagger Documentation generate.
