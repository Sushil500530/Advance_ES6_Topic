// task -1 
const instructor = [
    {name:'Nodi', age: 28, position:"Senior"},
    {name:"Akil",age: 26, position:'Junior'},
    {name:"Sushil",age: 30, position:'Senior'},
]
const senior = instructor.filter(age =>age.position === "Senior"); 
// console.log(senior)

// task-2
// even number use for loop 
const numbers = [2,4,5,7,8,9,12,13,14,15,16,17,21,22,23,24,26,27,28,30] ;
let even = [];
for(const num of numbers){
    if(num % 2 === 0){
        even.push(num)
    }
}
// console.log(even)
// odd number show
let odd = [];
for(const num of numbers){
    if(num % 2 === 1){
        odd.push(num)
    }
}
// console.log(odd)


// use map() convert odd number to even number
const oddNumbers = [1, 3, 5, 7, 9, 11, 13];
const convertEven = oddNumbers.map(num => num + 1) ;
// console.log(convertEven)

// use map() convert odd number to even number
const evenNumber = [2,4,6,8,10,12,14]
const convertOdd = evenNumber.map(num => num - 1) ;
// console.log(convertOdd)

// filter() use kore 2 diye vag jay amn songkha gulo k ber koro
const players =[75,67,85,36,87,56,81,75,45,77,57,80] ;
const division = players.filter(div => div % 5 === 0)  ;
const division2 = players.find(div => div % 5 === 0)  ;
// console.log(division)
// console.log(division2)

// task-3
// reduce() ==> use kore 3 ta age er sum ber kora 
const people = [
    {name:"Meena", age: 20},
    {name:"Rina", age: 15},
    {name:"Sushil", age: 22},
]
const sum = people.reduce((total,current)=>total + current.age, 0) ;
// console.log(sum)
let ageSum = [];
for(const age of people){
    const ageOf = age.age
    const sum = parseInt(ageOf);
    ageSum += sum ;
    
}
console.log(ageSum)