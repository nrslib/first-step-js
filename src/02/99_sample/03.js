const readlineSync = require('readline-sync');

// ユーザーに年齢を入力させる
let age = readlineSync.question("年齢を入力してください: ");
age = Number(age, 10);  // 入力された年齢を整数に変換

// ユーザーに身長を入力させる
let height = readlineSync.question("身長(cm)を入力してください: ");1
height = Number(height, 10);  // 入力された身長を整数に変換

// 条件をチェックして結果を表示
if (age >= 12 && height >= 140) {
    console.log("ジェットコースターに乗れます");
} else {
    console.log("ジェットコースターに乗れません");
}
