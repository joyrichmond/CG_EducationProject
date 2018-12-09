let teacherName = "Thomas Talks-a-lot";
let teacherDepartment = "Communication";


let teacherRatings = [2.1, 3.7, 4.3];

let totalRating = teacherRatings.reduce((carryOver, indexValue) => {
    return carryOver + indexValue;
});

let teacherAvgRating = (totalRating / teacherRatings.length).toFixed(5);

let teacherRatingOutput = teacherRatings.join(", ");
console.log(`Teacher: ${teacherName}\nDepartment: ${teacherDepartment}\nRating: ${teacherRatingOutput}\nAverage Rating: ${teacherAvgRating}`);


let studentName = "Ida Dream";
let studentMajor = "Communication";
let studentEmail = "talkinfunny@gmail.com";
let studentGPA = 3.4;

console.log(`Student Name: ${studentName}\nMajor: ${studentMajor}\nEmail: ${studentEmail}\nGPA: ${studentGPA}`);


let courseName = "Interpersonal Communication";
let courseDepartment = "Communication";
let courseTeacher = "Thomas Talks-a-lot";
let courseSemester = "Fall 2019";

console.log(`Course: ${courseName}\nDepartment: ${courseDepartment}\nInstructor: ${courseTeacher}\nSemester: ${courseSemester}`);