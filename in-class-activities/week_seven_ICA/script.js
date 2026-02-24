// // <!DOCTYPE html>
// <html>
// <head>
//     <title>Find vs Filter Lab</title>
// </head>
// <body>

// <h2>Open the Console to See Results</h2>>

// <script>

let students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Carlos", grade: 78 },
    { name: "Diana", grade: 92 },
    { name: "Ethan", grade: 88 },
    { name: "Dylan", grade: 77}
];

// ===============================
// TODO 1 (5 pts)
// Use find() to get the FIRST student with grade 92.
// Log the result to the console. ;
console.log(students.find(student => student.grade === 92))

// ===============================
// TODO 2 (5 pts)
// Use filter() to get ALL students with grade 92.
// Log the result to the console. ;
console.log(students.filter(student => student.grade === 92))

// ===============================
// TODO 3 (5 pts)
// Use find() to get the FIRST student with grade below 80.
// Log the result to the console.
console.log(students.find(student => student.grade < 80))

// ===============================s 
// TODO 4 (5 pts)
// Use filter() to get ALL students with grades above 85.
// Log the result to the console.

console.log(students.filter(student => student.grade > 85))

// ===============================
// TODO 5 (5 pts)
// Create a new variable that stores all students whose names start with "D".
// Use filter() and log the result.
let nameSWD = students.filter(student => student.name[0] === 'D')
console.log(nameSWD)


// </script>

// </body>
// </html>