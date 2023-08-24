
function min(nums) { return Math.min(nums) }
// console.log(min( [1,3,2 ]));

const cube=x=> x*x*x; 
// console.log(cube(2))
const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);
const {x, y, z} = {x: 1, y1: 2, z: 3};
// console.log(y)
const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2===0);
// console.log(output);

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"]; 
const five = friends.find(friend=> friend.length == 5)
console.log(five)
const five2 = friends.filter(friend => friend.length == 5)
console.log(five2)
const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
// const{price} = product;
const {price} = product.price
