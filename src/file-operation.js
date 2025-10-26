import fs from "node:fs/promises"
import dotenv from "dotenv"
import path from "node:path";

dotenv.config({ path: path.resolve("./.env"), quiet: true });



const fileName = process.env.FILENAME;
    if(!fileName) {
    console.log("Error: variable FILENAME not found");
    process.exit(1)
}

const text = "Hello from node.js"
try {
fs.writeFile(fileName, text, "utf-8")
console.log("Created file")

const info = await fs.readFile(fileName, "utf-8")
console.log("Files info:")
console.log(info) 
} catch (error) {
    console.log("Error can not fing a file", error)
}