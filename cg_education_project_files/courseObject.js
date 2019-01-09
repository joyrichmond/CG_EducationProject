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

let studentDirectory = {
    "Justin Time": new Student("Justin Time", "Communication", "talkinfunny@gmail.com", 3.4)
}

const studentNameInput = prompt("Please enter a student's name to view information.");

if (Object.values(studentDirectory).some(x => x.name == studentNameInput)) {
    console.log(studentDirectory[studentNameInput].toString());
} else {
    alert("This student does not exist. Please follow the prompts to create new student.");
    const newStudentMajor = prompt("Please enter student's major.");
    const newStudentEmail = prompt("Please enter student's email.");
    const newStudentGPA = prompt("Please enter student's GPA, or enter 0 if student does not yet have a GPA.");
    studentDirectory[studentNameInput] = new Student(studentNameInput, newStudentMajor, newStudentEmail, newStudentGPA);
    console.log (studentDirectory[studentNameInput].toString());
}

studentDirectory["Justin Time"].addCourse("Dothraki");
studentDirectory["Justin Time"].addCourse("Business 101");
studentDirectory["Justin Time"].addCourse("Survival 101");
console.log(studentDirectory["Justin Time"].toString());

studentDirectory["Justin Time"].dropCourse("Survival 101");
console.log(studentDirectory["Justin Time"].toString());