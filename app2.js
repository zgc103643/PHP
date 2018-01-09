var express=require("express")
var app=express();
app.use(express.static("public"));
app.get("/",function(req,res){
    res.sendFile("a.html");
});
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.get('/c',function(req,res){
    var fnName=req.query.fnName;
    var data=[1,2,3]
    res.send(fnName+"(["+data+"])");
})

app.get('/cc',function(req,res){
    var fnName=req.query.fnName;
    var data=[1,2,3,4,5]
    res.send(fnName+"(["+data+"])");
})
app.listen(3000,"127.1.1.1");
