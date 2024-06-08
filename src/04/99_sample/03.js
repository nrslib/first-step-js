const readlineSync = require('readline-sync');

// 配列の最大値を返す関数
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// ユーザーから配列の要素を入力してもらう
let size = Number(readlineSync.question("配列のサイズを入力してください: "));
let numbers = [];
for (let i = 0; i < size; i++) {
    let number = Number(readlineSync.question(`配列の要素を入力してください (${i + 1}/${size}): `));
    numbers.push(number);
}

// 配列の最大値を表示する
let max = findMax(numbers);
console.log(`配列内の最大値は ${max} です。`);
