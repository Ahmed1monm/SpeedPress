import fs from "fs";
import chalk from "chalk";

export function writeIntoFile(name: string, dir: string, content: string): void | Promise<void> {
    console.log(chalk.grey("Writing into file..."));
    fs.writeFile(`${dir}/${name}`, content, (err) => {
        if (err) throw err;
        console.log(chalk.blue.underline.bold(`File ${name} is ready......!!!`));
    });
}