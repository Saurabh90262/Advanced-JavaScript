// function test(x){
//     console.log("Available here :",x);
// }
// test("Hi");
// console.log("Not availble here:",x);

// function test(){
//     let y = "Local variable";
//     console.log("Availabe here:",y);
// }
// test("Hi");
// console.log("Not availble here:",y);


// function test(){
//     let y = "I will return";
//     console.log("Availabe here:",y);
//     return y;
// }
// let z = test();
// console.log("Outside the function",z);
// console.log("Not available here:",y);

//acess the variable before declaration
// function doing(){
//     if(true) {
//         console.log(x);
//         let x = "local";
//     }
// }
// doing();


// function doing(){
//     if(true) {
//         console.log(x);
//         var x = "local";
//     }
// }
// doing();

// let gv = 25;
// console.log("outside function :",gv);

// function newScope(x){
//     console.log("Acessible to the global inside function :",gv);
// }
// newScope();

// let gv = 25;
// console.log("outside function :",gv);

// function newScope(x){
//     let gv = 30
//     console.log("Acessible to the global inside function :",gv);
// }
// newScope();
// console.log("after block scope",gv);

// let gv = 25;
// console.log("outside function :",gv);

// function newScope(x){
//     console.log("Acessible to the global inside function :",x);
// }
// newScope(12);
// console.log("after block scope",gv);


// let x = 9;
// function newScope(){
//     x = 25; // without let, x will become global variable
//     console.log("Acessible to the global inside function :",x);
// }
// newScope();
// console.log("after block scope :",x);


//mislaneous annonymous function
// immideatly invoke function 
// (function(){
//     console.log("Hello");
// })();

// again invoke the function using ();
// (()=>{
//     console.log("Hi There...!");
// })();

// recusive function
// function logRecursion(x){
//     console.log("start",x);
//     if(x>0){
//         logRecursion(x-1);
//     }else{
//         console.log("Recursion Completed");
//     }
//     console.log("end",x);
// }
// logRecursion(5);