var express = require('express');
var router = express.Router();
const moudle=require('./util/example')
const util=require('./util/util')

/* GET users listing. */
router.get('/', function(req, res, next) {
    moudle.select().then(D=>res.send(util.ret(true,'查詢成功',D))).catch(()=>print("enter catch"))
  
});

router.post('/', function(req, res, next) {
    if(('keyword' in req.body)&('value' in req.body)){
        moudle.insert(req.body)
        .then(D=>res.send(util.ret(true,'新增成功',D)))
        .catch(E=>res.send(util.ret(false,'新增失敗',E)))
    }
    else{
        res.send(util.ret(false,'新增失敗-缺少參數',{}))
    }
    
  
});

router.put('/',function(req,res,next){
    if(('keyword' in req.body)&('value' in req.body)){
        moudle.update(req.body)
        .then(D=>res.send(util.ret(true,'更新成功',D)))
        .catch(E=>res.send(util.ret(false,'更新失敗',E)))
    }
    else{
        res.send(util.ret(false,'更新失敗-缺少參數',{}))
    }
})
module.exports = router;
