let fetch = require('node-fetch')
let connection = require("../db/db");
function randomJoke(callback) {
    db = connection.get();
    db.collection('jokes').find({}).toArray(function (err, data) {
        if (err) callback(err)
        else {
            callback(null, data[Math.floor(Math.random() * data.length)])
        }
    })
}
