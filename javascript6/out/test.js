'use strict';

/**
 * Created by butwhole on 24/10/2016.
 */
function makeIterator(array) {
    var nextIndex = 0;

    return {
        next: function next() {
            return nextIndex < array.length ? { value: array[nextIndex++], done: false } : { done: true };
        }
    };
}
//Here we can do:
var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done); // true
//# sourceMappingURL=test.js.map