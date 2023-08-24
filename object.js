const products = [
        {id:1, name:'lenevo',price:65000},
        {id:2, name:'dell',price:45000},
        {id:3, name:'hp',price:40000},
        {id:4, name:'mac',price:150000},
]
// 1.map()==> er maddhome product gulor nam nibo
const names = products.map(product => product.name) ; 
// console.log(names)
const price = products.map(product => product.price ) ; 
// console.log(price)

// forEach()
// products.forEach(p => console.log(p.price)) ;

// filter() 
const expensive = products.filter(p => p.price >50000) ;
// console.log(expensive)

// finda()
const affordable = products.find(affor => affor.price < 50000) ;
// console.log(affordable)

// reduce()
const total = products.reduce((acumulator,current) => acumulator + current.price , 0) ;
console.log(total)
// const sum = products.reduce((total,current)=> current.price + total, 0) ;
// console.log(sum)