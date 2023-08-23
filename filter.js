// kono akta sorto onushare kichu element k bachai korar jonno use kora hoy
const numbers = [2,3,5,6,21] ;
const players =[75,67,85,36,87,56,81,75,45,77,57,80] ;
// const selected = players.filter(p=> p > 70) ;
// const selected = players.filter(p=> p > 40) ;
// bijor songkha pawar jonno ata use kora hoy 
const selectedOdd = players.filter(num=> num % 2 === 1)
// console.log(selectedOdd)
// bijor songkha pawar jonno ata use kora hoy 
const selectedEven = players.filter(num=> num % 2 === 0) ;
// console.log(selectedEven)

// friend er namer moddhe jader character bijor ace se nam gulo k pete chai, segulo pawar jonno use kora jay
const friends = ['tom','john','michel','olvir'] ;
const lenght = friends.filter(lgth => lgth.length % 2 ===0) 
console.log(lenght)