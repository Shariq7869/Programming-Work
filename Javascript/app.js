// Data types
// there are two type of datatypes in javascript

// 1 primitive type
//store directly in the location the variable accesses stored on the stack.

// var store = "shariq don and Moiz don"; //string
// var store = 7686; // number / integer
// var store = true; // boolean / 1
// var store = false; // boolean / 0
// var store = null; // null 
// var store = undefined; //undefined
// var store = Symbol; //symbol

// document.write(store);
// console.log(store);


//2 reference type
// Accessed by reference Objects that are stored on the heap a pointer to a location in memory.
// it will save multiple values in a single time

// var store =[1, "awsdasd", true, null];
// var store ={ val1 :2 , val2 : "moiz"};

// console.log(store);
// console.log(store [1]);
// console.log( typeof store);


// //Array
// var muzammil1 = [1, 2, 3];
// var muzammil2 = muzammil; 

// muzammil2.push("awesome"); // its not working now due to me 


// console.log(muzammil1);
// console.log(muzammil2); //[1, 2, 3, "awesome"];


// Object
// var squadcodersdev = { moiz: 1, javascript: 2 };
// var squadcodersdev2 = squadcodersdev;

// squadcodersdev2.html = 786;
// squadcodersdev2.moiz = "khanzada";
// squadcodersdev2.javascript = "shariq";

// console.log(squadcodersdev);
// console.log(squadcodersdev2);


// javascript is case sensitive
// var name ="shariq name one";
// var Name ="moiza name two";
//both variables are different because of case sensitive

// console.log(name);
// console.log(Name);

//naming of variable 
//letters,
//underscroe,
//camel,
//pascal,

// var naming = "shariq-1";
// var naming_variable = "shariq-2";
// var Naming_Variable = "shariq-3";
// var naming_Variable = "shariq-4";

// console.log(naming);//letters,
// console.log(naming_variable);//Underscore,
// console.log(Naming_Variable);//pascal Case,
// console.log(naming_Variable);//Camel Case,


//there are three types of variabale
/*
let // let is working on inside of scope not working on outside of scope
var // working on both out and inside of working
const // conaot change
*/

// {} = scop

// let 
// {
//     let abdulRauf = "abdul Rauf";
// }

// console.log(abdulRauf);//is not definite error notworking


// {
//     let abdulRauf = "abdul Rauf";
//     // console.log(abdulRauf);
// }
// {
//    var shariqMustaqeem = "Shariq Mustaqeem";
// //    console.log(shariqMustaqeem);
// }
// {
//    var shariqMustaqeem = "Shariq Musatqeem";
// }
// //    console.log( shariqMustaqeem);


// const coachingName = "squadcodersdev"
// coachingName = "devdevteam"

// console.log(coachingName);

// let checkoutPrice = "500";
// // console.log(checkoutPrice); //("String");
// // console.log(typeof checkoutPrice); //("String");

// //parseInt method use to convert your string to number 
// checkoutPrice = parseInt(checkoutPrice);
// // console.log(checkoutPrice *100); //("number");
// // console.log(typeof checkoutPrice); //("number");

// let deliveryCharges = "50.66";
// parseFloat(deliveryCharges); //50.66

// // console.log(deliveryCharges);

// var val;
// val = "this is a string";
// val = new String("shariq javworking");
// val = new String(5655);
// val = new String(true);
// val = new String(new Date ());
// val = new String([1, 2, 3, 4, 5]);
// val = 10;
// val = (10).toString();

// console.log(val);

// val = new Number("2");
// val =new Number(true); //1
// val = new Number(false); //0
// val = new Number (null); //0

// val = new Number ("hello"); // Nan not a number
// val = new Number ([1, 2, 3, 4, 5]); // Nan not a number

// // console.log(val);

// val = parseInt("5");
// val = parseInt("5.010");

// val = 5 + 5; // 10
// val = 5 - 5;
// val = 5 / 5;
// val = 5 % 5;
// val = 5 * 5;

// //Math object
// // console.log(val);
 
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.pow(8, 4); // 8 * 8 * 8 * 8
// val =Math.min(2, 3, 1, 5, 0);
// val = Math.max(2, 33, 100, 4, 1, 0);
// val Math.random() * 20 + 1;   
// console.log(val);

