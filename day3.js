


// Destructuring Assignment
// Destructuring of an array

const days = ["Sunday", "Monday", "Tuesday", "Wednesday ", "Thursday"];
const number = [1, 2, 3, 4, 5];

//const[d1, d2, d3, d4] = days;
const[d1, d2,,...rest]=days;

console.log(d1, d2, rest);







//Destructing helps to combine arrays as well. COOL NAH!!
const newArr = [...days,...number];
console.log(newArr);

function arithOperation(a, b) {
  return [a+b, a-b, a*b, a/b]
}

const [sum, sub, mul, div] = arithOperation( 4, 6 );
console.log( sum );
console.log(mul);



// destructuring Object
let student = {
  firstName: " Isa ",
  lastName: " Regmi ",
  rollNo: 2
};

const {firstName: myName, rollNo: rno, address = "Pokhara"} =student;

console.log(myName);
console.log(rno);
console.log(address);