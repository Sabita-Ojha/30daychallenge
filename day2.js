// Object Constructor
// we can create n number of object just passing different values. cool!!
function Student(name, rno, age) {
    this.myName = name,
    this.myRno = rno,
    this.myAge = age,
    this.myCourse = "Bed.CSIT"
};

let student1 = new Student("Pinky Regmi", 8, 20);
let student2 = new Student("Shyam Bhatt", 4, 21);

console.log(student1.myName, student1.myCourse);
console.log(student2.myRno);







// Methods in Constructor
// We can add methods inside constructor function using this keyword

function Person(name) {
    this.name = name;
    
    this.thisIsMe = function() {
        console.log("This is me : " + this.name);
    };
}

let me = new Person("Jiya Dhami"); // calling the constructor function using new function
me.thisIsMe(); // thisIsMe method will be invoked


// new function() -- this will create a constructor  and call it immediately

let person = new function() {

    this.name = "Joya Dahal",
    this.age = 23
    console.log(this.name);
    
}


