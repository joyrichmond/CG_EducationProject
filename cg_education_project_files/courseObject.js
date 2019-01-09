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

//contains all existing teacher objects
let teacherMap = {
    "Ida Dream": new Teacher("Ida Dream", "Communication"),
    teacherJackBauer: new Teacher("Jack Bauer", "Random Electives"),
    teacherCalCulator: new Teacher("Cal Culator", "Mathematics"),
    teacherDaenerysTargaryen: new Teacher("Daenerys Targaryen", "Random Electives"),
    teacherConnorElonOsko: new Teacher("Connor Elon Osko", "Business")
};

teacherMap.teacherIdaDream.ratings.push(4.4, 3.7, 2.8);
teacherMap.teacherJackBauer.ratings.push(5.0, 5.0, 4.7);
teacherMap.teacherCalCulator.ratings.push(2.1, 3.8, 4.8);
teacherMap.teacherDaenerysTargaryen.ratings.push(1.7, 4.8, 4.7);
teacherMap.teacherConnorElonOsko.ratings.push(3.2, 3.9, 4.1);

console.log(teacherMap.teacherIdaDream);

