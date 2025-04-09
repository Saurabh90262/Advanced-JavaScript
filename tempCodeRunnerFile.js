function test(){
    let y = "I will return";
    console.log("Availabe here:",y);
    return y;
}
let z = test();
console.log("Outside the function",z);
console.log("Not available here:",y);
