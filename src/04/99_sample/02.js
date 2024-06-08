const readlineSync = require('readline-sync');

// 円の面積を計算する関数
function calculateCircleArea(radius) {
    return Math.PI * radius * radius;
}

// 複数の円の面積を計算して表示する
let numberOfCircles = Number(readlineSync.question("円の数を入力してください: "));
for (let i = 0; i < numberOfCircles; i++) {
    let radius = Number(readlineSync.question(`円${i + 1}の半径を入力してください: `));
    let area = calculateCircleArea(radius);
    console.log(`円${i + 1}の面積は ${area.toFixed(2)} です。`);
}
