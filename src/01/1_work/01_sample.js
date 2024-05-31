// キーボード入力を受け付けて表示するプログラムを作りましょう

const readline = require('readline-sync');
let input = readline.question('名前を入力してください >');
console.log('こんにちは、' + input + 'さん');