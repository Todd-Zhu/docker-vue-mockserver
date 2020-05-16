const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection({
    host: "localhost",
    user: "todd",
    password: "123456",
    database: "nodemysql"
});

db.connect((err)=>{
    if (err) {
        throw err;
    }
    console.log("数据库连接成功");
});

const host = "http://localhost:8080";
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", host);
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.listen(3001, ()=>{
    console.log("服务器开始端口：3001");
})

// 需要放在跨域设置后面
app.get("/getUser",(req,res)=>{
    const sql = "SELECT * FROM user";
    const post = {};
    db.query(sql, post, (err,result)=>{
        if (err) {
            console.log("执行sql失败", err);
        } else {
            console.log("执行sql成功",result);
            res.json(result);
        }
    });
});