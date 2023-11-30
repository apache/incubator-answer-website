---
slug: /development
---

# Development

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
