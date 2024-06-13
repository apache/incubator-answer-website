---
slug: /contributing/backend
---

# 后端开发指南
>
> 下面将说明如何配置环境来进行项目的后端开发工作

## 如何设置开发环境

### 先决条件

- [Golang](https://go.dev/) `>=1.18`
- 数据库依赖
  - MySQL `(>=5.7)`
  - PostgreSQL `(>=10)`
  - SQLite3
- [wire](https://github.com/google/wire)

### 工具

#### wire

我们使用 `wire` 来生成依赖关系。

```shell
go get github.com/google/wire/cmd/wire@latest
go generate ./...
go mod tidy
```

或者你可以使用 `make generate`。

#### swag

我们使用 `swag` 来生成 Swagger 文档。

```shell
swag init --generalInfo ./cmd/answer/main.go
```

或者你可以进入 `script` 目录并使用 `./gen-api.sh`。

### 构建

:::note
如果这是你第一次启动 Apache Answer，请先编译前端项目，以确保你可以更轻松地测试它。
一旦你熟悉了 Apache Answer，也可以使用 Swagger 进行测试。
:::

```shell
# 前端编译（推荐）。如果遇到问题，请参考与前端相关的文档
$ make ui
# 进入目录
$ cd cmd/answer/
# 编译
$ go build .
```

### 运行

#### 安装
>
> 如果这是你第一次启动 Apache Answer，请按照以下步骤进行安装。如果不是，则可以跳过此步骤。

```shell
# 初始化环境
$ ./answer init -C ./answer-data/
```

前往 <http://localhost:80/install> 访问安装页面。

请参考 [安装文档](/docs/installation) 进行安装步骤。

#### 启动

```shell
./answer run -C ./answer-data/
```

前往 <http://localhost:80/> 使用 Apache Answer。

### Debug

我们使用 Swagger 测试 API 接口。Swagger 文档默认可用。前往 [http://localhost:80/swagger/index.html](http://127.0.0.1:8080/swagger/index.html) 访问 Swagger 页面。

你可以使用 Swagger 进行更方便的调试。

## 项目说明

### 包结构

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

### 包之间的依赖关系

对于大多数 API，流程图非常简单，如下所示。

```
router -> middleware -> controller(use schema) -> service -> repo(use entity)
```

如果你想开发新的 API，可以按照以下步骤进行操作。

1. 在 router 中添加路由规则 (GET/POST/PUT...)。
2. 添加用于处理程序请求的 controller。该请求应在 controller 中进行验证。
3. 添加一个 service 来处理业务。
4. 添加用于保存或查询数据库或缓存中的数据的 repo 操作。
5. 重新生成 swagger 文档并测试 API。

## 代码规范

### 基本的

我们使用 [uber 的 Golang](https://github.com/uber-go/guide) 来检查代码规范。

### 代码规范检查

`golangci-lint` 是一个快速的 Go 代码规范检查工具。我们使用 [golangci-lint](https://github.com/golangci/golangci-lint) 来检查代码规范。

你可以使用以下命令检查你的代码格式。

```bash
go install github.com/golangci/golangci-lint/cmd/golangci-lint@v1.50.0
golangci-lint run
```

## 我们需要你的贡献

### 修复 Bug

如果你发现了 Bug，请不要犹豫 [提交 issue](https://github.com/apache/incubator-answer/issues)  给我们。如果你可以修复它，请在提交 issue 时附上说明。如果问题已被确认是 Bug，你可以提交 PR，这将确保你不会做无用的工作。

### 代码审查和注释

在我们的开发过程中，有些代码可能不是很合乎逻辑。如果你发现了这些问题，请不要犹豫，向我们提交 PR。同样，有些函数可能没有注释。如果你可以帮助我们补充注释，我们将不胜感激。

### 单元测试（非常需要）

我们当前的单元测试覆盖率如下所示。显然，我们还需要添加更多的单元测试，因此我们非常欢迎你的贡献。

<img
src={require('/img/repo-unit-test-coverage-rate.png').default}
alt="repo-unit-test-coverage-rate"
width="300"
/>

### 翻译

我们所有的翻译都放在 `i18n`目录中。

1. 如果你发现你正在使用的语言中对应的键没有翻译，请提交你的翻译。
2. 如果你想提交新的语言翻译，请将你的语言添加到 `i18n.yaml` 文件中。

### 新功能或插件

1. 我们根据 [路线图](https://github.com/apache/incubator-answer/projects) 开发计划开发功能。如果你有新功能的建议，请确认它们是否已经计划中。
2. 插件将在未来发布，敬请期待。

## 注意事项

### 修改数据库表结构非常困难

通常，我们不希望修改数据库表中已经存在的字段。如果需要更改，请遵循以下规则：

1. 添加字段比修改字段更好。
2. 修改任何字段都需要考虑对现有数据的影响。
3. 修改数据库表结构需要测试对不同类型的数据库的影响，并为不同类型的数据库提供不同的 `SQL` 语句。对于 `MySQL/PostgreSQL/sqlite3`。

## 构建工具

Apache Answer 应用的后端使用以下组件/库构建：

- [pacman](https://github.com/segmentfault/pacman) - 快速构建 Go 应用程序的工具包。
- [gin](https://github.com/gin-gonic/gin/) - 路由器。
- [validator](https://github.com/go-playground/validator/) - 验证。
- [xorm](https://xorm.io/) - ORM.
- [cobra](https://github.com/spf13/cobra) - CLI 应用程序。
- [swag](https://github.com/swaggo/swag) -  生成 Swagger 文档。
