// 3つの数値を入力する
let num1 = 10;
let num2 = 20;
let num3 = 50;

// 最大値を判定する
let max = num1;

if (num2 > max) {
    max = num2;
}

if (num3 > max) {
    max = num3;
}

console.log(`入力された数値の中で最大のものは ${max} です。`);
