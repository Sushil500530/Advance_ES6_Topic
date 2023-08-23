// reduce() ==> sob gulo element gulo k kichu akta kore akta result return kore dibe
const numbers= [4,6,8,12,15,18,58,85,9,15,48,35] ;
const total =numbers.reduce((previous,current) => previous + current , 0) ;
console.log(total)  ;
const num = [54, 45, 41, 80, 40, 24, 12, 50, 25] ;
const total2 = num.reduce((sum,get) => sum + get, 0) ;
console.log(total2)