'use strict'

let fetch = require("node-fetch");
var url = 'https://jsonplaceholder.typicode.com/photos?albumId=';



module.exports.getAlbums3 = function(callback){
let result = [];
    let prom =[];
    prom.push(fetch(url+1).then(res => res.json()))
    prom.push(fetch(url+3).then(res => res.json()))
    prom.push(fetch(url+5).then(res => res.json()))
    prom.push(fetch(url+7).then(res => res.json()))
    prom.push(fetch(url+9).then(res => res.json()))
Promise.all(prom).then(promArr=>{
    promArr.forEach((promise)=>{
        promise.forEach(album => {
            if (album.title.split(" ").length == 3) {
            result.push(album);
        }
        })
    })
callback(null,result)
}).catch(err => callback(err,null))

}
module.exports.getAlbumsX = function(x,callback){
    let result = [];
    let prom =[];
    prom.push(fetch(url+1).then(res => res.json()))
    prom.push(fetch(url+3).then(res => res.json()))
    prom.push(fetch(url+5).then(res => res.json()))
    prom.push(fetch(url+7).then(res => res.json()))
    prom.push(fetch(url+9).then(res => res.json()))
    Promise.all(prom).then(promArr=>{
        promArr.forEach((promise)=>{
            promise.forEach(album => {
                if (album.title.split(" ").length == x) {
                    result.push(album);
                }
            })
        })
        callback(null,result)
    }).catch(err => callback(err,null))

}