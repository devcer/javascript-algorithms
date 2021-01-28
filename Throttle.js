function throttle(func, limit) {
    let shouldCall = true;
    return function() {
        let context = this;
        let args = arguments;
        if(shouldCall) {
            func.call(context, args);
            shouldCall = false;
            setTimeout(() => shouldCall = true, limit);
        }
    }
}


document.body.addEventListener('click', throttle( function() {
    console.log("This should be executed");
}, 2000));