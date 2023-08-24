// task-1:console log the secondary school location of Sophia
let data = {
    Sophia: {
        id: 33 ,
        study:[
            {
                primary:
                [
                    {school_name: 'ABC primary school'},
                    {location:'peters burg'}
                ]
            },
           {
            secondary:[
                {school_name:'ABC secondary school'},
                {location:'St Lorence'}
            ]
           }
        ] 
    }
}
const location = data.Sophia.study[1].secondary[1].location
console.log(location) ;
// task-2 :console log kore  petersburg ta k kivabe dekhabo, r Harry leka ta keo
let students = {
    2222:{
        name:'jack',
        section: 'c',
        class:'IX',
        address:{
            'building no':12,
            'street':'St.Jonson',
            'city':'Petersburg',
            'country': "UK"
        }
    },
    3333:{
        name:'Harry',
        section:'D',
        class:'X',
        address:{
            'building no':85,
            'street':'DC Road',
            'city':'kachukhet',
            'country': "Bangladesh"
        }
    }
}
const findCity = students[2222].address.city
console.log(findCity)
const findName = students[3333].name ;
console.log(findName)



// task-3: outpur:===> habluder adda
// and output ===> Beginner
 let data2 ={
    data:[
        {
            bookId:1,
            bookDetails:{
                name:'habluder adda', 
                category:'XYZ',
                price:'20$',
            },
            bookCategory: "Basic",
        },
        {
            bookId:2,
            bookDetails:{
                name:'gobluder adda', 
                category:'ABC',
                price:'40$',
            },
            bookCategory: "Beginner",
        }
    ]
 }
 const bookName = data2.data[0].bookDetails.name ;
 console.log(bookName)
 const bookCata = data2.data[1].bookCategory ;
 console.log(bookCata)