//string concatination
// const firstName = "Muzammil";
// const lastName = "Mustaqeem";

// val = firstName + " " + lastName;
// val += "full stack developer";
// // console.log(firstName);
// // console.log(val);

// val = firstName.concat(" ", lastName, " Full stack Developer", " new things");
// val = "Hello, World my name is 'Muzammil Mustaqeem and my age' 'is 25'";
// val = 'hello, World my name is \'Muzammil Musatqeem and my age \'is 25'; 
// // \n =line break in string

// // console.log(val);

// // \n = line break in string
// val = "Hello, World my name is 'Muzammmil Musatqeem and \n \n my age ' is 25";
// // console.log(val);
// // console.log(typeof val,"typeof ");

// let val2 = val .replace("Muzammil", "Musaddiq");
// val2.includes("Musaddiq");//ture
// val2.includes("Musaddiq");//false
// // console.log(val2);
// console.log(typeof val2, "typeof");

// let total = 600;
// let delivery = 100;

// //agar asa ho to yun kardo
// //condition

// if (total > 500) {
//    total += delivery;
// }
// else {
//    total += 10;
// }
// console.log(total);

// val ="Hello, World my name is " +firstName +" "+ lastName +"and my age 'is 17  second line'";
// // console.log(val);
// val = "first name is " + firstName +" "+ "last name is " + lastName;
// //template literal
// val = `first name is ${firstName} last name ${lastName}`;
// // console.log(val);

// //Array
// //An array is a special variable, which can hold more than one value at a time.

// const fruits = ["mango", "banana", "apple"];
// const fruits2 = new Array("mango", "banana", "apple");

// console.log(fruits);
// console.log(fruits2);

// const mix = new Array(
//    11,
//    22,
//    "string",
//    true, //bolean
//    false, //bolean
//    null, 
//    undefined,
//    ["working", "working2"], //array
//    {a: 1, b: 2, c: 3} //object literal
// );

// console.log(mix);

// let =mix2 = new Array(
//    {
//       name: "muzammil",
//       email: "muzammil.rafay@gmail.com",
//       status: "Active",
//    },
//    {
//       name: "muzammil",
//       email: "muzammil.rafay@gmail.com",
//       status: "Active",
//    },
//    {
//       name: "muzammil",
//       email: "muzammil.rafay@gmail.com",
//       status: "Active",
//    },
// );//string = text

// console.log(mix2); 
// console.log(mix2[1]);
// con/sole.log(mix2[0]);

// const numbers = [22, 60, 10, 88, 99];//numbers
// numbers.push(102);
// numbers.unshift(9999);
// numbers.pop();
// numbers.shift();
// numbers.splice(1, 1);
// numbers.reverse();

// console.log(numbers);
// let testingArray =["mango", "apple", "banana"];
// testingArray.sort(); 
// console.log(testingArray);

// let value4;
// value4 = numbers.sort(function (x, y) {
//    return x - y;  
// });

// console.log(value4);
// numbers.push(120);
// console.log(numbers);
// numbers.push(102);
// console.log(numbers);

// const person = {
//    fullName: "muzammil",
//    lastName: "rafay",
//    age: 25,
//    marriedstatus: true,
//    address: {
//       cuountry: "pakistan",
//       city:"karachi",
//       fullAddress: "House # l-48 Sector 5-A-4 North karachi",
//    },
//    getBirthyear: function () {
//       return 2022 - this.age;
//    },
// };
//  person.fullName
//  person['fullName']
//  person.getBirthyear();//you have to call function for finding its value

// console.log(person, "person");

//objects in array
//  const peoples = [
//    {
//      name: "Muzammil",
//      age: 25,
//    },
//    {
//      name: "Musaddiq",
//      age: 20,
//    },
//    {
//      name: "Shariq",
//      age: 17,
//    },
//    {
//      name: "Abbas",
//      age: 12,
//    },
//  ];
// console.log(peoples, "pepeoles");

