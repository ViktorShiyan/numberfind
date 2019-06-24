const findNum = require('../tools/findNumber');

test('find number 9659755075', () => {
    const exp = {"code": "965", "company": "ПАО Вымпел-Коммуникации", "number": "9659725075", "region": "Омская обл."};
    const actual = findNum.find('9659725075');
    expect(exp).toStrictEqual(actual);
});

test('find  equal null', () => {
    const exp = null;
    const actual = findNum.find('9659725');
    expect(exp).toStrictEqual(actual);
});