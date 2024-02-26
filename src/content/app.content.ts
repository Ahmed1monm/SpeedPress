export function appContent(name = ""): string {
    if (name === "") name = "ezpress";
    return `
import express from 'express';
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";
import helmet from "helmet";

const ${name} = express();
dotenv.config();

// middlewares
${name}.use(express.json());
${name}.use(helmet());
${name}.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
${name}.use(morgan("common"));
${name}.use(bodyParser.json({limit: "30mb"}));
${name}.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
${name}.use("/assets", express.static(path.join(__dirname, "/assets")));

const PORT = process.env.PORT || 3000;

${name}.listen(PORT, () => {
    console.log(\`Server running ....\`);
  });
    `;
}