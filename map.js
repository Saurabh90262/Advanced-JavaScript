// // // Create a Map
// // const fruits= new Map();
// // //set Map Values
// // fruits.set("apples")
// // // Map.clear()
// // fruits.clear();
// // set,get,type,delete,clear
// // HashMethods
// // Map.has("apple");
// // fruits.delete("apples");

// // let text = "";
// // fruits.forEach(function(value,key){
// //     text += key+'='+value;
// // })
// // console.log(text);

// let text = "";
// for(const x of fruits.entries()){
//     text += x;
// }
// // Map.keys();
// let text = "";
// for(const x of fruits.keys()){
//     text += x;
// }
// Map.values()

// let total = 0;
// for(const x of fruits.values()){
//     total += x;
// }
// console.log(total);
// const apples = {name:'Apples'};
// const bananas = {name:'Bananas'};
// const oranges = {name: 'Oranges'};
// fruits.set(apples,500);
// fruits.set(banaans,350);
// fruits.set(oranges,250);

// fruits.get("apples");





// Destructuring
// let{firstName,lastName} = person; //order doesnot matters
const Person = {
    firstName: "John",
    lastName: "Doe",
    age: 50
};

// let{firstName,lastName} = Person;
let{lastName:name} = Person;
console.log(firstName);
// console.log(lastName);