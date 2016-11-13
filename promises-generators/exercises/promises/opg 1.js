'use strict'
var crypto = require('crypto');
let promiseFactory = function(Size){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let status = true;
            if(status){
                crypto.randomBytes(Size, function(err, buffer) {
                    resolve({
                        "length" : Size,
                        "random":buffer.toString("hex")
                    });


                });
            }else{
                reject("Upppps, lind is a mutterfukker")
            }
        });
    });
}
module.exports.hex = function(callback) {
    let p1 = promiseFactory(48);
    let p2 = promiseFactory(40);
    let p3 = promiseFactory(32);
    let p4 = promiseFactory(24);
    let p5 = promiseFactory(16);
    let p6 = promiseFactory(8);

    let results = [];

    Promise.all([p1, p2, p3, p4, p5, p6]).then(arr => {
        results = arr;
        let j = {
            "title" : "" + arr.length + " Secure Randoms",
            "random" : arr
        }
        callback(null,j);
    }).catch(err => {
        callback(err,null)
    })
}
