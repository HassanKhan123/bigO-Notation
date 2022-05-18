// Create a function that reverses a string

function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") return "Not valid";
  let backwards = [];

  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}

function reverse2(str) {
  return str.split("").reverse().join("");
}

const res = reverse2("My name is Hassan");
console.log(res);
