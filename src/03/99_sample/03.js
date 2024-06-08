const readlineSync = require('readline-sync');

// 項数を入力する
let terms = Number(readlineSync.question("フィボナッチ数列の項数を入力してください: "));

// フィボナッチ数列を計算して表示する
let fib = [0, 1];

for (let i = 2; i < terms; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log("フィボナッチ数列:");
for (let i = 0; i < terms; i++) {
    console.log(fib[i]);
}
