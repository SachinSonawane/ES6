function* callme() {
    yield 1;
    yield 2;
    
    return 3;
}

var gen = callme();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());