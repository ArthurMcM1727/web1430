function add_numbers(a, b) {
    return a+b
}

let sum = (a,b) => a+b

alert(add_numbers(10, 20))
alert(sum(1,2))

let arr= [1,"hello", function(){alert("hello from array")}, {_name: "Alice", age: 34}]
console.log(arr)

let num=[1,2,3,4,5,6,7,8,9,0]

// part A
let age = Number(prompt("What is your age? "))
if(age < 18){
    console.log("you are a minor")
}
else(console.log("you are an adult"))

// Part B
let user_number = Number(prompt("Enter any random number: "))
if(user_number % 2 == 0){
    console.log("Even")
}
else(console.log("odd"))

// Part C
let score = Number(prompt("Enter a test score 0-100: "))
if(score > 89){console.log("A")}
else if(score > 80){console.log("B")}
else if(score > 70){console.log("C")}
else if(score > 60){console.log("D")}
else(console.log("Fail"))

// Part D
const LetterGrade = prompt("Enter your letter grade: ")
switch(LetterGrade.toUpperCase()) {
    case "A":
        console.log("Stop")
        break
    case "B":
        console.log("Good")
        break
    case "C":
        console.log("Average")
        break
    case "D":
        console.log("Below Average")
        break
    case "F":
        console.log("Fail")
        break
    default:
        console.log("Invalid grade")
}

// Task B1
const day_of_week = Number(prompt("Enter a day of the week 0-6"))
switch(day_of_week) {
    case 0:
        console.log("Sunday")
        break
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    default:
        console.log("Invalid day of the week")
}