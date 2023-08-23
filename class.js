const products = [
    {id:1, name:'lenevo',price:65000},
    {id:2, name:'dell',price:45000},
    {id:3, name:'hp',price:40000},
    {id:4, name:'mac',price:150000},
]
// has some properties, method
// jodi class vitor kichu korte chai tahle constructor namer akta function k call korte hobe 
class Product{
    country = 'Bangladesh' ;
    constructor(name){
        this.name = name ;
    }
    speak(talk){
        console.log(`talking about ${talk}`)
    }
}
const lenevo = new Product(('le le lenevo'),('poka khay')) ;
// console.log(lenevo)
lenevo.speak('oba kita kau..!')

class Teacher {
    constructor(name,address){
        this.name = name ;
        this.address = address
    }
    lecture(){
        console.log("sir is teaching Math..!")
    }
}
const sushil = new Teacher('sushil Pal','Dinajpur')  ;
 console.log(sushil)

 const rashid = new Teacher('Rashid', 'English') ;
 console.log(rashid)