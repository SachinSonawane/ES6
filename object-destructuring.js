var obj1 = {
    from:10,
    call: function() {
        console.log("calling obj1");
    }
}

var obj = {
    from:10,
    call() {
        console.log("calling obj");
    }
}

obj.call();