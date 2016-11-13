/**
 * Created by butwhole on 24/10/2016.
 */
'use strict'
let evens =[1]
let odds  = evens.map(v => v)
let pairs = evens.map(v => ({ even: v, odd: v + 1 }))
let nums  = evens.map((v, i) => v + i)
console.log(odds)
console.log(pairs)
console.log(nums)