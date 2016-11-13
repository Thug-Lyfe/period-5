/**
 * Created by butwhole on 31/10/2016.
 */
'use strict'
let promiseFactory = function(msg,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            let status = true;
            if(status){
                resolve(msg.toUpperCase());
            }else{
                reject("Upppps, lind is a mutterfukker")
            }
        },delay);
        });
}
let results = [];
let p = promiseFactory("hello faggot",3000);
p.then( data => {
    results.push(data);
    return promiseFactory(`From p ${data}`,2000)
}).then(d => {
    results.push(d);
    return promiseFactory(`From p2 ${d}`,1000)
}).then(result => {
    results.push(result)
    console.log(results);
}).catch(err => console.log(err));
console.log(results);