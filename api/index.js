var express = require("express");
var app = express();
let bodyParser = require('body-parser');


//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//enabling cros
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//route request
app.get("/", function(req,res){
    console.dir(req);

    res.send("data from the server");
})


//get data from sign up form
app.post("/data", (req,res) => {

    var data = req.body;

    console.log(data.formData.firstName);
    res.send(data);
    res.end();
})


//base url for server request
module.exports = {
    path : "/api/",
    handler: app
}