// index
// condition
// increment of one ++
//  for(let index = 0; index < peoples.length; index++){
//     console.log(index, "index");
//     const element = peoples[index];
//     console.log(element, "element");
//  } 

//  peoples.forEach(function (element, index) {
//     console.log(index, "index");
//     const element2 = peoples[index];
//     console.log(element2, "element2");
//  });
//  peoples.map(function (element, index) {
//    console.log(index, "index");
//    const element2 = peoples[index];
//    console.log(element2, "element2");
// });
 
//  console.log(peoples, "peoples");

// const today = new Date();
// let birthday = new Date("9-10-1981");// Month - Date - Year
// birthday = new Date ("November 27 1996");// Month Date Year
// birthday = new Date ("11/27/1996"); // Month Date Year

// console.log(birthday);
 
// valDate = today.getMonth() + 1;
// valDate = today.getFullYear();
// valDate = today.getHours();
// valDate = today.getSeconds();
// valDate = today.getMilliseconds();
// valDate = today.getTime();

// console.log(valDate);

// today.setMonth(1);
// today.setDate(5);
// today.setFullYear(1985);
// today.setHours(3);
// today.setMinutes(22);
// today.setSeconds(25);

// console.log(today);

// COMPARISION
// Comparision operators are used in logical statements to
// Determine equality or difference between variable or values.

// const conditionVariableChecking = 8;

// if (conditionVariableChecking ==11){
//    console.log("condition is working");
// }
// else {
//    console.log("condition is not working");
// }

const id = "100";
// console.log(typeof "100"); // string
// console.log(typeof 100); // number

// //it will check the only equality
// if (id == 100){   
//    console.log("condition is working");
// }
// else{
//    console.log("condition is not working");
// }

//!= not equal to &not check type of variables
//  "100" 100
// ! is ke barabar na ho id 
//  if(id !== 100) {
//     console.log("CORRECT");
//  }
//  else{
//     console.log("INCORRECT");
//  }

/* !== not equal to & not check type of variables */
// if ( id !== 100) {
//    console.log("CORRECT");
// }
// else{
//    console.log("INCORRECT");
// }

// Test if undefined
// if (typeof id !== "undefined"){
//    console.log(`The ID is ${id}`);
// }
// else{
//    console.log("NO ID");
// }

// GREATER OR LESS THAN
// > greater than
// < less than
// example of crocodile mouth

// if (id < 400) {
//    // id less than 400 se
//    console.log("correct");
// }
// else{
//    console.log("incorrect");
// }
// if (id > 400) {
//    console.log("correct");
// }
// else{
   //    console.log("incorrect");
// }
// ye nhi ho raha ha is ko karna ha 
// let orderTotal = 420; // bill bangaya
// const minimumOrder = 400;
// const productId = 4;
// let deliveryCharges = 100; //default charges

// if (orderTotal > minimumOrder && productId == 3) {
//   orderTotal += deliveryCharges;
// }

// if (orderTotal > minimumOrder || productId == 3) {
//   orderTotal += deliveryCharges;
// }

// // LOGICAL OPERATORS
// // && operator work when both conditions are true
// // || operator work when one condition is true

// console.log(orderTotal, "orderTotal");

// TERNARY OPERATOR
// single if or else
// console.log(id == 101 ? "id is 101" : "id is not 101");
// console.log(id == 100 ? "id is 100" : "id is not 100");

// if (id == 101) {
//    console.log("id is 101");
// } else {
//    console.log("id is not 101");
// }

// if (id == 101) {
//    console.log("101 is true");
// }else if (id == 100) {
//    console.log("100 is true");
// } else if (id == 102) {
//    console.log("102 is true");
// } else if (id == 103) {
//    console.log("103 is true");
// } else if (id == 104) {
//    console.log("104 is true");
// } else if (id == 105) {
//    console.log("105 is true");
// } else{
//    console.log("not match any conditions");
// }
// if (id == 100) console.log("CORRECT");
// else console.log("INCORRECT");

// let musaddiq;
// console.log(musaddiq,"musaddiq");

// if (!musaddiq) console.log("CORRECT Musaddiq varriable has a value");
// else console.log("INCORRECT Musaddiq varriable has not a value");

// const color ="yellow";

