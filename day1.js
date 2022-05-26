//Object references and copying 
let animal = {

    color: " White ",
    numOfLegs: 4
};
//copyting animal into Dog object
// copying an object variable creates one more reference to the same object.
let Dog = animal; //Both variables  are referencing to the same object

console.log(Dog);
Dog.color = "Black"; //modifying its contents 


//cloning an object

let animal = {

    color: " white ",
    numOfLegs: 4;
}

let clone = {};

for (let key in animal) { //copying properties of animal to clone 
    clone[key] = animal[key];
}

//Now clone is independent obj.

clone.color = " Black "; //This will not reflect into animal. Nice!

console.log(clone.color);
console.log(animal.color);


// object.assign method --

let student = {
    firstName: " Isa ",
    lastName: " Regmi ",
    rollNo: 2
};
let course = { courseName: "Bed.CSIT" };
let result = { percentage: 85 };
//Copies proprities of course and result to student
Object.assign(student, course, result);
console.log(student);
