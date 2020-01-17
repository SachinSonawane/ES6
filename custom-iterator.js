// Custom iterator with object

let customIterator = {
    [Symbol.iterator]() {
        return {
            from:0,
            to:5,
            next() {
                if (this.from <= this.to) {
                    return { done: false, value: this.from++ };
                } else {
                    return { done: true };
                }
            }
        }
    }
} 

console.log(...customIterator);


let customIteratorWithGenrator = {
    from: 0,
    to: 5,
    *[Symbol.iterator]() {
        for(let val=this.from; val<=this.to; val++) {
            yield val;
        }
    }
}

console.log(...customIteratorWithGenrator);