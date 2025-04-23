// Inheritence 
// 1.Single level
// 2.Multi Level
// 3.Multiple

// class vehicle{
//     constructor(color,currrentSpeed,maxSpeed){
//         this.color = color;
//         this.currrentSpeed = currrentSpeed;
//         this.maxSpeed = maxSpeed;
//     }
//     move(){
//         console.log("Moving at ",this.currrentSpeed);
//     }
//     accelerate(amount){
//         this.currrentSpeed += amount;
//     }
// }  
// class Motorcycle extends vehicle{
//     constructor(color,currrentSpeed,maxSpeed,fule){
//         super(color,currrentSpeed,maxSpeed);
//         this.fuel = this.fuel;
//     }
//     doWheelie(){
//         console.log("Driving on Wheels..!");
//     }
// }
// let motor =  new Motorcycle("Black",0,250,23);
// console.log(motor.color);
// console.log(motor.accelerate(50));

// Prototypes

class Person{
    constructor(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    greet(){
        console.log();
    }
 }
}
Person.prototype.introduce = function(){
    console.log("Hi,I'm", this.firstName);
}

Person.prototype.fvouriteColor = "green";