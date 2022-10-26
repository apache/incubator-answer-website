---
---

# Backend
## 📦 Prerequisites

- [Golang](https://go.dev/) `>=1.18`

## 🔨 Development
### wire

we use `wire` to generate dependencies.

```shell
$ go get github.com/google/wire/cmd/wire@latest
$ go generate ./...
$ go mod tidy
```

or you can use `make generate`.

### swag

We use `swag` to generate swagger doc.

```shell
$ swag init --generalInfo ./cmd/answer/main.go
```

or you can use enter script directory and use `./gen-api.sh`

## 🏃🏻‍♀️ Run
```shell
# enter into dir
$ cd cmd/answer/
# compile
$ go build .
# init environment
$ ./answer init -C ./answer-data/
# modify config file 
$ vim ./answer-data/conf/config.yaml
# run 
$ ./answer run -c ./answer-data/conf/config.yaml
```

## Build with

- [pacman](https://github.com/segmentfault/pacman) - Yet Another Toolkit to Build Golang Application Quickly.
- [gin](https://github.com/gin-gonic/gin/) - Router.
- [validator](https://github.com/go-playground/validator/) - Validator.
- [xorm](https://xorm.io/) - ORM.
- [cobra](https://github.com/spf13/cobra) - CLI applications.
- [swag](https://github.com/swaggo/swag) -  Swagger Documentation generate.