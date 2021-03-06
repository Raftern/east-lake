const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Users = require("./routers/api/users");
const Forum = require("./routers/api/forum");
const Classlist = require("./routers/api/classlist");

// 设置跨域访问
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.sendStatus(200);  //让options尝试请求快速结束
    else
        next();
})

app.get("/",(req,res) => {
    res.send("hello node.js");
})

// 配置post解析
// app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api/v1",Users);
app.use("/api/v2",Forum);
app.use("/api/v3",Classlist);

app.listen(5000,() => {
    console.log("Server is running on port 5000...");
})