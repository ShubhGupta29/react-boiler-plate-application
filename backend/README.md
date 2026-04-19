# Notes on BE

### 1
-  TypeScript is currently treating your files as CommonJS modules (which use require() and module.exports), but you are writing modern ECMAScript modules (using import and export).
- "type": "module" added in package.json --> ES module resolution rules strictly require you to include the .js extension when importing your own local files

### 2 Seeder Script
- In a professional environment, you don't manually type data into a database; you automate it so that any developer on your team can run a single command to get a working environment.