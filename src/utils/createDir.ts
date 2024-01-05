import fs from "fs";

const currentDirectory = process.cwd();

export function createDir(name: string): void | Promise<void> {
    console.log("Creating directory...");
    const dir = `${currentDirectory}/${name}`;
    if (fs.existsSync(dir)) {
        console.log(`Directory ${dir} already exists`);
        return;
    }
    fs.mkdirSync(dir);
    console.log(`Created directory ${dir}`);
}