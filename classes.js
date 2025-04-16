// class car{
//     constructor(prop1,prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }
// let obj = new car("args1","arga2");
// console.log(obj.prop1);
// console.log(obj.prop2);

// It is convention to start the classname with Capital Letters;

// class Person{
//     constructor(first,last){
//         this.first = first;
//         this.last = last;
//     }
// }
// let p = new Person("Saurabh","Maurya");
// console.log(p.first+" "+p.last);
// It can manage the unparametrized constructors;

//+++++   Methods ++++++   Functions on a class are called methods 

class Person{
        constructor(first,last){
            this.first = first;
            this.last = last;
        }
        greet(){
            console.log("Hi",this.first);
        }
    }
let p = new Person("Saurabh","Maurya");
p.greet();