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