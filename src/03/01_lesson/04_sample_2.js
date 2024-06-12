let count =10;
let numbers = [];

// 数値を配列に一時的に格納する
for (let i = 0; i < count; i++) {
    numbers.push(i);
}

// 配列内の数値を合計する
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// 合計を表示する
console.log(`入力された数値の合計は ${sum} です。`);
