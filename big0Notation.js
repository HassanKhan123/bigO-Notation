const nemo = ["nemo"];

const everone = [
  "nemo",
  "nemo1",
  "nemo2",
  "nem3o",
  "nemo4",
  "ne4mo",
  "nem5o",
  "nemo5",
  "nemo4",
  "nem2o",
  "ne3mo",
  "nemo6",
  "nem5o",
  "ne6mo",
  "nemo4",
];

const largeArray = new Array(10000).fill("nemo");

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("NEMO FOIND");
    }
  }
}

findNemo(everone); // O(n)

const boxes = [0, 1, 2, 3, 4, 5];

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
}

logFirstTwoBoxes(boxes); // O(2)

function funChallenge(input) {
  let a = 10; // O(1)
  a = 50 + 3; // O(1)

  // O(n)
  for (let i = 0; i < input.length; i++) {
    anotherFunction(); // O(n)
    let stranger = true; // O(n)
    a++; // O(n)
  }
  return a; // O(1)
}

funChallenge([]); // O(3+4n)

// O(n) ---> Linear Time
// O(1) ---> Constant Time
