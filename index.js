// Q:1)

const parentObj = {
    calAge : function(){
        console.log(`${this.fname} ${this.lname} ${this.age}`)
    }
}

const childObj = Object.create(parentObj);
childObj.fname = "EA18";
childObj.lname = "2022";
childObj.age = "Oct Batch";

// childObj.calAge();

const childObj1 = Object.create(parentObj);
childObj1.fname = "John";
childObj1.lname = "Mathew";
childObj1.age = 20;

childObj.calAge();
childObj1.calAge();

// Q:2
class Person {
    constructor() {
      this.gender = 'male';
    }
    printPerson() {}
  }
  class User extends Person {
    constructor() {
      super();
      this.name = 'Abraham';
    }
    printUser() {}
  }
  var u = new User();
  console.log(u);

// Q:3)

const ParentObj = {
    sum : function(arr) { 
    let sum = 0; 
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]; 
    }
    console.log(sum); 
}    
}
let arr1=[1,2,3,4,5];
let arr2=[1,2,3,4,5,6];
let arr3=[1,2,3,4,5,6,7];

ParentObj.sum(arr1);
ParentObj.sum(arr2);
ParentObj.sum(arr3);

// ParentObj.sum([1,2,3,4,5]);
// ParentObj.sum([1,2,3,4,5,6]);
// ParentObj.sum([1,2,3,4,5,6]);
// ParentObj.sum([1,2,3,4,5]);
 


// Q:4)
var myobj ={
            name : "John",
            batch : "EA18",
            year : 2022,
          }
          let result = Object.keys(myobj);
          console.log(result);

   
