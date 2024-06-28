---
slug: /development/overview
---

# Overview

## Frontend

### Installation

1. Ensure you have [node](https://nodejs.org/en) and [pnpm](https://pnpm.io/installation) installed.
2. After cloning the repository, run the following command. This will install all dependencies as well as build all local packages.

    ```shell
    cd ./ui
    pnpm install
    ```

3. To start a development server, run `pnpm start`. now, your browser should already open automatically, and autoload `http://localhost:3000`. you can also manually visit it.
4. To switch API, you can modify the `ui/.env.development` file and then re-run pnpm start. If you're just using it yourself, we recommend creating a `.env.development.local` file that defines the address of the api you're going to use.

### Code conventions

- **Most important: Look around.** Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation, etc.
- We do have Prettier (a formatter) and ESLint (a syntax linter) to catch most stylistic problems. If you are working locally, you can run  `pnpm lint` and `pnpm prettier` to fix most code formatting.
- **No runtime errors** Before submitting the code, please ensure that there will be no errors when running locally. This will greatly reduce the workload of review.

<details>
  <summary>frontend package structure</summary>
  <div>
    ```
.
├── cmd
├── configs
├── ...
└── ui (front-end project starts here)
      ├── build (built results directory, usually without concern)
      ├── public (html template for public)
      ├── scripts (some scripting tools on front-end project)
      ├── src (almost all front-end resources are here)
            ├── assets (static resources)
            ├── common (project information/data defined here)
            ├── components (all components of the project)
            ├── hooks (all hooks of the project)
            ├── i18n (Initialize the front-end i18n)
            ├── pages (all pages of the project)
            ├── router (Project routing definition)
            ├── services (all data api of the project)
            ├── stores (all data stores of the project)
            ├── utils (all utils of the project)
            ├── plugins (UI Plugin Development & Debugging Directory)
```
  </div>
</details>

## Backend

### Installation

1. Ensure you have [golang](https://go.dev/doc/install) installed.
2. After cloning the repository, run the following command for build.

    ```shell
    go mod download
    go run cmd/answer/main.go init -C ./answer-data
    ```

3. Visit `http://localhost` to see the installation page and complete the installation.

4. Run the following command to start the server.

    ```shell
    go run cmd/answer/main.go run -C ./answer-data
    ```

### Code conventions

We recommend that you follow [uber's Golang Guidelines](https://github.com/uber-go/guide) code style.

<details>
  <summary>backend package structure</summary>
  <div>
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
  </div>
</details>
