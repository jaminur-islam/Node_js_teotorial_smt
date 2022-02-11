/* const num = [10, 20, 30];
const a = 10;
const handleText = () => {
  console.log("hi text");
};
 module.exports = { num, a, handleText };
 */

const { relative } = require("path");
const path = require("path");
const myPathName = "C:/node_sumit_vai/people.js";
console.log(path.basename(myPathName));
console.log(path.dirname(myPathName));
console.log(path.extname(myPathName));
console.log(path.parse(myPathName));

const pathObject = path.parse(myPathName);
console.log(path.join([...myPathName]));
const result = path.format(pathObject);
console.log(myPathName);
console.log(result);

console.log(path.isAbsolute(myPathName));
console.log(path.normalize(myPathName));
console.log(path.dirname(myPathName));
console.log(path.posix);
