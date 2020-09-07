/*
 * @@Description: 函数组合
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-09-07 14:39:13
 * @LastEditTime: 2020-09-07 14:41:42
 * @LastEditors: i.mengxh@gmail.com
 */

function compose(f, g) {
    return function (x) {
        return f(g(x));
    };
}

const toUpperCase = function (x) { return x.toUpperCase(); };
const exclaim = function (x) { return x + '!'; };

const shout = compose(exclaim, toUpperCase);

console.log(shout('send in the clowns'));