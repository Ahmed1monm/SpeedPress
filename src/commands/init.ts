import { createDir } from "../utils/createDir";
import { createFile } from "../utils/createFile";
import {writeIntoFile} from "../utils/writeIntoFile";
import {packageJsonContent} from "../content/packageJson.content";
import {tsconfigJsonContent} from "../content/tsconfigJson.content";
import {gitignoreContent} from "../content/gitignore.content";
import {swaggerContent} from "../content/swagger.content";
import {fileContentType} from "../types/fileContentType";

export function initHandler(name: string): void | Promise<void> {
    const requiresDirs: string[] = ["src", "tests", "dist"];
    const requiresFiles: fileContentType[] =
        [
            {name:"package.json", content: packageJsonContent(name)},
            {name:"tsconfig.json", content: tsconfigJsonContent()},
            // {name:"src/index.ts", content: ""},
            {name:".gitignore", content: gitignoreContent()},
            {name:"README.md", content: ""},
            {name:"swagger.yaml", content: swaggerContent(name)}
        ];
    console.log("Initializing project...");
    createDir(name);
    requiresDirs.forEach(dir => {
        createDir(`${name}/${dir}`);
    });
    requiresFiles.forEach(file => {
        createFile(file.name, name);
        writeIntoFile(file.name, name, file.content);
    });
}