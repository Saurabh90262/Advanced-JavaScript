// // // // Create a Map
// // // const fruits= new Map();
// // // //set Map Values
// // // fruits.set("apples")
// // // // Map.clear()
// // // fruits.clear();
// // // set,get,type,delete,clear
// // // HashMethods
// // // Map.has("apple");
// // // fruits.delete("apples");

// // // let text = "";
// // // fruits.forEach(function(value,key){
// // //     text += key+'='+value;
// // // })
// // // console.log(text);

// // let text = "";
// // for(const x of fruits.entries()){
// //     text += x;
// // }
// // // Map.keys();
// // let text = "";
// // for(const x of fruits.keys()){
// //     text += x;
// // }
// // Map.values()

// // let total = 0;
// // for(const x of fruits.values()){
// //     total += x;
// // }
// // console.log(total);
// // const apples = {name:'Apples'};
// // const bananas = {name:'Bananas'};
// // const oranges = {name: 'Oranges'};
// // fruits.set(apples,500);
// // fruits.set(banaans,350);
// // fruits.set(oranges,250);

// // fruits.get("apples");

// // Destructuring
// // let{firstName,lastName} = person; //order doesnot matters
// const Person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50
// };

// // let{firstName,lastName} = Person;
// let{lastName:name} = Person;
// console.log(firstName);
// // console.log(lastName);

// 29 April 2025;
// let name = "Saurabh Maurya";
// let [a1,a2,a3,a4,a5] = name;
// console.log(a4);

// let names = ["hello","how","welcome","Greeting"];
// let[g1,,,g2] = names;
// console.log(g1,g2);

// let{[0]:names1,[1]:names2 }=names;

// const  num = [1,2,3,4,5,6,7,8,9];
// const [a,b,...rest] = num;
// console.log(a,b,rest);

//swaping using destructor in javaScript;
//  let fn = "Sashi";
//  let ln = "Maurya";

//  [fn,ln] = [ln,fn];
//  console.log(fn,ln);

// Exponential operator
// let x = 5;
// let z = x**2;
// console.log(z);
// console.log(Math.pow(x,3));

let names = ["hello", "how", "welcome", "Greeting"];
console.log(names.includes("welcome"));
