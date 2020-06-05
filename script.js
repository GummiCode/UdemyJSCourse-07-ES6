/* The course covers the follwoing topics that I'm already familar with:
 1. Let and Const 
    (lecture 4)

 2. The block scope of let and const (compared to function scope of var); let and const defined within {} are not accessible outside of {}.
    (Lecture 5)

 3. Template literals; using ` and ${} to enbed variables and so forth within strings.
    (Lecture 5)

 4. Arrow Functions
    (Lecture 7, 8)
*/


// Some useful String methods in ES6.
const firstName = "Niel"
const secondName = "Gaiman" 
const name = `${firstName} ${secondName}`;

console.log(name.startsWith("N"));
console.log(name.endsWith("man"));
console.log(name.includes("el Ga"));
console.log(name.repeat(3));
console.log(`${name} `.repeat(3));


//Arrow Functions:
//1. One argument, one line: No parentheses, return is implicit.
let giveName = passedName => `${passedName}`;
console.log(giveName(firstName));

//2. Mutiple arguments: Need parentheses.
giveName = (passedName1, passedName2) => `${passedName1} ${passedName2}`;
console.log(giveName(firstName, secondName));

//3. Multiple lines: Need curly parentheses.
let greet = (passedName1, passedName2) => {
  const message = `Hello ${passedName1} ${passedName2}, and welcome to the 2020 literary fair!`;
  console.log(message);
};
greet(firstName, secondName);


//4. .this can be used in arrow functions, and has wider scope than in regular functions. 
/* With regular functions .this has function context. 
However, with arrow functions the context of  .this is wider; .this points to the variable that contains the arrow function.
In the example below, .this is used call values from the object that contains the arrow function. Super useful!
BUT BEWARE! The scope of the arrow function is -one block context down (I think)-. Be sure to use it with the right scope, or you could accidentally reference the global .this (or another .this) rather than the intended .this.
*/

//first example:

const greenBox = {
  color: "green",
  position: 1, 
  clickMe: function () {
    document.querySelector('.green').addEventListener('click', () => {
      const str = `This is the ${this.color} box. Its position is ${this.position}.`;
      alert(str);
    });
  }
}

greenBox.clickMe();

function Person(name) {
  this.name = name;
}

//second example:

pals = ["Sarah", "Jane", "Joel"];

Person.prototype.myPals = function (pals) {
  const palList = pals.map((pal) => 
    `${this.name} is friends with ${pal}`);
  console.log(palList);
}
new Person("Gary").myPals(pals);


