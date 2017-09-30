var express = require('express');
var router = express.Router();
var data=require('../api/user');
var url=require('url');

router.getSearch=function (str) {
    str.shift();
    console.log(str);
};

/* Invoke API */
router.get('/', function(req, res, next) {
    console.log(req.search);
    res.send(`{code:0,message:'数据获取成功'}`)
});

router.get('/all', function(req, res, next) {
    new Promise(function (resolve,reject) {
        console.log(url.parse(req.url).search);
        resolve();
    }).then(function () {
        new Promise(function (resolve,reject) {
            var timestamp=data.get('wph9','12345');
            resolve();
        }).then(function () {
            res.send(`{code:0,msg:'用户添加成功',tp:'${timestamp}}'`)
        });

    });
});

module.exports = router;