CREATE A NEW PROJECT CALLED JS-TRAINER

*JS* -> A programming language that interacts with the browser allowing us to create interactive and dynamic html pages

-> There are only 3 technologies that power the browser:
1.HTMl - skeleton structure
2.CSS - style
3.JS - provides user interactivity

*Why do we need it?*
1.User Interactivity - ability of a user to interact with an application when in use
    e.g -> click, scroll, hover , type , focus , 
2.Reactivity -> automatic loading of data without having to refresh 

*Interpreted vs Compiled Languages*

*where to write JS*
1.Internal JS - writing JS in HTML inside script tags <script> </script>
       -> in the head section
       -> in the body  section right above the closing body tag (most common way)
2.External JS - writing JS in an external and separate JS file with a .js extension 
      -> used when code to be written is bulky or also for organizational purposes


*VARIABLES*
-> A named container used for storing / holding values 
-> A memory location used to store values

*Variable Naming Rules*
1.Variable names can only contain letters ,numbers ,underscores  and dollar signs
2.Varibales names can only start with letters , underscores and dollar signs
3.Variables are case sensitive -> X and x are 2 different variables
4.Variable names cannot be key words / reserved words

*How to declare varibales in JS*
1.let - used when the value of the variable can be reassigned or changed
2.const - used when the value of the variable is a constant
3.var - works just like let but is outdated (depracated) --> works in older browser versions - replaced by let

*Data Types in JS*
1.String - set of character(s) enclosed in single or double quotes
2.Number - accounts for all numerical values-> both whole(integers) and decimals(floats)
3.Boolean - represents Truth values (true and false)


*console.log()* - a function used to output values / data in the console window

*typeof()* - a function that returns the data type of a value / variable

*Comments*
-> A way to document code
1.Single line comments - //
3.Multiline / Block Comments -> */ */


*String Methods*
->Methods : are inbuilt functions used to manipulate data
1.length - returns the no of characters in a string
2.charAt() - returns the character of a string at a specified index
       :Indexing in JS is zero based
       : In jS we dont have -ve indexing by default
3.slice() - extracts a portion of a string using indexes .slice(start, end)
4.toLowerCase() - returns  a string in all lowercase format
5.toUpperCase() - returns a string in all uppercase format
6.trim() - removes whitespaces from a string
7.trimStart() - removes whitespaces at the start of a string
8.trimEnd() - removes whitespaces at the end of a string
9.concat() -> used to combine or join two or more strings - used in place of the + operator
10.startsWith() - checks whether a string starts with a specified character or set of characters - returns a Boolean value
11.endsWith() - checks whether a string ends with a specified character or a set of characters - returns a Boolean value
12.replace() - replaces a character with another 

*TASK*
1.split()
2.substring()
3.includes()
4.Task on slide 56

*Numerical Operations*
+ - addition
- : subtraction
/ : division
* : multiplication
** : exponential
% : modulus
++ : increment operator -increase a value by 1
-- : decrement operator - decrease a value by 1


*Type coercion vs Type Conversion*
*Type coercion* - the automatic conversion of a value from one data type to another. this is done by the language or program automatically
*Type conversion* - the manual and explicit conversion of a value from one data type to another. This is done by the programmer : also called casting 

*Polymorphism* -> an object taking on more than one form
  -> method overloading & operator overloading
+ -> used as an addition operator
  -> used to concatenate two or more strings


*digit string* -> a string that has all characters as numeric values


*OPERATORS*
-> special symbols used to perform specific operations in programming
-> Broadly we have 4 major categories of operators:
1.Arithmetic Operators - used for mathematical operations
+ , - , / ,* , ** , % , ++, --
2.Assignment Operators - used to assign values to variables
=,+= , -= , /= , *=, %=, 
3.Logical Operators  - are used in logical operations
  and  - returns true if all conditions are true --> &&
  or  - returns true if at least one is true --> ||
  not - negates the boolean value --> !
4.Comparison Operators -> used to compare values
> ,< ,>= ,<=
== :loose equality - only checks for value ignoring data type
        -> allows for type coercion
=== : strict equality -> checks for both value and data type
        -> doesnt allow for type coercion
!= : loose inequality
!== : strict inequality


*CONDITIONAL STATEMENTS*
-> These are data structures that enable a program make decisions based on some predefined rules / conditions
-> An action is taken based on whether the condition is met or not 
-> This is enabled by if-else statements

*syntax of if-else statements*
-> if(condition){
     //what happens if the condition is met
  }else{
     //what happens if the condition is not met
  }


*syntax of if-else statements with multiple conditions*
if(condition 1){
    // what happens if condition 1 is met
}else if(condition 2){
   // what happens if condition 2 is met
}else if(condition 3){
   // what happens if condition 3 is met
}else{
   // what happens if none is met
}

*Taking user input in JS*
-> User input in JS is through a prompt() function
-> Any data coming from user input is always a string


*Ternary Operator*
-> Is a shorthand for writing simple if else statements
-> It can only be used when there is only one condition to be met
-> It uses the symbol '?'

*syntax of ternary operator*

let variable_name = condition ? what happens if condition is met : what happens if condition isnt met


