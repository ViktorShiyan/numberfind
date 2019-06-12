const findNum = require('./findNumber');
const _ = require('lodash');

function findNumberMore(numbers) {
    let numArr = numbers.split(";");
    numArr = numArr.map((current) => {
        return _.trim(current);
    });
    return numArr.reduce((acc, curr) => {
        return [...acc, findNum.find(curr)];
    }, []);
}

module.exports.findNumMore = findNumberMore;