var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var tables = [
    {
    name: "Lucy",
    phone: "2034358345",
    email: "sdfn@sdfn.com",
    id: "234"
    },
    {
    name: "Henry",
    phone: "234987922",
    email: "dsfna@gamil.com",
    id: "643"
    }
];

var waitlist = [
    {
    name: "CHARMANDER",
    phone: "555-3464",
    email: "charrrr@gmail.com",
    id: "char"
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
  
app.get("/newreservation", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/api/tables", function(req, res){
    return res.json(tables);
});

app.get("/api/waitlist", function(req, res){
    return res.json(waitlist);
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.post("/newreservation", function(req, res) {
    var newtable = req.body;
  
    console.log(newtable);
    if (tables.length < 5){
    tables.push(newtable);
    console.log("New reservation made!");
    } else {
        waitlist.push(newtable);
    }
    res.json(newtable);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});