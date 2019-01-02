//template for teacher object
class Teacher {
    constructor(name, department) {
        this.name = name;
        this.department = department;
        this.ratings = [];
    }

    //adds user input rating to ratings property
    addTeacherRating(value) {
        this.ratings.push(value);
    }

    //averages new rating with existing ratings
    getAvgTeacherRating() {
        const totalRating = this.ratings.reduce((accumulator, currentValue) =>
        {
            return accumulator + currentValue;
        });
        return (totalRating / this.ratings.length);
    }

    //adds space between ratings
    getReadableRatings() {
        return this.ratings.join(", ");
    }    

    //gives string containing teacher info
    toString() {
        return (`Teacher: ${this.name}\nDepartment: ${this.department}\nRatings: ${this.getReadableRatings()}\nAverage Rating: ${this.getAvgTeacherRating().toFixed(5)}`);
    }
}

//prompts user for new rating
function ratingPrompt(teacher) {
    while (true) {
        let newRating = parseFloat(window.prompt("Please rate your teacher with a value between 0.0 and 5.0."));
        if ((newRating >= 0) && (newRating <= 5)) {
            teacher.addTeacherRating(newRating);
            alert(`Thanks for your review! ${teacher.name}'s average rating is now ${teacher.getAvgTeacherRating()}.`);
            break;
        }
        alert("You didn't follow directions. Shame on you. Please rate your teacher with a value between 0.0 and 5.0.");
    }
}

//prompts user for department of teacher they would like to rate
function promptDept(teacher) {
    return window.prompt(`Please enter ${teacher}'s department name.`);
}

//contains all existing teacher objects
const teacherMap = {};

//prompts user for name of teacher they would like to rate and stores input
const userTeacher = window.prompt("Please enter the full name of the teacher you would like to rate.");

//creates new object if user input teacher does not exist
if (!teacherMap[userTeacher]) {
    const dept = promptDept(userTeacher);
    teacherMap[userTeacher] = new Teacher(userTeacher, dept);    
}

//prompts user for rating of input teacher
const teacherObj = teacherMap[userTeacher];
ratingPrompt(teacherObj);

//logs teacher info to console
console.log(teacherObj.toString());



//variables containing student info
const studentName = "Justin Time";
const studentMajor = "Communication";
const studentEmail = "talkinfunny@gmail.com";
const studentGPA = 3.4;

//logs student info to console
console.log(`Student Name: ${studentName}\nMajor: ${studentMajor}\nEmail: ${studentEmail}\nGPA: ${studentGPA}`);



//template for course object
function Course(name, department, teacher, semester) {
    this.name = name;
    this.department = department;
    this.teacher = teacher;
    this.semester = semester;
}

//contains all course objects
let courseCatalog = [
new Course("Interpersonal Communication", "Communication", "Ida Dream", "Fall 2019"),
new Course("Survival 101", "Random Electives", "Jack Bauer", "Fall 2019"),
new Course("Calculus", "Mathematics", "Cal Culator", "Fall 2019"),
new Course("Business 101", "Business", "Connor Elon Osko", "Fall 2019"),
new Course("Speech 101", "Communication", "Ida Dream", "Spring 2020"),
new Course("Dothraki", "Random Electives", "Daenerys Targaryen", "Spring 2020"),
new Course("Algebra I", "Mathematics", "Cal Culator", "Spring 2020"),
new Course("Business Finance", "Business", "Connor Elon Osko", "Spring 2020")
];

//filters courses by department input by user
const courseFilter = (array, userDepartment) => {
let filteredCourses = [];
let newArray = array.filter(x => x.department === userDepartment);
newArray.forEach(x => filteredCourses.push(x.name));
newArray.forEach(x => console.log(x));
return filteredCourses;
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


//prompts student for college graduation year and month; only allows for May or December graduation date
let collegeGradYear;
let collegeGradMonth = "";

while (true) {
    collegeGradYear = parseFloat(window.prompt("Please enter your future college graduation year."));
    if (collegeGradYear >= 2018) {
        while (true) {
            collegeGradMonth = window.prompt("Please enter your college graduation month. Only May or December are considered valid.");
            if ((collegeGradMonth === "May") || (collegeGradMonth === "December")) {
                break;
            } else {
                alert("Uh oh. Did you read the instructions? Please enter either May or December as the month of your graduation.");
            }
        }
        break;
    } else {
        alert("Uh oh. The year you entered isn't valid. This site only applies to future graduates. Please enter a year that has not yet occurred.");
    }
}

//function for creating readout telling what class student is in
const welcomeCollegeStudent = (studentClass) => {
    console.log(`Welcome ${studentClass}!`);
}

const welcomeHsStudent = (studentClass) => {
    console.log(`You're still a ${studentClass} in high school!`);
}

const welcomeYoungStudent = (studentClass) => {
    console.log(`Whatchyou doin' lookin' at college? Enjoy non-adulthood while it lasts.`);
}

//determines whether student is in high school or college based on graduation year and month input
const lifeStatus = (year, month) => {
    if ((year >= 2019) && (year <= 2021)) {
        return "college";
    } else if ((year >= 2023) && (year <= 2026)) {
        return "high school";
    } else if ((year == 2022) && (month === "May")) {
        return "college";
    } else if ((year == 2022) && (month === "December")) {
        return "high school";
    } else if (year >= 2027) {
        return "too young";
    }
}

//array matching graduation month and year with current class
const studentClassDictionary = [
    [2018, "December", "senior"],
    [2019, "May", "senior"],
    [2019, "December", "junior"],
    [2020, "May", "junior"],
    [2020, "December", "sophomore"],
    [2021, "May", "sophomore"],
    [2021, "December", "freshman"],
    [2022, "May", "freshman"],
    [2022, "December", "senior"],
    [2023, "May", "senior"],
    [2023, "December", "junior"],
    [2024, "May", "junior"],
    [2024, "December", "sophomore"],
    [2025, "May", "sophomore"],
    [2025, "December", "freshman"],
    [2026, "May", "freshman"]
];

//uses student input to determine their current class
let currentStudentClass = "";
function findStudentClass(year, month) {
    for (let i = 0; i < studentClassDictionary.length; i++) {
        const j = studentClassDictionary[i];
        if ((year === j[0]) && (month === j[1])) {
            currentStudentClass = j[2];
            return currentStudentClass;
        }
    }
};

findStudentClass(collegeGradYear, collegeGradMonth);

//outputs student class based on graduation month and year
if (lifeStatus(collegeGradYear, collegeGradMonth) === "college") {
    welcomeCollegeStudent(currentStudentClass);
} else if (lifeStatus(collegeGradYear, collegeGradMonth) === "high school") {
    welcomeHsStudent(currentStudentClass);
} else if (lifeStatus(collegeGradYear, collegeGradMonth) === "too young") {
    welcomeYoungStudent(currentStudentClass);
}