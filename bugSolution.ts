function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Access the first element of the array
console.log(greeter(user[0])); // Outputs: Hello, Jane

// Solution 2:  Handle the array differently
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(" ");
}
console.log(greeterArray(user)); // Outputs: Hello, Jane Doe

//Solution 3: Use type assertion (use with caution)
console.log(greeter(user as string)); //Outputs: Hello, Jane,Doe (might not be desired behavior)