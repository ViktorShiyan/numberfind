const fs = require('fs');


function findAll() {
    let content = fs.readFileSync('./public/formatCodes.csv', 'utf8');
    content = content.split('\n');
    let currentString = '';
    let arrJsonAll = [];
    for (let index in content) {
        currentString = content[index];
        const arrRes = currentString.split(";");
        arrJsonAll.push({
            "code": arrRes[0],
            "start": arrRes[1],
            "finish": arrRes[2],
            "count": arrRes[3],
            "company": arrRes[4],
            "region": arrRes[5]
        });
    }
    return arrJsonAll;
}

module.exports.findAll = findAll;