// if (color == "red"){
// console.log("color is red");
// }else if (color == "blue");
// else {
//    console.log("color is nor blue not red");
// }

// switch statement 
// const color2 = "blue";
// switch (color2) {
//    case "red":
//       console.log("color is red");
//       break;
//       case "blue":
//          console.log("color is blue");
//       break;
//       case "yellow":
//          console.log("color is yelloew");
//       break;
//       default:
//          console.log("color is not blue not red ");   
// }
//  let day; //undefined
//  switch (new Date().getDay()){
//     case 0:
//     day = "Sunday";
//     break;
//     case 1:
//     day = "Monday";
//     break;
//     case 2:
//     day = "Tuesday";
//     break;
//     case 3:
//     day = "Wednesday";
//     break;
//     case 4:
//     day = "Thursday";
//     break;
//     case 5:
//     day = "Friday";
//     break;
//     case 6:
//     day = "Saturday";
//     break;
//  }
//  console.log(day, "day");
// console.log("Today is " + day + '\n');
// console.log(`Today is ${day}`);

// function greet() {
//    console.log("function is working");
// }
//  greet();

// function greet() {
//    let name = "Muzammil";
//    name += "Mustaqeem";
//    return name;
// }
// // console.log(greet()); //call back
 
// function greetingTwo(firstName, lastName) {
//    //argument / parameter
//    return `${firstName} ${lastName}`;
// }
// console.log(greetingTwo("Muhammad Muzammil", "Mustaqeem"));

// Default argument
//  function square(x = 1,y = 1) {
//     return x * y;
//  }
// console.log(square(2, 4));
// console.log(square());
// console.log(square(10, 3));
// console.log(square(3, 9));

//IMMIDIATLEY INVOKABLE FUNCTION EXPREESIONS - IIFEs

// const add = (function () {
//    console.log("function call automatically");
// })();

// const add = (function (x, y){
//    console.log(`function call automatically ${x * y}`);
// })(2, 4);

// (function (paramone){
//    return paramone;
// }) ('working');
//    const todo = {
//       add: function () {
//          console.log("ADD Todo");
//       },
//       edit: function (id) {
//          console.log("edit todo" + id);
//       },
//       value: 1,
//       value: "shariqfw",
//       value: [1, 2, 3],
//    };

// todo.add();
// todo.edit(2);

// WINDOW METHODS / OBJECTS / RPOPERTIES

// ALERT
// window.alert('Hello World')

// console.log(window, "window");

// PROMPT
// const input = prompt();
// console.log(input, "input");

// confirm
// if(confirm('Are you sure')){
//    console.log('YES');
// }else {
//    console.log('NO');
// }

// let val89899;

// // Outter height and With
// val89899 = window.outerWidth;
// val89899 = window.outerHeight;

// Inner height and width
// val89899 = window.innerWidth;
// val89899 = window.innerHeight;

// Scroll points
// val89899 = window.scrollY;
// val89899 = window.scrollX;

// location Object
// val89899 = window.location;
// if (window.navigator.geolocation) {
   // navigator.geolocation.getCurrentPosition(function (position) {
   // console.log(position, "position");
// });




 


//  if (window.navigator.geolocation) {
//    navigator.geolocation.getCurrentPosition(function (position) {
//      console.log(position, "position");
//    });
//  } else {
//    console.log("Geolocation is not supported by this browser.");
//  }
 
// //  Location Object
//  val89899 = window.location;
//  val89899 = window.location.hostname;
//  val89899 = window.location.port;
//  val89899 = window.location.href;
//  val89899 = window.location.search;
 
// //  Redirect
// //  window.location.href = 'http://google.com';
// //  Reload
 
//  setTimeout(()=>{
//    window.location.reload();
//  },3000)
 
//  window.history.go(-2);
//  val89899 = window.history.length;
 
// //  Navigator Object
//  val89899 = window.navigator;
//  val89899 = window.navigator.appName;
//  val89899 = window.navigator.appVersion;
//  val89899 = window.navigator.userAgent;
//  val89899 = window.navigator.platform;
//  val89899 = window.navigator.vendor;
//  val89899 = window.navigator.language