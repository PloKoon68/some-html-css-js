"use strict";
/*
//array declaration
const arr1 = new Array(1, 'sdfa', 34);
const arr2 = ['aSD', 123, arr1];

arr1.push(54);
arr1.unshift(13); //inserts element to the first index

arr1.pop();
arr1.shift();   //deletes first element





//objects = dictionary
const jonas = {
    firstName: 'Jonas',
    lastNme: 'Obama',
    friends: ['Micheal', 'Peter', 'Steven'],
    calcAge: function (birthDate) {
        this.age = 2022 - birthDate;
        return this.age;
    },
    driverLicence: true
}
console.log(jonas[1]);
//accessing elements
jonas['firstName'];
//or
jonas.firstName
let age = jonas.calcAge(2002);
let age2 = jonas['calcAge'](2002)


const total = function (obj) {
    console.log(`${obj.firstName} is ${obj.calcAge(2002)} years old and ${(obj.driverLicence) ? 'has' : "doesnt has"} a driver license.`);
}
total(jonas);





const randomNum = Math.trunc(Math.random() * 5); //this wil return a random number between 1 and 5

console.log(6);
console.log('6');




//downloading live-server package on terminal:
node -v     //checks the version

npm install live-server -g   //to install live-server

live-server  //to run it on browser


*/

/*

Mat.max(arr);      //returns the max of an arr
arr1.concat(arr2); //concats two arr
*/

/* 
const obj1 = {
  year: 2017,
  calcAge: function (birthYear) {
    return this.year - birthYear;
  },
};

const obj2 = {
  year: 2022,
};

//method borrowing
obj2.calcAge2 = obj1.calcAge;

console.log(obj2.calcAge2(2002));
console.log(this);
*/


/*
decl(); //no error
exp();  //error
arrw(); //error

function decl() {
  console.log(6 + 1);
}

const exp = function () {
  console.log(5 + 3);
};

const arrw = () => console.log(6 + 3);
*/



/*
var firstName = "ahmet";
const obj = {
  firstName: "Mehmet",
  showName: function () {
    console.log(this.firstName);
  },

  //this keyword in arrow function refers to window
  //not obj. So don't use arrow in obj.
  showNameArrow: () => console.log(this.firstName),
};

obj.showName();
obj.showNameArrow();
*/

/*
const obj = {
  name: "Mehmet",
  friends: ["Ahmet", "Fatih", "Ali"],
};

//when assigning an object to another, they will
//point to the same object in the heap
const obj2 = obj;

//to actually copy an object, use the following method
const copyObj = Object.assign({}, obj);
//this method copies the obj to a new empty obj
//however the object(friends) inside obj and copyObj
//are the same array, so this method doesn't copy 
//properly
*/




/*
//destructing-unpacking arrays
const arr = [1, 3, 9, [7, 7, 8]];

//unpacks only the first to element
const [one, three] = arr;

//unpacks first and third element
const [one2, , nine] = arr;
//assign to some number in case it does not exist
const [, , l, [seven1, seven2, eight], f = 1] = arr;
console.log(seven1, seven2, eight, f, l);
*/

/*
//destructuring objects
const obj = {
  cities: ["Ankara", "Istanbul", "Izmir"],
  countries: ["Turkey", "Germany", "America"],
  name: "Mehmet",
  age: 20,
  obj2: {
    name: "Ahmet",
    age: 18,
  },
};

//if you use the exact attribute names when unpacking, they will be unpacked
const { cities, name, age, obj2 } = obj;
console.log(cities, name, age, obj2);


//if unpack with changed variable names:
let { age: ageCopy, obj2: obj2Copy } = obj;
//unpacking  object in object
let {
  obj2: { name: n, age },
} = obj;
console.log(n, obj.obj2.name);


//... opeartors copy arrays and objects
const ob = { ...obj };
*/


/*
//the ?? operator is the same as || but doesn't returns false when the expression
//is 0 or '', only when it is null or undefined.
*/

/*
//looping trough iterables
const arr = [1, 2, 3, 4, 5];
//this only accesses the elements not indexes
for (const item of arr) console.log(item);

//for also the indexis:
for (const [index, item] of arr.entries()) console.log(index, item);
*/

/* //checking if method or attribute exists
const obj = {
  methd(name) {
    console.log(name);
  },
};

//?. checks if the method exists. İf not it will return undefined.
obj.methd?.("Mehmet");
console.log();
*/


/*
//looping through objects
const obj = {
  days: ["sunday", "monday", "thursday"],
  openingHours: {
    snday: [9.1],
    mnday: [8.3],
    thursdy: [7.54],
  },
};

//this returns an array which consists of the names of attributes in obj
console.log(Object.keys(obj));

//this returns an array which consists of the attributes of obj
console.log(Object.values(obj));

//this returns an array which consists of arrays with 2 values: key name and value
console.log(Object.entries(obj));
*/

/*
//sets
const ordersSet = new Set(["ahmet", "Mehmet", "Ayse", "Elif"]);

console.log(ordersSet.size);
console.log(ordersSet.has("Mehmet"));
ordersSet.add("Görkem");
ordersSet.delete("Elif");
ordersSet.clear();


*/


/*
const rest = new Map();
rest.set("Mehmet", 21);
rest.set(1, [2, 3, 5, 7]);
rest.set(3, 5).set(4, 5).set("err", { name: "Mehmet" });
console.log(rest.get(1));
console.log(rest.size);
rest.delete(3);

//we can set html elements in map
rest.set(document.querySelector("h1"), "Heading");
console.log();
*/



/*
//these string method converts the primitive string to object string, applies the
//method, then converts back to primitive string
const aString = " a String a \n";
console.log(aString.indexOf("a"));
console.log(aString.lastIndexOf("a"));
console.log(aString.slice(2, -2));
console.log(aString.toLowerCase());
console.log(aString.toUpperCase());
console.log(aString.trim());
*/


/*
//converting underscore names to camelCase
const arr = ["under_score", "first_name", "some_variable", "ali_vel"];

const camel = function (arr) {
  for (const str of arr) {
    const char = str[str.indexOf("_") + 1];
    console.log(str.split("_" + char).join(char.toUpperCase()));
  }
};
camel(arr);
*/


