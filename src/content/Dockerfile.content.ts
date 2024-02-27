export function dockerfileContent(): string {
	return `
FROM node:12.16.1-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
`;
}