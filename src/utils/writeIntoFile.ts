import fs from "fs";

export function writeIntoFile(name: string, dir: string, content: string): void | Promise<void> {
    console.log("Writing into file...");
    fs.writeFile(`${dir}/${name}`, content, (err) => {
        if (err) throw err;
        console.log(`File ${name} created successfully.`);
    });
}