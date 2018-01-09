var express=require("express");
var app=express();
app.use(express.static("public"));
var bodyParser = require('body-parser');
//解析 application/x-www-form-urlencoded  类型的字符编码
app.use(bodyParser.urlencoded({extended:true}));
//解析 application/json 字符串类型的json数据   一般是ajax 发送的数据
/*
   可以解析下面这种数据
  $.ajax({
    type: "POST",/!*请求发送数据的方法*!/
    url: "/c",/!*请求服务器的位置*!/
    contentType:"application/json; charset=utf-8",
    data:JSON.stringify({name:"John",location:"Boston"}),  或  data:'{"name":"John","location":"Boston"}',
    success: function(msg){
        alert( "提示信息: " + msg );
    },
    /!* 监听服务器出现的错误*!/
    error:function(e){
        alert("请求超时");
    }
});*/
app.use(bodyParser.json());
//上面两个只会有一个生效
app.post('/b',function(req,res){
    console.log(req.body);
    res.send("哈哈");
})
var user=require("./user");
user.url();
app.post('/c',function(req,res){
    console.log(req.body);
    res.send("哈哈");
})
// 一个中间件栈，处理指向 /user/:id 的 GET 请求
app.get('/user/:id', function (req, res) {
    console.log(1);
}, function (req, res) {
    console.log(2);
}, function (req, res) {
    console.log(3);
    res.send('end');
});
app.get("/n",function(req,res){
    res.sendStatus(400);
});
// 处理 /user/:id， 打印出用户 id
app.get('/user/:id', function (req, res, next) {
    res.send(req.params.id);
});
app.listen(3000,"127.0.1.1",function(){ console.log("执行成功")});
/*
res.send([body])
发送HTTP响应。
body参数可以是一个Buffer对象，一个字符串，一个对象，或者一个数组。比如：*/



