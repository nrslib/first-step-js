const readlineSync = require('readline-sync');

// 身長を入力する
let heightInput = readlineSync.question("身長をメートルで入力してください（例: 1.75）: ");
let height = Number(heightInput);

// 体重を入力する
let weightInput = readlineSync.question("体重をキログラムで入力してください（例: 68）: ");
let weight = Number(weightInput);

// BMIを計算する
let bmi = weight / (height * height);

// 結果を表示する
console.log(`あなたのBMIは ${bmi.toFixed(2)} です。`);
