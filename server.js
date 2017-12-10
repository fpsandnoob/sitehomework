var express = require('express');
var uuid = require('uuid');
var app = express();
p1 = {
    name: "",
    ID: Number(0)
};
p2 = {
    name: "",
    ID: Number(0)
};

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/form.html")
});
app.get('/return', function (req, res) {
    res.send("组长姓名：" + p1.name +
        "\n组长学号：" + p1.ID +
        "\n组员姓名：" + p2.name +
        "\n组员学号：" + p2.ID)
});
app.get('/encoder', function (req, res) {
    res.sendFile(__dirname + "/encoder.html")
});
app.get('/encode', function (req, res) {
    word = req.query.password;
    res.send(uuid.v1(word).toString())
})
app.get('/get_params', function (req, res) {
    p1.name = req.query.name1;
    p1.ID = req.query.num1;
    p2.name = req.query.name2;
    p2.ID = req.query.num2;
    res.redirect('/return');
    console.log(p1.name + " " + p1.ID + "\n" + p2.name + " " + p2.ID);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});