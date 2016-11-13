"use strict";

var _marked = [gen].map(regeneratorRuntime.mark);

function gen() {
    return regeneratorRuntime.wrap(function gen$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return "Hello";

                case 2:
                    _context.next = 4;
                    return "es2015";

                case 4:
                    _context.next = 6;
                    return "Generators";

                case 6:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}
var g = gen();
//Using the iterator protocol
console.log(g.next().value); // Hello
console.log(g.next().value); // ES2015
console.log(g.next().value); // Generators

//using the iterable protocol
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = gen()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        console.log(i);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
//# sourceMappingURL=test2.js.map