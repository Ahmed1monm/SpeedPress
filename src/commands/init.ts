import chalk from "chalk";

import {createDir} from "../utils/createDir";
import {createFile} from "../utils/createFile";
import {writeIntoFile} from "../utils/writeIntoFile";
import {packageJsonContent} from "../content/packageJson.content";
import {tsconfigJsonContent} from "../content/tsconfigJson.content";
import {gitignoreContent} from "../content/gitignore.content";
import {swaggerContent} from "../content/swagger.content";
import {fileContentType} from "../types/fileContentType";
import {appContent} from "../content/app.content";
import {dockerfileContent} from "../content/Dockerfile.content";

export function initHandler(name: string): void | Promise<void> {
    const requiresParentDirs: string[] = ["src", "tests", "dist"];
    const requiresSubDirs: string[] = ["controllers", "services", "routes", "models", "middlewares", "utils"];
    const requiresFiles: fileContentType[] =
        [
            {name: "package.json", content: packageJsonContent(name)},
            {name: "tsconfig.json", content: tsconfigJsonContent()},
            // {name:"src/index.ts", content: ""},
            {name: ".gitignore", content: gitignoreContent()},
            {name: "README.md", content: ""},
            {name: "swagger.yaml", content: swaggerContent(name)},
            {name: "Dockerfile", content: dockerfileContent()},
        ];
    console.log(chalk.grey("Initializing project..."));
    createDir(name);
    requiresParentDirs.forEach(dir => {
        createDir(`${name}/${dir}`);
        if (dir === "src") {
            requiresSubDirs.forEach(subDir => {
                createDir(`${name}/${dir}/${subDir}`);
                createFile("index.ts", `${name}/${dir}/${subDir}`)
            });
            // createFile("index.ts", `${name}/${dir}`);
            writeIntoFile("index.ts", `${name}/${dir}`,appContent(name));
        }
    });
    requiresFiles.forEach(file => {
        createFile(file.name, name);
        writeIntoFile(file.name, name, file.content);
    });
    console.log(chalk.green.underline.bold("Project initialized successfully."));
}