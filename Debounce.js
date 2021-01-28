function debounce(func, delay) {
    let timeout = null;
    return function() {
        let context = this;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            func.call(context);
        }, delay);
    }
}

document.body.addEventListener('click', debounce( function() {
    console.log("This should be executed");
}, 2000));