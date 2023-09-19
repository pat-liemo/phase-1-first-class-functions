function receivesAFunction(callback) {
    callback();
    return "I called the callback!"
};

function returnsANamedFunction() {
    return function add(num1, num2) {
        num1 + num2
    };
};

function returnsAnAnonymousFunction() {
    return function() {
        return "I am an anonymous function!"
    };
};