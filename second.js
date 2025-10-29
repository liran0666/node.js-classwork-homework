//Liran edelshten& meital israel

//prints all the prime numbers thats lower than 237

for (let i = 2; i < 237; i++) {
  let bool = true;
  for (let k = 2; k < i; k++) {
    if (i % k == 0) bool = false;
  }
  if (bool) console.log(i);
}
