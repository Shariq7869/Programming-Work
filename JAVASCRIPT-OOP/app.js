// https://www.geeksforgeeks.org/introduction-object-oriented-programming-javascript/

// OOP (Object Oriented Programing)

/*
There are certain features or mechanisms which makes a Language Object-Oriented like: 
Object
Classes
Encapsulation
Inheritance
*/

//Object Literals && Object Literals

const Shariq = {
    name: "ShariqMustaqeem",
    age: "17",
};

const Car = {
    color: "Red",
    type: "family car",
    horsePower: 1300,
    drive: function() {
        return "drive";
    },
};

//using a constructor
function person(first_name,last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}
//creating new instances of person object
 let person1 = new person("Mukul","Latiyan"); //initialize function
 
 
// console.log(person1,"person1");
// console.log(person1.first_name,"person1.first_name");

// Defining class using es6 class based work
  class Vehicle {
      constructor(name, maker, engine) {
          this.name = name;
          this.maker = maker;
          this.engine = engine;
      }
      getDetails(){
         return (`The name of the bike is ${this.name}.`)
      }
  }
  
  //all method of class are hidden naturally
  // Making object with the help of the constructor 

let bike1 = new Vehicle('hayabusa','Suzuki', '1340cc');

// console.log(bike1,"class based bike1");
// console.log(bike1.name);
// console.log(bike1.getDetails);

//Defining class in a Traditional Way.
  function VehicleFunction(name,maker,engine){
      this.name = name,
      this.maker = maker,
      this.engine = engine;

      this.getDetails = function(){
          return (`the name of the bike is ${this.name}.`)
      }
  };

  VehicleFunction.prototype.getDetails = function(){
      console.log('The name of the bike is '+ this.name);
  }
 let bike3 = new VehicleFunction('Hayabusa', 'suzuki','1340cc');

  console.log(bike3,"function based bike3");
  console.log(bike3.getDetails());
  
  //   // Encapsulation – The process of wrapping property and function within a single unit is known as encapsulation. 
  //   //we don't have any accessor modifiers in javascript
  
  //   //encapsulation example
  class person4{
  constructor(name,id){
      this.name = name; //this.name is your property
      this.id = id;
  }
  add_Address(add){//add_address method
    this.add = add;
  }
  getDetails(){
      console.log(`Name is ${this.name}, Address is: ${this.name}`);
  }
}
  
 let personValue = new person4('Mukil',21);
 personValue.add_Address('Delhi');
 personValue.getDetails();  
  
//Inheritance example = وراثت
class Parent {
    //method to reture the string 
    prefessionSkill(){
        return 'engineer';
    }
}

class Children extends Parent{
    professionSkill(){
        return 'engineer,doctor';
    }
}

const childrenClass = new Children();
console.log(childrenClass.professionSkill());

// Prototype Inheritance
function person2(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
// {firstName:"Muzammil",lastName:"lastName"}
person2.prototype.greeting = function (){
    return `Hello three my name is ${this.fistName} ${this.lastName}`
};

const muzammilPerson = new person2 ('Muzammil','Rafay');
// console.log(muzammilPerson,"muzammilPerson");
// console.log(muzammilPerson.greeting(),"muzammilPerson");
// console.log(muzammilPerson.__proto__.greeting(),"muzammilPerson");

function Customer(firstName,lastName,phone,membership){
    person2.call(this,firstName,lastName);
    this.phone = phone;
    this.membership = membership;
}
Customer.prototype = Object.create(person2.prototype)

// Customer.prototype = Object.create(Person2.prototype)

const customerObj = new Customer("Tom","Smith","555-555-5555","Standard");
console.log(customerObj);



// OOP IS COMPLETE WORK IN JAVASCRIPT