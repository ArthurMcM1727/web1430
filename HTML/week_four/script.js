alert("Course registration")

let num1 = 5
student ={
    str: "Hello World",
    age: 30,
    //write a function to ask user what is your name
    // store the name in the variable str
    //use console to print welcom statement for that student
    
    F_welcome(){
        let str=prompt("What is your name: ", [])
        if(str != "" & str!= "blah")
            console.log("Welcome " + str + " to WSU")
        else{
            console.log("Please provide a name")
            student.F_welcome()
        }
    }
}


student.F_welcome()



let str = "Hello World"

let age = 30, flag=true;

