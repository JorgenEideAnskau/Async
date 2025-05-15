console.log("🚀 Function Hoisting Example");

// ✅ Function declaration is hoisted
hello(); 

function hello() {
  console.log("Hello from function declaration!");
}

// ❌ Function expression is NOT hoisted
try {
  greet(); 
} catch (error) {
  console.log("❌ Error:", error.message);
}

const greet = function() {
  console.log("Hello from function expression!");
};

// ❌ Arrow function is also NOT hoisted
try {
  arrowFunc();
} catch (error) {
  console.log("❌ Error:", error.message);
}

const arrowFunc = () => {
  console.log("Hello from arrow function!");
};

// 🔥 Variable Hoisting Test
console.log("🚀 Variable Hoisting Example");

// ✅ `var` is hoisted but set to `undefined`
console.log(myVar); // undefined
var myVar = "I'm a var!";
console.log(myVar); // "I'm a var!"

console.log("--------------------------------------------------------");

// ❌ `let` and `const` are hoisted but in a Temporal Dead Zone (TDZ)
try {
  console.log(myLet);
} catch (error) {
  console.log("❌ Error:", error.message);
}

let myLet = "I'm a let!";

// ❌ `const` behaves the same way as `let`
try {
  console.log(myConst);
} catch (error) {
  console.log("❌ Error:", error.message);
}

const myConst = "I'm a const!";
