const numbers =[5,35,35,226,64] ;
// double toir korar  jnno
const double = [] ;
for(const num of numbers){
    const number = num * 2 ;
    double.push(number)
}
console.log(double)
// map er maddhome sohoje ai kaj ta kora jay
// map ===> looper moto kaj kore, jodi array er moddhe chalai tahle se array return kore
function doubleIt(num){
    // console.log('number now', num)
    return num * 2 ;
} 
// arrow function 
const double2 = x => x * 2 ;
const result = numbers.map(doubleIt)
// console.log(result)
const output =numbers.map(double2) 
// console.log(output)
const output2 = numbers.map(n=> n * 2) ;
console.log(output2)