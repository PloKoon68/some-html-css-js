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

//?. checks if the method exists. ??f not it will return undefined.
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
ordersSet.add("G??rkem");
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


/*
//first class - callback function
const firstClass = function () {
  return "calling firstClass";
};
//high order functions
const highOrder = function (f) {
  //note that you can use f.name
  console.log(f() + ` using ${f.name}` + " from higher");
};

highOrder(firstClass);
*/


/*
//function methods:

//when assigning a method using "this" to a firstclass function, you should specify the new this for the function using call method
const obj1 = {
  name: "Mehmet",
  intro: function (age, gender) {
    console.log(`${this.name} is a ${age} years old ${gender}`);
  },
};

const obj2 = {
  name: "Elif",
};

const outsideFunc = obj1.intro;
//with call method
outsideFunc.call(obj2, 20, "girl");
//with bind method, returns new funtion which "this" is binded to the object passed as argument
outsideFunc.bind(obj2)(15, "girl");

const f = function (name, age) {
  console.log(`${name} is ${age} years old.`);
};
//using bind method and passing the first parameter null(which mean setting it as first class again), you can the functions parameters
//like setting name as jason here
const bindedF = f.bind(null, "jason");
bindedF(12);

//when using an object method, by default this keyword in the object would be attached to the lego-clone. So we should blind it back to the object
document
  .querySelector("#lego-clone")
  .addEventListener("click", obj1.intro.bind(obj1, 15, "clone"));
*/


/*
//closure: when an inner function is returned and stored as a variable, the js engine will store the variables of the outer functions and make them
//accessible for the inner function whenever it is called.

function out() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const inF = out();

inF();
inF();
*/


/* //time function
setTimeout(function () {
  console.log("xx");
}, 3000);
*/


/*
//one time execution functions works only 1 time
(function () {
  console.log("only 1");
})();*/


/*
//array methods
const arr = [1, 2, 3, 4, 5];

//slice is the same slice in string methods
console.log(arr.slice(2, 4));
console.log(arr);
//splice is almost same as slice but it changes the original array, and the first paramater takes the start, second takes the number of element
//to delete instead of end
console.log(arr.splice(2, 2));
//reeverse also changes the original
console.log(arr.reverse());
//to concat use the following or the next
console.log([1, 2, 4].concat([1, 5, 7]));
console.log([...[1, 2, 4], ...[7, 9, 6]]);
*/


/*
//forEach() in  arrays

const arr = [-5, 8, 96, -6, -2];

//the function parameter runs in each iteration.
//the parameter of the call back function are orderly currentElement, index, arr. You can enter arbitrary number of parameters
arr.forEach(function (element, ind, arr) {
  console.log(
    `${ind + 1}. element is ${element > 0 ? "positive" : "negative"}`
  );
});

//note: you can not break out in forEach loops
*/


/*
//foreach also used in maps and sets
const map = new Map([
  ["Mehmet", 14],
  ["Ahmet", 16],
  ["Salih", 20],
]);
map.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
*/


