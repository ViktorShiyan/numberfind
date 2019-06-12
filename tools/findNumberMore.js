const findNum = require('./findNumber');
const _ = require('lodash');

function findNumberMore(numbers) {
    let numArr = numbers.split(";");
    numArr = numArr.map((current) => {
        return _.trim(current);
    });
    let result = numArr.reduce((acc, curr) => {
        return [...acc, findNum.find(curr)];
    }, []);
    return {array: result};
}

module.exports.findNumMore = findNumberMore;