// const nemo = ["nemo"];

// const everone = [
//   "nemo",
//   "nemo1",
//   "nemo2",
//   "nem3o",
//   "nemo4",
//   "ne4mo",
//   "nem5o",
//   "nemo5",
//   "nemo4",
//   "nem2o",
//   "ne3mo",
//   "nemo6",
//   "nem5o",
//   "ne6mo",
//   "nemo4",
// ];

// const largeArray = new Array(10000).fill("nemo");

// function findNemo(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("NEMO FOIND");
//       break;
//     }
//   }
// }

// findNemo(everone); // O(n)

// const boxes = [0, 1, 2, 3, 4, 5];

// function logFirstTwoBoxes(boxes) {
//   console.log(boxes[0]); // O(1)
//   console.log(boxes[1]); // O(1)
// }

// logFirstTwoBoxes(boxes); // O(2)

// function funChallenge(input) {
//   let a = 10; // O(1)
//   a = 50 + 3; // O(1)

//   // O(n)
//   for (let i = 0; i < input.length; i++) {
//     anotherFunction(); // O(n)
//     let stranger = true; // O(n)
//     a++; // O(n)
//   }
//   return a; // O(1)
// }

// funChallenge([]); // O(n)

// function anotherFunChallenge(input) {
//   let a = 5; // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)

//   // O(n)
//   for (let i = 0; i < input; i++) {
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)
//   }

//   // O(n)
//   for (let j = 0; j < input; j++) {
//     let p = j * 2; // O(n)
//     let q = j * 2; // O(n)
//   }
//   let whoAmI = "I don't know"; // O(1)
// }

// anotherFunChallenge(); // O(n)

const items = ["a", "b", "c", "d", "e"];
console.log(this, "baharrrrrrrrr");

function logAllPairsOfArray(array, sum) {
  console.log(this, "anderrrrrr");

  let low = 0;
  let high = array[array.length - 1];

  while (low < high) {
    let s = array[low] + array[high];
    if (s === sum) return true;
  }
  // for (let i = 0; i < array.length; i++) {
  //   for (let j = 0; j < array.length; j++) {
  //     console.log(array[i] + array[j] === 8);
  //   }
  // }
}

const log = logAllPairsOfArray([1, 2, 4, 4]); // O(n^2)
console.log(log);

// O(n) ---> Linear Time
// O(1) ---> Constant Time
