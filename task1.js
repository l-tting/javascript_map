let year = Number(prompt("Enter random year"))

if((year %4 ==0 && year%100 != 0) || (year%400==0)){
    console.log("Leap year")
} else{
    console.log("Not Leap")
}

let x = 5

// Write a js program that checks if a variable student_score is greater than 90. If true, check if 
// the attendance is greater than 80. If both conditions are true, display"Excellent student", otherwise
//  display "Good score, but attendance needs improvement"

let student_score = Number(prompt("Enter score"))
let attendance = Number(prompt("Enter attendance score"))

if(student_score > 90){
    if(attendance > 80){
        console.log("Excellent student")
    }else{
        console.log("Good score but attendance needs improvement")
    }
}else{
    if(attendance > 80){
        console.log("Good attendance but score needs improvement")
    }else{
        console.log("Needs improvement on score and attendance")
    }
}
