let person = {
    name :"Jane Doe",
    age: 29,
    address:"123 Kimathi St",
    "is employed":true
}
console.log(person)
console.log(person.name)
console.log(person["is employed"])
console.log(person["address"])

person.name = "Alice"
console.log(person) //{name: 'Alice', age: 29, address: '123 Kimathi St', is employed: true}

console.log(Object.keys(person))//(4) ['name', 'age', 'address', 'is employed']
console.log(Object.values(person))//(4) ['Alice', 29, '123 Kimathi St', true]
console.log(Object.entries(person))//(4) [Array(2), Array(2), Array(2), Array(2)]
 
(2) ['name', 'Alice']
 

(2) ['age', 29]