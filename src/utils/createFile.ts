import fs from "fs";

export function createFile(name: string, dir: string): void | Promise<void> {
    console.log("Creating file...");
    fs.writeFile(`${dir}/${name}`, '', (err) => {
        if (err) throw err;
        console.log(`File ${name} created successfully.`);
    });
}