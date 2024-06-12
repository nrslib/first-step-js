// 入力する数値の個数を入力する
let count = 5;
let numbers = [];

for (let i = 0; i < count; i++) {
    numbers.push(i);
}

// 数値を逆順に表示する
console.log("数値を逆順に表示します:");
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
