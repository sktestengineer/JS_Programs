//Using Prompt
const num1 = 12;
const num2 = 23;
const num3 = 45;

let greatest;

switch (true) {
    case (num1 > num2 && num1 > num3):
        greatest = num1;
        break;
    case (num2 > num1 && num2 > num3):
        greatest = num2;
        break;
    default:
        greatest = num3;
}

console.log(`The greatest number is: ${greatest}`);



const students = {
    Santosh: [56, 67, 78, 87, 69],
    Ram: [89, 87, 79, 97, 78]
};

function calculateGrade(marks) {
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const percentage = (totalMarks / (marks.length * 100)) * 100;

    if (percentage >= 90) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 45) return 'C';
    return 'D';
}

for (const [student, marks] of Object.entries(students)) {
    const grade = calculateGrade(marks);
    console.log(`${student} has achieved grade: ${grade}`);
}

//Using Writing the code  

function fibbonacci(n) {
    const fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries;
}
console.log(fibbonacci(10));
