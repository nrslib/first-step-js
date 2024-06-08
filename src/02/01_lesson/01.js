const readlineSync = require('readline-sync');

// ユーザーの年齢を入力する
let ageInput = readlineSync.question("あなたの年齢を入力してください: ");
let age = Number(ageInput);

// 未成年かどうかを判定する
if (age < 18) {
    console.log("あなたは未成年です。");
} else {
    console.log("あなたは成人です。");
}
