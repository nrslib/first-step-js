// キーボード入力を受け付けて表示するプログラムを作りましょう

const readlineSync = require('readline-sync');
// ユーザーの名前を入力する
let userName = readlineSync.question("あなたの名前を入力してください: ");
// 挨拶を表示する
console.log(`こんにちは、${userName}さん！`);
