# Basic Next.js Template

## Scripts

The project includes the following scripts that can be executed:

- `dev`: Launches the development mode using Vite.
- `build`: Compiles TypeScript, builds project, optimazes images, creates nginx-routes and deploys on testing [FTP server](https://mari.appotrack.space/).
- `deploy-ftp`: Deploys on testing [FTP server](https://mari.appotrack.space/).
- `lint`: Runs ESLint to check the code style.
- `preview`: Launches a preview using Vite.
- `prettier-format`: Applies formatting using Prettier.

## Getting Started

1. Clone the repo to your local computer.
2. Run `npm install --package-lock-only` updates the Node.js package and its dependencies according to the package-lock.json file.
3. Run `npm install` to install the required dependencies.
4. Add '.env.local' file to the root of the project.
5. To start the development mode, use the command `npm run dev`.
6. To build the project, use the command `npm run build`.
7. To launch the server for the built project, use the command `npm run deploy-ftp`.
