const readlineSync = require('readline-sync');

let number = 0;

// ユーザーが5を入力するまでループする
while (number !== 5) {
    number = Number(readlineSync.question("5を入力してください: "));
}
console.log("正解です！");
