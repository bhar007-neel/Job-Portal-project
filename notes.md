CommonJS
This is the older module system primarily used in Node.js.

It uses require() to load modules and module.exports to export them.

Example:

javascript
// Exporting
module.exports = {
  sayHello: function () {
    console.log("Hello, CommonJS!");
  },
};

// Importing
const myModule = require("./myModule");
myModule.sayHello();




ES Modules (ESM)
This is the modern, standardized module system introduced in ECMAScript 2015 (ES6+).

It uses import to bring in modules and export (named or default) to share them.

Example:

javascript
// Exporting
export const sayHello = () => {
  console.log("Hello, ES Modules!");
};

// Importing
import { sayHello } from "./myModule.js";
sayHello();
Key Differences
Syntax:

CommonJS: require and module.exports.

ES Modules: import and export.

Execution:

CommonJS modules are loaded synchronously, which works well in server-side environments (like Node.js).

ES Modules support asynchronous loading, making them more suitable for browser-based environments.

Compatibility:

ES Modules are natively supported in modern browsers and Node.js(as of version 12+ with the .mjs extension or "type": "module" in package.json).

CommonJS was the default for Node.jsbefore ES Modules were introduced.

If you're writing modern JavaScript, ES Modules are typically preferred, but CommonJS is still widely used, especially in older Node.jsprojects. They're like two different dialects—use the one best suited for your situation.