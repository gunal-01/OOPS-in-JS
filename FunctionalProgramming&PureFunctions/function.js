// functional programming
// A programming paradigm focused on 
// immutability - Data cannot be changed once created., 
// functions - First-class, take inputs, return outputs, 
// and avoiding side effects - No external state changes 
//                            or observable behavior outside functions.

// React encourages immutability (e.g., state) and pure functions (e.g., components).
// Immutability simplifies state tracking, 
// while pure functions enable predictable, efficient rendering

// JS
// Functions: Functions are first-class citizens/objects, 
// can be assigned to variables, passed, and returned.


// functions are first class objects
// assign a fucntion to a variables
// passing it as an arguments add, diff via callback strategy
// return a function - createMultiplier

const add = (x, y) => x+y;

function doMath(c, a, b) {
  return c(a, b)
}

let num1 = 2;
let num2 = 3;
console.log(doMath(add, 2, num2))

console.log(doMath((x, y) => x-y, 5, 2))


function createMultiplier(degree) {
  return function(v) { return v*degree }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(2));
console.log(triple(5));

// Pure functions, avoid modifying external state, use map(), reduce().
// Immutability: const for variables, or libraries like Immutable.js.

let cartTotal = 0;
let cartItems = [{
  name: 'phone',
  cost: 10000,
  qty: 1
}, {
  name: 'pen',
  cost: 10,
  qty: 5
}]

function getTotalCost(products) {
  let cartTotal = 0;
  for (let product of products) {
    cartTotal = cartTotal + product.qty * product.cost;
  } 
  // products.push({
  //   name: 'chips',
  //   cost: 0,
  //   qty: 1
  // })
  return cartTotal;
}

console.log(getTotalCost(cartItems))
console.log(getTotalCost(cartItems))
console.log(cartItems)

// Imperative: Specifies how to achieve a result
// const numbers = [1, 2, 3, 4, 5];
// const doubled = [];
// for (let i = 0; i < numbers.length; i++) {
//   doubled.push(numbers[i] * 2); // Explicitly telling how to loop and process
// }
// console.log(doubled); // [2, 4, 6, 8, 10]



// Declarative: Specifies what should be done, letting the system handle the details
// const numbers = [1, 2, 3, 4, 5];
// const double = num => num * 2;
// const doubled = numbers.map(double); // Focuses on the result
// console.log(doubled); // [2, 4, 6, 8, 10]




// cloning an object

// let o1 = { x: 1, y: 2 };
// let o2 = { ...o1, x: 10, z: 3 }
// console.log(o2)

// cloning a nested object

let o1 = { x: 1, y: { a: 2, b: { c: 3 } } } // x -> 1 y -> x1293472naahscc
let o2 = { ...o1, y: { ...o1.y, b: { ...o1.y.b } }  } // x -> 1 y -> sacfjan { a -> 2 b -> sacasvav
o2.x = 10;
o2.y.a = 20; // ys2981247172r -> a = 20
o2.y.b.c = 30;
console.log(o1)
console.log(o2)


// cloning an array 

let a1 = [1, 2, 3]
let a2 = [...a1]
a2[1] = 20;
console.log(a1, a2)

// slide 23
//

// const todoDB = [];

// function addTodo(task) {
//   if (task.priority === 'high') {
//     todoDB.unshift(task)
//   } else {
//     todoDB.push(task)
//   }
// }

// addTodo({ name: 'Complete HW' })
// addTodo({ name: 'Watch TV', priority: 'high' })
// addTodo({ name: 'Sleep' })
// console.log(todoDB)

// function updateTodo(newTask, i) {
//   todoDB[i] = newTask
// }

// updateTodo({ name: 'Exercise'}, 2)
// console.log(todoDB)

// function getTodo(i) {
//   return todoDB[i]
// }

// console.log(getTodo(0))

// function clearTodo(i) {
//   todoDB[0] = null;
// }

// clearTodo(0)
// console.log(todoDB)



let todoDB = [];

function addTodo(todoDB, task) {
  if (task.priority === 'high') {
    return [task, ...todoDB]
  } else {
    return [...todoDB, task]
  }
}

todoDB = addTodo(todoDB, { name: 'Complete HW' })
todoDB = addTodo(todoDB, { name: 'Watch TV', priority: 'high' })
todoDB = addTodo(todoDB, { name: 'Sleep' })
console.log(todoDB)

function updateTodo(todoDB, newTask, i) {
  let copy = [...todoDB]
  copy[i] = newTask
  return copy
}

todoDB = updateTodo(todoDB, { name: 'Exercise'}, 2)
console.log(todoDB)

function getTodo(todoDB, i) {
  return todoDB[i]
}

console.log(getTodo(todoDB, 0))

function clearTodo(todoDB, i) {
  let copy = [...todoDB]
  copy[0] = null;
  return copy;
}

todoDB = clearTodo(todoDB, 0)
console.log(todoDB)