*TASK*
-> slide 69

8.Conditional Statement A student’s final grade is determined by their exam score (an number between 0 and 100) using the rules below: If the score is 70 or above, the grade is A If the score is 60 to 69, the grade is B If the score is 50 to 59, the grade is C If the score is 40 to 49, the grade is D If the score is below 40, the grade is F Task: Write a JavaScript program that: Stores a student’s score in a variable. Uses if, else if, and else statements to determine the grade. Prints the grade to the console.




Create a variable called year and enter the a random year. Check if the year is a leap year or not. A leap year is a year that is divisible by 4  not divisible by 100 or divisible  by 400.


Write a js program that checks if a variable student_score is greater than 90. If true, check if the attendance is greater than 80. If both conditions are true, display"Excellent student", otherwise display "Good score, but attendance needs improvement"


*DATA STRUCTURES (COLLECTIONS)*
-> a data structure is a collection of multiple values in one variable / memory location 
-> In JS we have 2 data structures:
a) Arrays
b) Objects

*Arrays*
-> A collection of multiple values that could be of different data types
-> It is the equivalent of lists in Python 

*Properties of arrays*
1.They can hold multiple values of any data type
2.They are ordered  -> values can be accessed using index 
           => by default there is no -ve indexing in js arrays (indexing is zero based)
3.They are mutable - values can be changed 
4.Values in an array are comma-separated
5.They have access to methods
6.They are represented using []


*Array Methods*
1.Accessing values in arrays - uses indexing(indexing is zero-based by default)
2.Updating or changing values in an array -> use indexing
3.length - determines the no of items in an array
5.slice() -> extracts a portion of an array .slice(start, end)
6.Adding items to an array
     -> push() : add items at the end of an array
     -> unshift() : add items at the start of an array
7.Removing items from an array
     -> pop(): removing array items at the end
     -> shift() : removing items at the start of an array
8.includes() : checks whether an item is contained in an array (returns a boolean)
9.at() : used to access a value by index (it allows for both zero-based and -ve indexing)


*Task*
1.Find out what the following array methods do:
  -> splice()
  -> sort()
  -> concat()
2.Task on slides 72 & 73




*why indexing starts from zero?*
*spread operators*
-> used to combine or join array items by unpacking
->


*OBJECTS*
-> A data structure that stores values in key-value pairs
-> It is the equivalent of a a dictionary in Python

*Properties of Objects*
1.stores values in key-value pairs
2.Key is used to access the value
3.Key is considered to be a string
4.Values can be of any data type
5.They are mutable
6.Represented using {}

*property* - key + value pair


*why use objects?*
1.To store related data
2.To represent real world entities
3.To store complex data in a structured manner

*Object Operations*
1.accessing values in an object -> use the key to access the value
    -> dot notation : when the key follows identifier naming rules
    -> bracket notation : used regardless of whether the key follows identifier naming rules or not
2.Object.keys() - returns all object keys in an array
3.Object.values() - returns all object values in an array
4.Object.entries() - returns all key value pairs in an array


*task*
-> slides 78 & 79



*LOOPS*
-> are control structures that are used to execute a block of code repeatedly until a specific 
condition is met
-> It aims to reduce redundancy for a developer

*Types of Loops*
1.for loop : used when you have a definitive starting point and ending point
           -> it comprises of 3 parts:
            a) initialization - starting point of your loop
            b) condition - condition to be met for the loop to keep running
            c) update : increment or decrement after an iteration (++ or --)
            *syntax*
            for(initialization; condition ; update){
              //block executing repeatedly
            }
2.while : runs as long as the condition is met 
   while(condition){
      //block of code executing repeatedly
   }
3.do while - executes at least once before checking for the condition in the loop


*Nested Loops*
*Complex data structures*

*Task on Loops*
1.slide 82

*Task on complex data structures*
In the below complex data structure output the following:
  a)PostgreSQL
  b)Brand Strategy
  c)React

let company = {
  name: "TechCorp",
  founded: 2010,
  location: {
    country: "Kenya",
    city: "Nairobi",
    address: {
      street: "Kenyatta Avenue",
      building: "Tech Plaza",
      floor: 5
    }
  },
  departments: [
    {
      name: "Engineering",
      head: "Alice",
      employees: [
        { id: 1, name: "John", role: "Frontend Developer", skills: ["JavaScript", "React", "CSS"] },
        { id: 2, name: "Sarah", role: "Backend Developer", skills: ["Python", "Django", "PostgreSQL"] }
      ]
    },
    {
      name: "Marketing",
      head: "Bob",
      employees: [
        { id: 3, name: "Mike", role: "SEO Specialist", skills: ["SEO", "Google Analytics", "Content Writing"] },
        { id: 4, name: "Jane", role: "Social Media Manager", skills: ["Facebook Ads", "Instagram", "Brand Strategy"] }
      ]
    }
  ],
  projects: [
    {
      title: "E-commerce Website",
      deadline: "2025-09-30",
      team: [1, 2] // Employee IDs
    },
    {
      title: "Brand Awareness Campaign",
      deadline: "2025-10-15",
      team: [3, 4]
    }
  ]
};




*break* & *continue*



































