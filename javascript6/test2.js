function* gen() {
    yield "Hello";
    yield "es2015";
    yield "Generators";
}
let g = gen();
//Using the iterator protocol
console.log(g.next().value); // Hello
console.log(g.next().value); // ES2015
console.log(g.next().value); // Generators

//using the iterable protocol
for(let i of gen()) {
    console.log(i);
}