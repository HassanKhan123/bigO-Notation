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

findNemo(everone);

// O(n) ---> Linear Time
// O(1) ---> Constant Time
