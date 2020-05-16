const express = require('express')
const app = express()
const port = 3001

const host = "http://localhost:8080";
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", host);
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    next();
});

// 需要放在跨域设置后面
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/getUser', (req, res) => res.json([
    {
        name: '小黑',
        id: '001',
        phone: '17313039445',
    }
]))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))