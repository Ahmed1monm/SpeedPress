import fs from "fs";
import chalk from "chalk";

const currentDirectory = process.cwd();

export function createDir(name: string): void | Promise<void> {
    console.log(chalk.grey("Creating directory..."));
    const dir = `${currentDirectory}/${name}`;
    if (fs.existsSync(dir)) {
        console.log(`Directory ${dir} already exists`);
        return;
    }
    fs.mkdirSync(dir);
    console.log(chalk.blue(`Created directory ${dir}`));
}