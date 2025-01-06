/*let parentObject = {
    name: 'Anonymous',
    greet: function() {
        console.log('Hello', this.name)
    }
}

let s1 = {
    name: 'Aman'
}


let s2 = {
    name: 'Amit'
}

Object.setPrototypeOf(s1, parentObject);
Object.setPrototypeOf(s2, s1);

console.log(s1.hasOwnProperty('greet'))
console.log(s2.hasOwnProperty('greet'))

console.log(s1.__proto__)*/


// s1.greet()
// s2.greet()

/*let parentObject = {
    name: 'Anonymous',
    greet: function() {
        console.log('Hello', this.name);
    }
};

let s1 = {
    name: 'Aman'
};

let s2 = {
    name: 'Amit'
};

Object.setPrototypeOf(s1, parentObject);
Object.setPrototypeOf(s2, s1);

console.log(s1.hasOwnProperty('greet')); // false
console.log(s2.hasOwnProperty('greet')); // false

console.log(s1.__proto__); // { name: 'Anonymous', greet: [Function: greet] }
s1.greet(); // Hello Aman
s2.greet(); // Hello Aman*/




//constructor functions

/*function Student(name) {
    return {
        name: name
    }
}

//Manual method to create manually a object


let s1 = Student('Aman');
let s2 = Student('Amit');


console.log(s1);*/



function Student(name) {
    // console.log(this)
    //this
    this.name = name;
    /*this.greet = function() {
        console.log('Hello', this.name)
    }*/
}

// new Student();

let s1 = new Student('Aman')
//s1.__proto__ = Studennt.prototype
let s2 = new Student('Amit')
// let s1 = new Student('Aman');
// let s2 = new Student('Amit');
console.log('>>', Student.prototype)

console.log(s1.greet === s2.greet);

// let a = function() {
    
// }
Student.prototype.greet = function() {
    console.log('hello', this.name)
}



s1.greet();
s2.greet();


// console.log(s1)