
function call(value) {
    console.log("callling", value);
}

callMe = function(call) {
    call(10);
}

callMe(call);
