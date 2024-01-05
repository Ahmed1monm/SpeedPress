import { createDir } from "../utils/createDir";

export function initHandler(name: string): void | Promise<void> {
    console.log("Initializing new express project...");
    createDir(name);
    console.log("Done!");
}