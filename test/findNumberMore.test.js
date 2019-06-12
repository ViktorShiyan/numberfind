const findNum = require('../tools/findNumberMore');

test('Test two numbers',
    () => {
        const exp = [
            {"code": "999", "company": "ООО Скартел", "region": "г. Москва и Московская область"},
            {
                "code": "911",
                "company": "ПАО Мобильные ТелеСистемы",
                "region": "г. Санкт-Петербург и Ленинградская область"
            }
        ];
        expect(findNum.findNumMore('9999999999;9111111111'))
            .toStrictEqual(exp);
    });