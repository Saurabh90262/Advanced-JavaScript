let extend  = ['hi','hello','bye']
let food = ['apple','mango',...extend,'papaya']
let eat = ['apple','mango',extend,'papaya']
console.log(food)
console.log(eat)

function addTwoNumbers(x,y){
    return (x+y);

}
let arr =[5,9];
let arr2 = [6,6];
addTwoNumbers(...arr,...arr2) //only

// Returning function values
let result  = addTwoNumbers(5,4)
console.log(result) //gives undefined

// Arrow function for the same 
let res = (n1,n2) => {
    console.log(n1+n2)
}
res(5,4)
