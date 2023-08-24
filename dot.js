const person ={
    name: 'kodom Ali', 
    age: 25 ,
    address: 'Bangladesh',
    hello:'third',
}
const prop = 'address' // bracket notation declare
console.log(person.address) // dot notation 
console.log(person['address']) // bracket notation 
console.log(person[prop]) // bracket notation 
console.log(person['hello'])