export function packageJsonContent(projectName: string): string {
    // TODO: Add the required scripts [test, dev, start] and dependencies
    return `
  {
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon --exec ts-node src/index.ts",
    "dev": "nodemon --exec ts-node src/index.ts",
    "test": "echo \\"Error: no test specified\\" && exit 1",
    "build": "tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "express-validator": "^7.0.1",
    "helmet": "^7.0.0",
    "morgan": "^1.10.0",
    "multer": "^1.4.5-lts.1"
  },
  "devDependencies": {
    "@types/bcrypt": "^5.0.0",
    "@types/cors": "^2.8.14",
    "@types/express": "^4.17.19",
    "@types/jsonwebtoken": "^9.0.3",
    "@types/morgan": "^1.9.6",
    "@types/multer": "^1.4.8",
    "@types/uuid": "^9.0.5",
    "nodemon": "^3.0.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.2"
  }
}
`;
}
