'use strict'
let fetch = require("node-fetch");
let promiseFactory = function(msg,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            let status = msg !== "Lind is";
            if(status){
                fetch("http://api.icndb.com/jokes/random").then(res => res.json()
                    .then(json => resolve(json.value.joke))
                );
            }else{
                reject("Alex is worse than hitlers dad")
            }
        },delay);
    });
}
let promises = [];
for (let i = 0; i < 50; i++){
    promises.push(promiseFactory("",0));
}
Promise.all(promises).then(arr => {
    console.log(arr);
}).catch(err => {
    console.log(err);
})

let promises2 = [];
for (let i = 0; i < 50; i++){
    promises2.push(fetch("http://api.icndb.com/jokes/random").then(res => res.json()));
}
Promise.all(promises2).then(all =>{
    let allmyJokes = all.map(orgJoke =>{
        return {joke: orgJoke.value.joke}
    });
    console.log(allmyJokes);
})