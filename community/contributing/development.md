## Development

### Backend

#### Installation

#### Code Conventions

### Frontend

#### Installation

1. Ensure you have [node](https://nodejs.org/en) and [pnpm](https://pnpm.io/installation) installed.
2. After cloning the repository, run the following command. This will install all dependencies as well as build all local packages.
```
cd ./ui
pnpm install
```
3. To start a development server, run `pnpm start`. now, your browser should already open automatically, and autoload `http://localhost:3000`. you can also manually visit it.
4. To switch API, you can modify the `ui/.env.development` file and then re-run pnpm start. If you're just using it yourself, we recommend creating a `.env.development.local` file that defines the address of the api you're going to use.

#### Code Conventions

- **Most important: Look around.** Match the style you see used in the rest of the project. This includes formatting, naming files, naming things in code, naming things in documentation, etc.
- We do have Prettier (a formatter) and ESLint (a syntax linter) to catch most stylistic problems. If you are working locally, you can run  `pnpm lint` and `pnpm prettier` to fix most code formatting.
- **No runtime errors** Before submitting the code, please ensure that there will be no errors when running locally. This will greatly reduce the workload of review.
