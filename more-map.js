const numbers = [4,6,8,12,14] ;
const doubled = numbers.map(num => num * 2) ;
// console.log(doubled)
const fiveBonus = numbers.map(num => num * 5) ;
// console.log(fiveBonus)
const half = numbers.map(num=> num / 2) ;
// console.log(half)

const friends = ['tom','john','michel','olvir'] ;
const lenghts = friends.map(fr=> fr.length) ;
console.log(lenghts)
const lenghtFirst = friends.map(friend => friend[0]) ;
console.log(lenghtFirst)