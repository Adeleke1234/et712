/** 
 * Adeleke Atunbi
 * Sept 17, JavaScript Object
 */
 
console.log("Adeleke Atunbi")
console.log("\n -------- Example 1: --------")
// create an object named 'car'
const car ={
   type: "Fiat",
   model: 500,
   color: "white",
}
console.log(`The model of the car is ${car.model}`)

console.log("\n -------- Example 2: use of 'this' keyword in an object") 
// create am object named 'person'
const person = {
   // definng properties 
   firstname : "John",
   lastname : "Doe",
   id : 1234,

   // defining methods
   fullanme : function(){
       return `${this.firstname} ${this.lastname}`
   }
}

// accessing method 'fullname'
console.log(person.fullname)


console.log("\n -------- Example 3: object constructor using function --------")
function course(title, instructor, code, session, students){
   this.title = title,
   this.instructor = instructor,
   this.code = code, 
   this.session = session,
   this.students = students
}
// set up values to the object
let course1 = new course("JavaScript programming", "Wu", "ET712", "H1", 12)

// accessing properties 
console.log(`The course ${course1.title} has ${course1.students} Students`)

console.log("\n -------- Example 4: methods --------")
const myMath = {
   // defining methods
   square : function(num){
       return num*num
   },
   double : function(num){
       return num*2
   }
}

// accessing methids
let n = 3
let number1 = myMath.double(n)
let number2 = myMath.square(n)
// print result
console.log(`The double of number ${n} is ${number1}`)
console.log(`The square of ${n} is ${number2}`)

console.log("\n -------- Exercise: --------")
const mycalculator = {
   message: "This calculator can compute area of a square and a volume of a cube",
   side: 2,

   area_sqaure: function() {
       return this.side * this.side;
   },

   volume_cube: function() {
       return this.side * this.isde * this.side;
   }
};

console.log(mycalculator.message);
console.log("Area of the square:" + mycalculator.area_square());
console.log("Volume of the code:" + mycalculator.volume_cube());


/** 
* SEP 19, 2024
* try-catch
*/
console.log("\n---- Example 1: try-catch----")
// define a function to display a message in upper-case
function yell(message){
   console.log(message,toUpperCase().repeat(3))
}

try {
   // call the function
yell("Good morning")
yell(123)
}
catch(e){
   console.log(`ERROR! ${e}`)
}
finally{
   console.log("end of calling fucntion yell()")
}
// after example
console.log("\n -------- lines after example 1 -------- \n")

console.log("\n ---- EXERCISE ----")
// Define a JavaScript function named 'divideNumbers' that takes two parameters, 'a' and 'b'.
// The function should attempt to divide 'a' and 'b' and return the result.
// if the division is undefined, return a message that says 'Error performing the division'
// use try-catch inside the function.

function divideNumbers(a, b) {
   try {
       if (b === 0) {
           throw new Error("cannot divide by zero");
       }
       return a / b;
   } catch(error) {
     return "Error performing the division"
   }
}
console.log(divideNumbers(40, 4))
console.log(divideNumbers(10,0) )