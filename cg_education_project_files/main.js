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
        const totalRating = this.ratings.reduce((accumulator, currentValue) => {
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

//contains all existing teacher objects
let teacherMap = {
    "Ida Dream": new Teacher("Ida Dream", "Communication"),
    "Jack Bauer": new Teacher("Jack Bauer", "Random Electives"),
    "Cal Culator": new Teacher("Cal Culator", "Mathematics"),
    "Daenerys Targaryen": new Teacher("Daenerys Targaryen", "Random Electives"),
    "Connor Elon Osko": new Teacher("Connor Elon Osko", "Business")
};

teacherMap["Ida Dream"].ratings.push(4.4, 3.7, 2.8);
teacherMap["Jack Bauer"].ratings.push(5.0, 5.0, 4.7);
teacherMap["Cal Culator"].ratings.push(2.1, 3.8, 4.8);
teacherMap["Daenerys Targaryen"].ratings.push(1.7, 4.8, 4.7);
teacherMap["Connor Elon Osko"].ratings.push(3.2, 3.9, 4.1);

//prompts user for name of teacher they would like to rate and stores input
const userTeacher = window.prompt("Please enter the full name of the teacher you would like to rate.");

//prompts user for department of teacher they would like to rate
function promptDept(teacher) {
    return window.prompt(`Please enter ${teacher}'s department name.`);
}

//creates new object if user input teacher does not exist
if (Object.values(teacherMap).some(x => x.name == userTeacher)) {
    ratingPrompt(userTeacher);
} else {
    const dept = promptDept(userTeacher);
    teacherMap[userTeacher] = new Teacher(userTeacher, dept);
    //teacherMap.assign(new Teacher(userTeacher, dept));
    ratingPrompt(userTeacher);
}

//prompts user for new rating
function ratingPrompt() {
    while (true) {
        let newRating = parseFloat(window.prompt("Please rate your teacher with a value between 0.0 and 5.0."));
        if ((newRating >= 0) && (newRating <= 5)) {
            teacherMap[userTeacher].addTeacherRating(newRating);
            alert(`Thanks for your review! ${teacherMap[userTeacher].name}'s average rating is now ${teacherMap[userTeacher].getAvgTeacherRating().toFixed(5)}.`);
            break;
        }
        alert("You didn't follow directions. Shame on you. Please rate your teacher with a value between 0.0 and 5.0.");
    }
}

//prompts user for rating of input teacher
const teacherObj = teacherMap[userTeacher];

//logs teacher info to console
console.log(teacherObj.toString());




//template for course object
class Course {
    constructor(name, department, teacher, semester) {
        this.name = name;
        this.department = department;
        this.teacher = teacher;
        this.semester = semester;
    }
}

//contains all course objects
let courseCatalog = {
    "Interpersonal Communication": new Course("Interpersonal Communication", "Communication", teacherMap.teacherIdaDream, "Fall 2019"),
    "Survival 101": new Course("Survival 101", "Random Electives", teacherMap.teacherJackBauer, "Fall 2019"),
    "Calculus": new Course("Calculus", "Mathematics", teacherMap.teacherCalCulator, "Fall 2019"),
    "Business 101": new Course("Business 101", "Business", teacherMap.teacherConnorElonOsko, "Fall 2019"),
    "Speech 101": new Course("Speech 101", "Communication", teacherMap.teacherIdaDream, "Spring 2020"),
    "Dothraki": new Course("Dothraki", "Random Electives", teacherMap.teacherDaenerysTargaryen, "Spring 2020"),
    "Algebra I": new Course("Algebra I", "Mathematics", teacherMap.teacherCalCulator, "Spring 2020"),
    "Business Finance": new Course("Business Finance", "Business", teacherMap.teacherConnorElonOsko, "Spring 2020")
};

//filters courses by department input by user
const filterCoursesByDepartment = (source, dept) => {
   let courses = Object.values(source).filter(x => x.department == dept);
   return courses.map(x => x.name);
}

//checks whether given department exists, saves filtered courses
let filterInput;
let departmentCourses;

while (true) {
    filterInput = window.prompt("Please enter a department name to view courses.");
    departmentCourses = filterCoursesByDepartment(courseCatalog, filterInput);
    if (departmentCourses && departmentCourses.length) {
        console.log(`Courses in the ${filterInput} department: ${departmentCourses.join(", ")}`);
        break;
    }
    alert("The department you entered doesn't exist. Please enter a valid department name.");
}

//tells student courses available in input department
alert(`The following courses are available in the ${filterInput} department: ${departmentCourses.join(", ")}`);




//template for student object
class Student {
    constructor(name, major, email, GPA) {
        this.name = name;
        this.major = major;
        this.email = email;
        this.GPA = GPA;
        this.courses = [];
    }

    addCourse(value) {
        this.courses.push(value);
    }

    dropCourse(value) {
        this.courses.splice(this.courses.indexOf(value), 1);
    }

    changeMajor(value) {
        this.major = value;
    }

    toString() {
        return (`Student Name: ${this.name}\nMajor: ${this.major}\nEmail: ${this.email}\nGPA: ${this.GPA}\nCourses: ${this.courses.join(", ")}`);
    }
}

//contains all existing students
let studentDirectory = {
    "Justin Time": new Student("Justin Time", "Business Management", "getmovin@gmail.com", 2.4)
}

//asks user for student name to view their information
const studentNameInput = prompt("Please enter a student's name to view information.");

studentDirectory["Loki Nagood"] = new Student("Loki Nagood", "Business", "mischiefmanaged@yahoo.com", 3.2);
studentDirectory["Rose High"] = new Student("Rose High", "Pre-med", "goinplaces@gmail.com", 4.0);
studentDirectory["Deb Ater"] = new Student("Deb Ater", "Communication", "illbeatyou@hotmail.com", 3.7);

//logs student info to console
if (Object.values(studentDirectory).some(x => x.name == studentNameInput)) {
    console.log(studentDirectory[studentNameInput].toString());
} else {
    alert("Student does not exist. Please contact the admissions department to enroll or add student to the system..");
}

//logs added courses to console and student's new course list
function logAddCourse(course, student) {
    studentDirectory[student].addCourse(course);
    console.log(`Adding Course: ${course}\nTo Student's Courses: ${student}\nNow they are taking....\n${studentDirectory[student].courses.join(", ")}`);
}

//adds courses to Justin Time's course list
logAddCourse("Business 101", "Justin Time");
logAddCourse("Business Finance", "Justin Time");
logAddCourse("Dothraki", "Justin Time");

//removes course from Justin Time's course list
studentDirectory["Justin Time"].dropCourse("Business Finance");
console.log(studentDirectory["Justin Time"].toString());

//changes Loki Nagood's major
studentDirectory["Loki Nagood"].changeMajor("Emperor of the Universe");
console.log(studentDirectory["Loki Nagood"].toString());




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