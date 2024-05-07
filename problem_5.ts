// You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

// Hints: Use a reduce() method to sum the grades. average = total grades/ total length

interface Student {
    name: string;
    age: number;
    grades: number[];
}

// option 1
const calculateAverageGrade = (student: Student): number => {
    const grades = student?.grades
    const averageGrade = grades.reduce((x, y) => x + y, 0) / grades.length;

    return averageGrade;
};

// option 2 
const calculateAverageGrade2 = ({ grades }: Student): number => {
    return grades.reduce((x, y) => x + y, 0) / grades.length;
}


const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90]
};

// console.log(calculateAverageGrade(student1));  // 83
// console.log(calculateAverageGrade(student1));  // 83