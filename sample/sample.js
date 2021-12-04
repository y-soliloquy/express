
console.log("start");

const { read, write } = require("./helper.js");



const request = process.argv[2];

if (request === "read") {
	read()
} else if (request === "write") {
	write()
} else {
  console.error("パラメータ間違ってるやんけ！死ね！出直してこい！")
}

console.log('end');
