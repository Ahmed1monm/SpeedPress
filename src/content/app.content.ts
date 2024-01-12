export function appContent (name=""): string {
    if (name === "") name = "${name}";
    return`
import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import path from "path";

const ${name} = express();
dotenv.config();

// middlewares
${name}.use(express.json());
${name}.use(helmet());
${name}.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
${name}.use(morgan("common"));
${name}.use(bodyParser.json({limit: "30mb"}));
${name}.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
${name}.use(cors());
${name}.use("/assets", express.static(path.join(__dirname, "/assets")));

const port = process.env.PORT || 3000;

${name}.listen(process.env.PORT, () => {
    console.log(\`Server running ....\`);
  });
    `;
}