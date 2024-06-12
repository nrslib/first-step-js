// 三角形の面積を計算する関数
function calculateTriangleArea(base, height) {
    return (base * height) / 2;
}

// 複数の三角形の面積を計算して表示する
let base = 100;
let height = 20;
let area = calculateTriangleArea(base, height);
console.log(`三角形の面積は ${area.toFixed(2)} です。`);
