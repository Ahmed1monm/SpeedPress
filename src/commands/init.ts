import { createDir } from "../utils/createDir";
import { createFile } from "../utils/createFile";

const requiresFiles = ["package.json", "tsconfig.json", "src/index.ts", ".gitignore", "README.md"];
const requiresDirs = ["src", "tests", "dist"];

export function initHandler(name: string): void | Promise<void> {
    console.log("Initializing project...");
    createDir(name);
    requiresDirs.forEach(dir => {
        createDir(`${name}/${dir}`);
    });
    requiresFiles.forEach(file => {
        createFile(file, `${process.cwd()}/${name}`);
    });
}