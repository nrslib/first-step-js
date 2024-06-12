// 範囲の上限を入力する（１以上の整数）
let N = 10

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
