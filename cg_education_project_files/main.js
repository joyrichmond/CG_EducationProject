//teacher info variables
const teacherName = "Thomas Talks-a-lot";
const teacherDepartment = "Communication";
let teacherRatings = [2.1, 3.7, 4.3];

//function to add value to an array
const addTeacherRating = (array, value) => {
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
    }
    alert("You didn't follow directions. Shame on you. Please rate your teacher with a value between 0.0 and 5.0.");
}

//totals ratings in array
const totalRating = newTeacherRatings.reduce((carryOver, indexValue) => {
    return carryOver + indexValue;
});

//averages teacher's ratings
const teacherAvgRating = (totalRating / newTeacherRatings.length).toFixed(5);

//gives array with spaces between ratings
const teacherRatingOutput = newTeacherRatings.join(", ");

//alerts student to new rating average
alert(`Thanks for your review! ${teacherName}'s average rating is now ${teacherAvgRating}.`)

//logs teacher info to console
console.log(`Teacher: ${teacherName}\nDepartment: ${teacherDepartment}\nRatings: ${teacherRatingOutput}\nAverage Rating: ${teacherAvgRating}`);

//variables containing student info
const studentName = "Ida Dream";
const studentMajor = "Communication";
const studentEmail = "talkinfunny@gmail.com";
const studentGPA = 3.4;

//logs student info to console
console.log(`Student Name: ${studentName}\nMajor: ${studentMajor}\nEmail: ${studentEmail}\nGPA: ${studentGPA}`);

//variables containing course info
const courseName = "Interpersonal Communication";
const courseDepartment = "Communication";
const courseTeacher = "Thomas Talks-a-lot";
const courseSemester = "Fall 2019";

//array containing courses offered and their departments
const courseCatalog = [
    ["Interpersonal Communication", "Communication"],
    ["Survival 101", "Random Electives"],
    ["Calculus", "Mathematics"],
    ["Business 101", "Business"],
    ["Speech 101", "Communication"],
    ["Dothraki", "Random Electives"],
    ["Algebra I", "Mathematics"],
    ["Business Finance", "Business"]
]

//filters courses by given department, returns only course names within given department
const courseFilter = (array, department) => {
    let departmentCourses = [];
    let newArray = array.filter(x => x[1] === department);
    newArray.forEach(x => departmentCourses.push(x[0]));
    return departmentCourses;
}

//checks whether given department exists, saves filtered courses
let filterInput;
let departmentCourses;

while (true) {
    filterInput = window.prompt("Please enter a department name to view courses.");
    departmentCourses = courseFilter(courseCatalog, filterInput);
    if (departmentCourses && departmentCourses.length) {        
        break;
    }
    alert("The department you entered doesn't exist. Please enter a valid department name.");
}

//tells student courses available in input department
alert(`The following courses are available in the ${filterInput} department: ${departmentCourses.join(", ")}`);

//logs course info to console
console.log(`Course: ${courseName}\nDepartment: ${courseDepartment}\nInstructor: ${courseTeacher}\nSemester: ${courseSemester}`);