/*
//map, filter, reduce methods on array
const euro = [345, 542, 22, 54];

//map return a new array from the original array according to the function

const dolar = euro.map(function (value) {
  return value * 1.1;
});
const dolarArrow = euro.map((value) => {
  return value * 1.1;
});
console.log(dolar);


//filter method again returns an array of elements that satisfies the boolean
// condition written in the return statement.

const negatives = euro.filter(function (value) {
  return value < 0;
});
console.log(negatives);


//reduce comes out with variable after looping through the array. callback functions first parameter is the accumulator, rest the same, and the second parameter of the reduce method
//is the initial value of the accumulator variable
const sum = euro.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);
console.log(sum);

//also you can create an object
const pn = euro.reduce(
  (sum, current) => {
    current > 0 ? (sum.positiveSum += current) : (sum.negativeSum += current);
    return sum;
  },
  { positiveSum: 0, negativeSum: 0 }
);
console.log(pn);


//find methods the first element that matches the condition
const neg = euro.find(function (num) {
  return num < 0;
});
console.log(neg);

//findIndex method

const negIndex = euro.findIndex(function (num) {
  return num < 0;
});
console.log(negIndex);


//some and every methods. Some return true if at least 1 element satisfies the condition while every return true if all the elements satisfies the condition.
console.log(
  euro.some((element) => {
    return element > 0;
  })
);
console.log(
  euro.every((element) => {
    return element > 0;
  })
);


//flat and flatMap method
const dimension2Arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//flat method reduces the array 1 dimension, but can reduce more based on the argument you pass to the method.
console.log(dimension2Arr.flat());

//map and flat methods commonly used together: arr.map().flat(). So flatMap() does that in a shorter and more efficient way
console.log(
  dimension2Arr.flatMap((val) => {
    return val;
  })
);


//sort method mutates the original array
const strArr = ["Mehmet", "Ahmet", "Elif"];
//on the string arrays, it will sort according to the alphabetical order
strArr.sort();
console.log(strArr);

const numArr = [-25, 98, 65, -96, 108];
//on number arrays, if the function returns positive, it will swap the two elements, if negative, will stay same.
numArr.sort(function (num1, num2) {
  return num1 > num2 ? 1 : -1;
});
console.log(numArr);



//title casing eaxmple
const titleCase = function (str) {
  const exceptions = [
    "a",
    "any",
    "the",
    "is",
    "or",
    "in",
    "with",
    "on",
    "at",
    "but",
  ];

  return str
    .split(" ")
    .map((current) => {
      return !exceptions.includes(current)
        ? current[0].toUpperCase() + current.slice(1)
        : current;
    })
    .join(" ");
};
console.log(titleCase("I lost my train in a copy!"));
*/



/*
//str to number conversion
//+ before a number string also convets str to num
console.log(+"25" + 4);

//parseInt and parseFloat converts the strings that doesn't start with char, and trunks the rest
console.log(parseInt("  25ef"));
console.log(parseFloat("25rem"));

//to check if it is a number isFinite()
console.log(Number.isFinite("323"));
console.log(Number.isFinite(+"323"));

//som math methods: Math. floor, ceil, round, min, max


//toFixed specifies the number of digit shown after decimal point and return string
console.log((1.2657949).toFixed(2));
console.log();

//the max num in js is 2**(53) - 1
console.log(Number.MAX_SAFE_INTEGER, 2 ** 53 - 1);

//for larger nums, there is a data type called big int

const big = 20000n;

//big ints can only be added to big ints
console.log(big + BigInt(15000));

console.log(big + BigInt(15000));

*/

/*
//this object returns the current date
const now = new Date();
console.log(now);

console.log(new Date("Jule 13 2021 18:05:36"));
console.log(new Date("December 23, 2014"));
//note: month indexes start from 0
console.log(new Date(2002, 4, 4, 3, 30, 15, 950));
//day=weekday
console.log(
  now.getFullYear(),
  now.getMonth(),
  now.getDate(),
  now.getDay(),
  now.getHours(),
  now.getMinutes()
);

//this padStart method adds 0 at the beggining of a template literal if its length is smaller than the first parameter
console.log(`1`.padStart(3, 0));
console.log(`${now.getDate()}`.padStart(2, 0));

//when subtracting dates from each other, miliseconds is used for unit
console.log(
  //converting miliseconds to day
  (new Date(2023, 5, 3) - new Date(2023, 5, 1)) / 1000 / 60 / 60 / 24
);


//Intl
const now = new Date();
console.log(Intl.DateTimeFormat("tr-TR").format(now), now);
//you can search google iso language code table for the DateTimeFormat() parameter, or intl mdn

*/

/*
//timer
//first parameter: callback func, second: the timeout(miliseconds), third: argumenrts of the cb function.
const time = setTimeout(
  (p1, p2) => {
    console.log(`arguments are ${p1} and ${p2}`);
  },
  3000,
  4,
  6
);

//you can delete the timer using clearTimeOut(time)
clearTimeout(time);

//you can also create a period of time
const interval = setInterval(
  (one, two) => {
    console.log(`${one} and ${two} in 3 sec period`);
  },
  3000,
  1,
  2
);
//stopped the interval after 7 sec
setTimeout(() => {
  clearTimeout(interval);
}, 7000);

*/
