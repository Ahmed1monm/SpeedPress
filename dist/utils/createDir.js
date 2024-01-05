"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDir = void 0;
const fs_1 = __importDefault(require("fs"));
const currentDirectory = process.cwd();
function createDir(name) {
    console.log("Creating directory...");
    const dir = `${currentDirectory}/${name}`;
    if (fs_1.default.existsSync(dir)) {
        console.log(`Directory ${dir} already exists`);
        return;
    }
    fs_1.default.mkdirSync(dir);
    console.log(`Created directory ${dir}`);
}
exports.createDir = createDir;
