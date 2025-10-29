//meital israel and liran edelshtein
//prints amount of zeroes in the arr
const arr = [0, 3, 0, -1, 5, 9, 7, 0, 2];

let zeros = 0;

for (let i = 0; i < arr.length; i++) {
  zeros += arr[i] === 0 ? 1 : 0;
}

console.log(`Number of zeros: ${zeros}`);
