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

// サンプルの配列
let numbers = [5, 12, 8, 3, 25, 7];

// 配列の最大値を表示する
let max = findMax(numbers);
console.log(`配列内の最大値は ${max} です。`);
