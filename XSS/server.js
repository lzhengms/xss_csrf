
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, '../')));
app.use(bodyParser.urlencoded({ extended: true }));

// 获取输入的内容列表
let contents = [
    { content: '内容1' },
    { content: '内容1' },
    { content: '内容3' },
]
let contents2 = [
    { content: '内容1334' },
    { content: '内容132' },
    { content: '内容3342' },
]
function encodeHtml(str) {
    return str.replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}
app.get('/getContents', function (req, res) {
    res.json({ contents });
});

app.post('/addContent', function (req, res) {
    contents.push({ content: req.body.content });
    res.json({ contents });
});

app.get('/getContents2', function (req, res) {
    res.json({ contents2 });
});

app.post('/addContent2', function (req, res) {
    contents2.push({ content: encodeHtml(req.body.content) });
    res.json({ contents2 });
});

app.listen(3000);