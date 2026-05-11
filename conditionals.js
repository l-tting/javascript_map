
let y = Number(prompt("Enter a number"))

if(y%2==0){
    console.log("Even number")
}else{
    console.log("Odd number")
}


let num1 = Number(prompt("Enter num1"))
let num2 = Number(prompt("Enter num2"))
let num3 = Number(prompt("Enter num3"))

if((num1 > num2) && (num1 > num3)){
    console.log("Num1 is the largest")
}else if((num2 > num1) && (num2 > num3)){
    console.log("Num2 is the largest")
}else{
    console.log("Num3 is the largest")
}

//write a simple if statement to check eligibility of a voter(assume a voter must be 
// at least 18yrs)


//write a program that checks whether the length of a username is at least 8 characters
//if length < 8 ,output "too short" otherwise output "Correct format"

let username = prompt("Enter username")

if (username.length < 8){
    console.log("Too short")
}else{
    console.log("Correct format")
}
//write a program that determines ticket prices based on age:
// under 12 -> 500/=,  under 18 -> 650/==, adults -> 800/= ,over 60yrs -> 400/=

let age = Number(prompt("Enter age"))

if(age > 0 && age < 12){
    console.log("Ticket is 500/=")
}else if(age < 18){
    console.log("Ticket is 650/=")
}else if(age >= 18){
    console.log("Ticket is 800/=")
}else if(age > 60){
    console.log("Ticket is 400/=")
}else{
    console.log("Invalid input")
}


let x = Number(prompt("Enter a value"))
let check_even = x%2==0 ? "Even number" : "Odd Number"
console.log(check_even)