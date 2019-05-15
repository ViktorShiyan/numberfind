const fs = require('fs');
let fileContent = fs.readFileSync("./public/codes.csv", "utf8");
fileContent = fileContent.split("\n");
fileContent = fileContent.map(x => {
    let newX = x.replace('\"', '');
    return newX.replace('\";', ';');
});
fileContent = fileContent.join('\n');
fs.writeFileSync('./public/formatCodes.csv', fileContent);
console.log(fileContent);

