class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.set("apples", 1000);
const keys = myHashTable.keys();

const data = myHashTable.get("grapes");
console.log(data);
console.log(keys);

// returns first occuerence of number

function firstOccuerence(arr) {
  let key = {};

  for (let i = 0; i < arr.length; i++) {
    if (key[arr[i]] !== undefined) {
      return arr[i];
    } else {
      key[arr[i]] = 1;
    }
  }

  return undefined;
}

const arr = firstOccuerence([2, 2, 1, 1, 4, 6, 6]);
console.log(arr);
