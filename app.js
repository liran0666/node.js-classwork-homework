const { randomInt } = require('crypto');
const fs = require('fs');
const path = require('path');

function fileMaker() {
  const dirpath = path.join(__dirname, 'files');
  for (let i = 1; i <= 10; i++) {
    let whattowrite = 'hello' + i + '\n';
    console.log(whattowrite);
    const filePath = path.join(dirpath, `file${i}.txt`);

    for (let j = 1; j <= randomInt(20); j++) {
      whattowrite += 'asdfeawg' + j + '\n';
    }
    fs.writeFileSync(filePath, whattowrite);
  }
}
fileMaker();

function srter() {
  let texttouse = '';
  for (let i = 1; i <= 10; i++) {}
}
