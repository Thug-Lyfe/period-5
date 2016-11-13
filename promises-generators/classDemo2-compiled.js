'use strict';

var fetch = require("node-fetch");
var promiseFactory = function promiseFactory(msg, delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {

            var status = msg !== "Lind is";
            if (status) {
                fetch("http://api.icndb.com/jokes/random").then(function (res) {
                    return res.json().then(function (json) {
                        return resolve(json.value.joke);
                    });
                });
            } else {
                reject("Alex is worse than hitlers dad");
            }
        }, delay);
    });
};
var promises = [];
for (var i = 0; i < 50; i++) {
    promises.push(promiseFactory("", 0));
}
Promise.all(promises).then(function (arr) {
    console.log(arr);
}).catch(function (err) {
    console.log(err);
});

var promises2 = [];
for (var _i = 0; _i < 50; _i++) {
    promises2.push(fetch("http://api.icndb.com/jokes/random").then(function (res) {
        return res.json();
    }));
}
Promise.all(promises2).then(function (all) {
    var allmyJokes = all.map(function (orgJoke) {
        return { joke: orgJoke.value.joke };
    });
    console.log(allmyJokes);
});

//# sourceMappingURL=classDemo2-compiled.js.map