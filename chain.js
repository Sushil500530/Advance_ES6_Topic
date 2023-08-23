const data =[{id:1, name: 'abul', address:'kochu khet'}] 
console.log(data[0].name)

const product ={
    count : 5000 ,
    data: [
        {id:1, name:'leveno', price:65000},
        {id:2, name:'macbook', price:165000}
    ]
}
console.log(product.data[1].price)


const user = {
    id:2324,
    name:"soriful",
    address:{
        street:{
            first:'54/3 uttor side',
            second:'poribag er goli',
            third:'no dorai'
        },
        city:'Dhaka'
    }
}
const user2 ={
    id:3434, 
    name:'pori bibir majar',
    address:{
        city:'chitagong',
        country:'Bangladesh'
    }
}
// aktar vitor akta..ata k chain bole 
// (?) ke optional chaining(jodi samner value pawa jay tahle samne agaba r jodi na pawa jay tahle agaba na) bole
console.log(user.address.street?.second)
console.log(user2.address.street?.second)