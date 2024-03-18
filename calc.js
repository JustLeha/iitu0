const OPERATIONS = {
    plus: '+',
    minus: '-',
    divide: '/',
    multiply: '*'
}

function calculate({a, b, operation}) {
    let result = null;
    switch (operation) {
        case OPERATIONS.plus:
            result = plus(a, b);
            break;
        case OPERATIONS.minus:
            result = minus(a, b);
            break;
        case OPERATIONS.divide:
            result = divide(a, b);
            break;
        case OPERATIONS.multiply:
            result = multiply(a, b);
            break;
        default:
            break;
    }
    return result;
}
