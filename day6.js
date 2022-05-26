//Class in js

class Person {
    constructor(name, address, gender) {
        this.name = name;
        this.address = address;
        this.gender = gender;

    }
    thisIsMe() {
        return `This is me ${this.name}.`;
    }
}

/*person1 = new Person("Sabita", "Mahendranagar","female");
console.log(person1);
console.log(person1.thisIsMe());*/

class Student extends Person{
    constructor(name, address, gender, rno, course) {
        super(name, address, gender);
        this.rollNo = rno;
        this.course = course;
        
    }
    study() {
        return `Hello, I am ${this.name} and I am enrolled in ${this.course}`;
    }
}
student1 = new Student("Sabita Ojha","MNR","female", 1, "Bed.CSIT");
console.log(student1.study());

class Teacher extends Person {
    constructor(name, address, gender, degreeIn, experience) {
        super(name, address, gender);
        this.degree = degreeIn;
        this.experience = experience;
    }
    teach() {
        return `I am ${this.name}. I have experience of ${this.experience} year.`;
    }
}

teacher1 = new Teacher("Resab Dhami","MNR","Male","MCA",10);
console.log(teacher1);
console.log(teacher1.teach());