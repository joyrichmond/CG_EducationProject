let teacherName = "Mr. Talks-a-lot";
let teacherDepartment = "Communication";


let teacherRatings = [2.1, 3.7, 4.3];

let totalRating = teacherRatings.reduce((carryOver, indexValue) => {
    return carryOver + indexValue;
});

let teacherAvgRating = (totalRating / teacherRatings.length).toFixed(5);

let teacherRatingOutput = teacherRatings.join(", ");
console.log(`Teacher: ${teacherName}\nDepartment: ${teacherDepartment}\nRating: ${teacherRatingOutput}\nAverage Rating: ${teacherAvgRating}`);

