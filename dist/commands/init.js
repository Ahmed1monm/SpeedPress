"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initHandler = void 0;
const createDir_1 = require("../utils/createDir");
function initHandler(name) {
    console.log("Initializing new express project...");
    (0, createDir_1.createDir)(name);
    console.log("Done!");
}
exports.initHandler = initHandler;
