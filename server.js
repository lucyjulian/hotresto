var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [
    {
    name: "Lucy",
    phone: "2034358345",
    email: "sdfn@sdfn.com",
    id: "234"
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});
  
app.get("/newreservation", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/tables", function(req, res) {
    return res.json(tables);
});

app.post("/newreservation", function(req, res) {
    var newtable = req.body;
  
    console.log(newtable);
  
    tables.push(newtable);
  
    res.json(newtable);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});