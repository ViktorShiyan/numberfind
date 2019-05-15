var express = require('express');
var router = express.Router();
var findNum = require('../tools/findNumber');

/* GET home page. */
router.get('/', function (req, res, next) {
    const funcHello = () => `Hello. It is home`;
    res.json(funcHello());
});

router.get('/find', (req, res) => {
    const info = findNum.find(req.query.number);
    if (info === null) {
        res.status(400).end();
    } else {
        res.status(200);
        res.json(info);
    }
});
module.exports = router;
