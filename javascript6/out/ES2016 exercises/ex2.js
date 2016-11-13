/**
 * Created by butwhole on 24/10/2016.
 */
'use strict';

var evens = [1];
var odds = evens.map(function (v) {
  return v;
});
var pairs = evens.map(function (v) {
  return { even: v, odd: v + 1 };
});
var nums = evens.map(function (v, i) {
  return v + i;
});
console.log(odds);
console.log(pairs);
console.log(nums);
//# sourceMappingURL=ex2.js.map