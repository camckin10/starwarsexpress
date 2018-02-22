// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
}, {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
}, {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
    res.send("Welcome to the Star Wars Page!");
});

// What does the question mark indicate?
app.get("/api/:characters?", function(req, res) { //have to add api after local host
    // What does this code do?
    var chosen = req.params.characters; //capturing what we(the user) types in 

    if (chosen) { //conditional stating that if user input matches characters array, then it will print
        //character parameters. 
        console.log(chosen);

        // What does this code do?    
        for (var i = 0; i < characters.length; i++) {
            if (chosen === characters[i].routeName) {
                return res.json(characters[i]);
            }
        }

        return res.send("No character found");
    }

    // What does this code do?
    return res.json(characters); //default return is returning entire characters array 
});

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});