// Create a function that reverses a string

// function reverse(str) {
//   if (!str || str.length < 2 || typeof str !== "string") return "Not valid";
//   let backwards = [];

//   for (let i = str.length - 1; i >= 0; i--) {
//     backwards.push(str[i]);
//   }

//   return backwards.join("");
// }

// function reverse2(str) {
//   return str.split("").reverse().join("");
// }

// const res = reverse2("My name is Hassan");
// console.log(res);

// .sort way
// function mergeSortedArrays(arr1, arr2) {
//   let mergedArr = [...arr1, ...arr2];
//   console.log(mergedArr.sort((a, b) => a - b));
// }

function mergeSortedArrays(arr1, arr2) {
  let mergedArr = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1,
    j = 1;

  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArr.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      mergedArr.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }

  console.log(mergedArr);
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
