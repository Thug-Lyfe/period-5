function logger(a, b) {
    console.log("Value1: " + a + ", Value2: " + b);
}
function logger2(a, b) {
    console.log("Value1: " + a + ", Value2: " + b);
}
var a = 3, b = "hello faggot";
logger(b, a);
;
;
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.toString = function () { return this.name; };
    return Person;
}());
var Address = (function () {
    function Address(street) {
        this.street = street;
    }
    Address.prototype.toString = function () { return this.street; };
    return Address;
}());
logger2(new Person("Kurt"), new Address("hovedgaden 123"));
function logger3(a, b) {
    console.log("Value1: " + a + ", Value2: " + b);
}
logger3(new Person("Kurt"), new Address("hovedgaden 123"));
logger3("hello", 123);
logger3(true, false);
logger3("a", "b");
var GenericLogger = (function () {
    function GenericLogger() {
        this.log = function (a, b) { return console.log("Value1: " + a + ", Value2: " + b); };
    }
    GenericLogger.prototype.log1 = function (a, b) {
        console.log("Value1: " + a + ", Value2: " + b);
    };
    ;
    return GenericLogger;
}());
var l = new GenericLogger();
l.log(new Person("Kurt"), new Address("hovedgaden 123"));
//# sourceMappingURL=demo.js.map