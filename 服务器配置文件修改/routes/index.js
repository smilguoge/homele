var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
//引入链接数据库
const connection=require('./conn');
connection.connect(()=>{
  console.log('链接数据库成功！');
})


router.post('/checklogin',(req,res)=>{
let {username,password}=req.body;
const sqlstr=`select * from users where username='${username}' and password='${password}' `;
connection.query(sqlstr,(err,data)=>{
  if(err){
    throw err;
  }else{
    res.send(data);
  }
})

})

module.exports = router;
