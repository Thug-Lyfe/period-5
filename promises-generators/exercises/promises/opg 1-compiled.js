'use strict';

var crypto = require('crypto');
var promiseFactory = function promiseFactory(Size, delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var status = true;
            if (status) {
                crypto.randomBytes(Size, function (err, buffer) {
                    resolve({
                        "length": Size,
                        "random": buffer.toString("hex")
                    });
                });
            } else {
                reject("Upppps, lind is a mutterfukker");
            }
        }, delay);
    });
};
module.exports.hex = function (callback) {
    var p1 = promiseFactory(48, 0);
    var p2 = promiseFactory(40, 0);
    var p3 = promiseFactory(32, 0);
    var p4 = promiseFactory(24, 0);
    var p5 = promiseFactory(16, 0);
    var p6 = promiseFactory(8, 0);

    var results = [];

    Promise.all([p1, p2, p3, p4, p5, p6]).then(function (arr) {
        results = arr;
        var j = {
            "title": "" + arr.length + " Secure Randoms",
            "random": arr
        };
        callback(null, j);
    }).catch(function (err) {
        callback(err, null);
    });
};

//# sourceMappingURL=opg 1-compiled.js.map