# Notes on BE

### 1
-  TypeScript is currently treating your files as CommonJS modules (which use require() and module.exports), but you are writing modern ECMAScript modules (using import and export).
- "type": "module" added in package.json --> ES module resolution rules strictly require you to include the .js extension when importing your own local files