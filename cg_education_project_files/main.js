//teacher info variables
let teacherName = "Thomas Talks-a-lot";
let teacherDepartment = "Communication";
let teacherRatings = [2.1, 3.7, 4.3];

//function to add value to an array
let addTeacherRating = (array, value) => {
    array.push(value);
    return array;
}

let newRating;
let newTeacherRatings;

//prompts student to rate teacher, checks whether student entered a valid rating, and adds student's input rating to existing array
while (true) {
    newRating = parseFloat(window.prompt("Please rate your teacher with a value between 0.0 and 5.0."));
    if ((newRating >= 0) && (newRating <= 5)) {        
        newTeacherRatings = addTeacherRating(teacherRatings, newRating);
        break;
    } else {
        alert("You didn't follow directions. Shame on you. Please rate your teacher with a value between 0.0 and 5.0.");
    }
}

//totals ratings in array
let totalRating = newTeacherRatings.reduce((carryOver, indexValue) => {
    return carryOver + indexValue;
});

//averages teacher's ratings
let teacherAvgRating = (totalRating / newTeacherRatings.length).toFixed(5);

//gives array with spaces between ratings
let teacherRatingOutput = newTeacherRatings.join(", ");

//alerts student to new rating average
alert(`Thanks for your review! ${teacherName}'s average rating is now ${teacherAvgRating}.`)

//logs teacher info to console
console.log(`Teacher: ${teacherName}\nDepartment: ${teacherDepartment}\nRatings: ${teacherRatingOutput}\nAverage Rating: ${teacherAvgRating}`);


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