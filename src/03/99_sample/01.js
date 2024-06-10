// 固定の配列を使用
let numbers = [12, 45, 22, 36, 10, 8];

// 配列内の数値の平均を計算する
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
let average = sum / numbers.length;

// 平均を表示する
console.log(`配列内の数値の平均は ${average} です。`);
