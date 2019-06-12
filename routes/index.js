var express = require('express');
var router = express.Router();
var findNum = require('../tools/findNumber');
var findNumMore = require('../tools/findNumberMore');

/**
 * Function return info about number
 *
 * @name router_find
 * @author ViktorShiyan
 * @return {json} info about number
 *
 */
router.get('/find', (req, res) => {
    const info = findNum.find(req.query.number);
    if (info === null) {
        res.status(400).end();
    } else {
        res.status(200);
        res.json(info);
    }
});

/**
 * Function return info about more numbers
 *
 * @name router_findmore
 * @author ViktorShiyan
 * @return {json} info about more numbers
 *
 */
router.get('/findmore', (req, res) => {
    const info = findNumMore.findNumMore(req.query.number);
    if (info === null) {
        res.status(400).end();
    } else {
        res.status(200);
        res.json(info);
    }
});
module.exports = router;
