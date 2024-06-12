// Studentオブジェクトを作成する
const students = [
    { name: "太郎", grade: 80 },
    { name: "花子", grade: 90 },
    { name: "次郎", grade: 85 }
];

// 平均成績を計算する関数
function calculateAverage(students) {
    let totalGrades = 0;
    for (let student of students) {
        totalGrades += student.grade;
    }
    return totalGrades / students.length;
}

// 平均成績を表示する
let averageGrade = calculateAverage(students);
console.log(`平均成績は: ${averageGrade}`);
