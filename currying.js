/*
 * @@Description: 函数柯力化:把接受多个参数的函数装换成接受一个单一参数的函数
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-09-02 09:37:23
 * @LastEditTime: 2020-09-02 10:45:09
 * @LastEditors: i.mengxh@gmail.com
 */

// 一层嵌套
function add(a) {
    return function (b) {
        return a + b;
    };
}

// 两层嵌套
function add2(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

// 固定参数的情况
function curry(fun) {
    return function curried(...args) {
        if (args.length >= fun.length) {
            return fun.apply(this, args);
        } else {
            return function (...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

// 任意参数的柯理化
function add3(x) {
    let sum = x;
    function resultFn(y) {
        sum += y;
        resultFn.result = sum;
        return resultFn;
    }

    return resultFn;
}

function sum(a, b, c, d) {
    return a + b + c + d;
}
let currySum = curry(sum);

// console.log(currySum(1)(2, 5, 7)); // 3

// console.log(currySum(1)(2)(7)(5)); // 10


console.log(5 + add(2)(3));
console.log(add3(1)(2)(3)(4, 7));
