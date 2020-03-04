module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 != 0) {
        return false;
    }

    let open = [];
    let close = [];
    let ident = [];
    let stack = [];
    let strArr = str.split('');

    bracketsConfig.forEach(element => {
        if (element[0] !== element[1]) {
            open.push(element[0]);
            close.push(element[1]);
        } else {
            ident.push(element[0]);
        }
    });

    for (let i = 0; i < strArr.length; i++) {
        let element = strArr[i];

        if (ident.indexOf(element) != -1) {
            if (stack[stack.length - 1] !== element) {
                stack.push(element)
            } else {
                stack.pop();
            }
        } else if (open.indexOf(element) != -1) {
            stack.push(close[open.indexOf(element)]);
        } else {
            let nextClose = stack.pop();
            if (nextClose !== element) {
                return false;
            }
        }
    }
    return stack.length == 0
}

