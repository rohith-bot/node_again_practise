#!/usr/bin/env node
const fs = require("node:fs");
const { version } = require("node:os");

let ver = ()=>{
    return process.version
}


fs.writeFileSync('.nvmrc',ver())

fs.writeFileSync('.gitignore','node_modules')

