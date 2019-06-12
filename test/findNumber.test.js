const findNum = require('../tools/findNumber');

test('find number 9659755075', () => {
    const exp = {"code": "965", "company": "ПАО Вымпел-Коммуникации", "region": "Омская обл."};
    const actual = findNum.find('9659725075');
    expect(exp).toStrictEqual(actual);
});