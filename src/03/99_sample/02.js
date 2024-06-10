const readlineSync = require('readline-sync');

// 範囲の上限を入力する
let N = Number(readlineSync.question("範囲の上限を入力してください (1以上の整数): "));

console.log(`1から${N}までの素数:`);

for (let i = 2; i <= N; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}
