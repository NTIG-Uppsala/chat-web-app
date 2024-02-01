# Chat Web App

## Languages and frameworks

This project uses the React framework Next.js with TypeScript.

This project also uses Tailwind for styling.

JavaScript is used for the chat server and some config files.

## Coding standard

ESLint is used for linting and follows the rules set in [.eslintrc.json](.eslintrc.json)

### Naming conventions

* File names (excluding README.md and .gitignore): kebab-case

* React component names: PascalCase

* Variable and function names: camelCase

## Development

Make sure Node.js is installed by running the following command in the cmd

```cmd
node --version
```

[Install Node.js here](https://nodejs.org/en/download)

Install the node modules by running:
```cmd
npm install
```
Run the development server:

```cmd
npm run dev
```

Then, start the chat server in another terminal:

```cmd
npm run server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit the source code. The chat server will however need to be restarted after editing its source code.