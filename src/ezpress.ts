import {Command} from "commander";
import packageJson from "../package.json";
import fs from "fs";

import {initHandler} from "./commands/init";

export const ezpress = new Command();
const currentDirectory = process.cwd();

ezpress.version(packageJson.version);

ezpress.command("init")
    .description("Initialize a new express project")
    .argument("<projectName>", "Name of the project")
    .action((projectName: string) => initHandler(projectName));

// ezpress.command("createFile")
//     .description("Create a new file in the current directory")
//     .argument("<fileName>", "Name of the file")
//     .action((fileName: string) => {
//         fs.writeFile(`${currentDirectory}/${fileName}`, '', (err) => {
//             if (err) throw err;
//             console.log(`File ${fileName} created successfully.`);
//         });
//     });
//
// ezpress.command("createService")
//     .argument("<serviceName>", "Name of the service")
//     .action((serviceName: string) => {
//         fs.mkdir(`${currentDirectory}/${serviceName}`, (err) => {
//             if (err) throw err;
//
//             const fileNames = [
//                 `${serviceName}.service.ts`,
//                 `${serviceName}.service.spec.ts`,
//                 `${serviceName}.controller.ts`,
//                 `${serviceName}.controller.spec.ts`
//             ];
//
//             fileNames.forEach(fileName => {
//                 fs.writeFile(`${currentDirectory}/${serviceName}/${fileName}`, '', (err) => {
//                     if (err) throw err;
//                 });
//             });
//
//             console.log(`Service ${serviceName} created successfully with its files.`);
//         });
//     });

ezpress.parse();