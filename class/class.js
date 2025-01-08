//06/01/25 - MONDAY CLASS

/*class Student {
    constructor(name) {
        this.name = name;
    }
}

let s1 = new Student("Aman");
let s2 = new Student("Amit");

console.log(s1);
console.log(s2);
*/

//08/01/25 - WEDNESDAY CLASS

class Student {
    constructor(name) {
      // this = {}
      this.name = name;
      // return this
    }
    
    markPresence() {
      // this = l17 s1, l18 s2
      console.log(this.name, 'Present Sir')
    }
    
    sayHello() {
      console.log('Hello from !', this.name)
    }
  }
  
  let s1 = new Student('Aman');
  let s2 = new Student('Amit');
  
  s1.markPresence();
  s2.markPresence();
  
  
  class SportsCaptain extends Student {
    constructor(name, sport) {
      // this = {}
      super(name)
      this.sport = sport;
      // return this
    }
    
    markPresence() {
      // this = l17 s1, l18 s2
      // console.log(this.name, 'Present')
      super.markPresence();
      console.log('Captain of', this.sport)
    }
  }
  
  let sc1 = new SportsCaptain('Bumrah', 'Cricket');
  // let sc2 = new SportsCaptain('Rishabh');
  
  // console.log(sc1.__proto__ === SportsCaptain.prototype)
  // console.log(SportsCaptain.prototype.__proto__ === Student.prototype)
  
  console.log(sc1)
  sc1.markPresence();
  sc1.sayHello();
  // sc2.markPresence();
  
  
  
  // class Util {
  //   constructor(employeeData) {
  //     // this = {}
  //     for (let employee of employeeData) {
  //       let [name, salary] = 
  //             Object.values(employee);
  //       this[name] = salary;
  //     }
  //     // return this
  //   }
    
  //   sumSalaries() {
  //     // this = data
  //     let salaries = Object.values(this)
  //     // console.log(salaries)
  //     let total = 0;
  //     for (let salary of salaries) {
  //       total = total + salary;
  //     }
  //     return total;
  //   }
    
  //   averageSalaries() {
  //     // this.data
  //     let totalSalary = this.sumSalaries();
  //     let totalEmployees = Object.keys(this).length
  //     return totalSalary/totalEmployees;
  //   }
  // }
  
  // let data = new Util([{ name: 'John', salary: 100}, {
  //       name: 'Peter',
  //       salary: 200
  //     }, {
  //       name: 'Jake',
  //       salary: 300
  //     }])
      
  // console.log(data)
  // console.log(data.sumSalaries())
  // console.log(data.averageSalaries())
  
  
  
  
  
  // Creating objects using a class
  
  // class X {
  //   constructor(val) {
  //     // this = {}
  //     this.a = val;
  //     // return this
  //   }
    
  //   sayHello() {
  //     // this = o1 in l26 call
  //     // this = o2 in l27 call
  //     console.log('Hello', this.a)
  //   }
  // }
  
  // // X.prototype = {}
  // // X.prototype.sayHello = function() {
  // //   console.log('Hello')
  // // }
  
  // let o1 = new X(10);
  // let o2 = new X(20);
  
  // console.log(o1.__proto__ === X.prototype)
  // console.log(o2.__proto__ === X.prototype)
  
  
  // console.log(o1)
  // console.log(o2)
  
  // o1.sayHello();
  // o2.sayHello();
  
  
  
  
  
  
  
  
  
  // -----
  
  // function MyConstructor() {
  //   // this = {};
  //   this.a = 5;
  //   // return this
  // }
  
  // // MyConstructor.prototype = {}
  // MyConstructor.prototype.sayHello = function() {
  //   console.log('Hello');
  // }
  
  // let dummyObject = new MyConstructor();
  // console.log(dummyObject)
  // console.log(dummyObject.__proto__)
  // dummyObject.sayHello();
  
  //-----
  
  // function Object {
    //this = {}
    // return this
  // }
  
  
  // let o = {};
  // let o = new Object();
  
  // o.x = 1;
  // o.y = true;
  // o.z = function() {
  //   console.log('Hello')
  // }
  
  // // console.log(Object.prototype)
  
  // // console.log(Object.keys(o))
  // // console.log(Object.values(o))
  // // console.log(Object.entries(o))
  
  // ----
  
  // // Object.assign(target, source)
  // let o1 = { random: 1 };
  // o1 = Object.assign(o1, o)
  // console.log(o1)
  
  
  // let o1 = { x: 1}
  // let o2 = { y: [1, 2]}
  
  // Object.assign(o1, o2)
  // o2.y = [3, 4];
  // console.log(o1)
  
  // ----  