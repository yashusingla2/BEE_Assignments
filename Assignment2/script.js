const students = [
    { id: 101, name: "Aman", marks: 82, course: "Java" },
    { id: 102, name: "Priya", marks: 95, course: "Python" },
    { id: 103, name: "Rahul", marks: 67, course: "Java" },
    { id: 104, name: "Neha", marks: 76, course: "Web" },
    { id: 105, name: "Rohan", marks: 88, course: "Python" }
];


students.push({
    id: 106,
    name: "Simran",
    marks: 91,
    course: "Java"
});

console.log("Task 1");
console.log(students);



let removedLast = students.pop();

console.log("Task 2");
console.log(removedLast);



students.unshift({
    id: 100,
    name: "Ankit",
    marks: 80,
    course: "Web"
});

console.log("Task 3");
console.log(students);



let removedFirst = students.shift();

console.log("Task 4");
console.log(removedFirst);



let index = students.findIndex(student => student.id === 103);

students.splice(index, 1, {
    id: 107,
    name: "Karan",
    marks: 78,
    course: "Java"
});

console.log("Task 5");
console.log(students);



let firstThree = students.slice(0, 3);

console.log("Task 6");
console.log(firstThree);



console.log("Task 7");

for (let student of students) {
    console.log(student.name + " - " + student.course + " - " + student.marks);
}



console.log("Task 8");

students.forEach(function(student) {
    console.log(student.name);
});



let names = students.map(function(student) {
    return student.name;
});

console.log("Task 9");
console.log(names);



let topStudents = students.filter(function(student) {
    return student.marks >= 80;
});

console.log("Task 10");
console.log(topStudents);



let totalMarks = students.reduce(function(total, student) {
    return total + student.marks;
}, 0);

let average = totalMarks / students.length;

console.log("Task 11");
console.log("Total Marks =", totalMarks);
console.log("Average Marks =", average);



let ascending = [...students];

ascending.sort(function(a, b) {
    return a.marks - b.marks;
});

console.log("Task 12 - Ascending");

ascending.forEach(function(student) {
    console.log(student.marks);
});



let descending = [...students];

descending.sort(function(a, b) {
    return b.marks - a.marks;
});

console.log("Task 12 - Descending");

descending.forEach(function(student) {
    console.log(student.marks);
});