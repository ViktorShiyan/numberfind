const findNum = require('../tools/findNumberMore');

test('Test two numbers',
    () => {
        const exp = {
            "array": [
                {
                    "code": "999",
                    "company": "ООО Скартел",
                    "number": "9999999999",
                    "region": "г. Москва и Московская область"
                },
                {
                    "code": "911",
                    "company": "ПАО Мобильные ТелеСистемы",
                    "number": "9111111111",
                    "region": "г. Санкт-Петербург и Ленинградская область"
                }
            ]
        }
        expect(findNum.findNumMore('9999999999;9111111111'))
            .toStrictEqual(exp);
    });