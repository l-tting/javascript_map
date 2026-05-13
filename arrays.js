let values = [ 1,2,3,"Mango","Apples",true ]
console.log(values)
console.log(values[4])//Apples

values[5] = false
console.log(values)

//length 
console.log(values.length)//6

//slice
console.log(values.slice(2,5)) //(3) [3, 'Mango', 'Apples']

//adding items with push
values.push(8,9, "HP")
console.log(values) //(9) [1, 2, 3, 'Mango', 'Apples', false, 8, 9, 'HP']


//adding items with unshift
values.unshift("Oranges",340)
console.log(values) //(11) ['Oranges', 340, 1, 2, 3, 'Mango', 'Apples', false, 8, 9, 'HP']

//removing items with pop
values.pop()
console.log(values) //(10) ['Oranges', 340, 1, 2, 3, 'Mango', 'Apples', false, 8, 9]

//removing items with shift
values.shift()
console.log(values) //(9) [340, 1, 2, 3, 'Mango', 'Apples', false, 8, 9]

//includes
console.log(values.includes('Oranges')) //false

//at 
console.log(values.at(3)) //3
console.log(values.at(-2)) // -8

let numbers1 = [1,2,3,4]
let numbers2 = [5,6,7,8]
let combined = numbers1.concat(numbers2)
console.log(combined)//(8) [1, 2, 3, 4, 5, 6, 7, 8]

let combined2 = [...numbers1,...numbers2]
console.log(combined2)//(8) [1, 2, 3, 4, 5, 6, 7, 8]