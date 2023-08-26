const user = { id: 1, name: 'Mahmud Hasan', job: 'web developer' };
console.log(user);

// JavaScript object Notation (JSON)
// Converts a JavaScript value to a JavaScript Object Notation (JSON) string.

const userDataStringify = JSON.stringify(user);
console.log(userDataStringify);

// Converts a JavaScript Object Notation (JSON) string into an object.
const userDataParse = JSON.parse(userDataStringify);
console.log(userDataParse);