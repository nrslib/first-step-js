const readlineSync = require('readline-sync');

// 円の面積を計算する関数
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// 複数の円の面積を計算して表示する
let radius = Number(readlineSync.question(`円の半径を入力してください: `));
let area = calculateCircleArea(radius);
console.log(`円の面積は ${area.toFixed(2)} です。`);
