# EzPress

A CLI tool to initialize a new express project with in TypeScript with a clean architecture and a set of files that are commonly used in every project.

All files have the necessary, commonly used code to get started with a new project.

## Project Structure

```Bash
.
├── dist
├── Dockerfile
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── config
│   │   └── index.ts
│   ├── controllers
│   │   └── index.ts
│   ├── index.ts
│   ├── middlewares
│   │   └── index.ts
│   ├── models
│   │   └── index.ts
│   ├── routes
│   │   └── index.ts
│   ├── services
│   │   └── index.ts
│   └── utils
│       └── index.ts
├── swagger.yaml
├── tests
└── tsconfig.json
```

## Installation

```bash
  npm install -g ez-press
```

### Usage

```bash
  ez-press init <project-name>
```
