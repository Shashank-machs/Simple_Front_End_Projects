/*function greet(){
    return "Hello, " + this.name;
}
function treet() {
    return "Hiii, " + this.name;
}


let person1 = { name: "Alice", greet: greet };
let person2 = { name: "Bob", treet: treet };

console.log(person1.greet());  // Output: Hello, Alice
console.log(person2.treet());  // Output: Hello, Bob
*/
function trrry() {
    return this.firstName + " hii " + this.lastName;
  }


let person2 = {
  firstName:"John",
  lastName: "Doe",
  trrry:trrry
}


console.log(person2.trrry());
