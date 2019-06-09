const fs = require('fs');

/**
 * Function find info about number
 *
 * @param number
 * @return {{code: string, company: string, region: string}|null}
 */
function find(number) {
    const isFindedString = (str, number) => {
        const arr = str.split(';');
        return arr[0] === number.substring(0, 3);
    };

    if (number.length !== 10) {
        return null;
    }
    let content = fs.readFileSync('./public/formatCodes.csv', 'utf8');
    content = content.split('\n');
    let currentString = '';
    for (let index in content) {
        if (isFindedString(content[index], number)) {
            currentString = content[index];
            const arr = currentString.split(";");
            if (Number(arr[1]) <= Number(number.substring(3, number.length)) && Number(arr[2]) >= Number(number.substring(3, number.length))) {
                break;
            }
        }
    }
    const arrRes = currentString.split(';');
    return {"code": arrRes[0], "company": arrRes[4], "region": arrRes[5]};
}

module.exports.find = find;