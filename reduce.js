/*
 * @@Description: reduce源码解析
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-12 11:19:03
 * @LastEditTime: 2020-08-12 11:23:00
 * @LastEditors: i.mengxh@gmail.com
 */

Array.prototype.myReduce = function (callback, init) {
    let len = this.length;
    let pre = init;
    let i = 0;
    if (pre === init) {
        pre = this[0];
        i = 1;
    }

    for (i; i < len; i++) {
        pre = callback(pre, this[i], i, this);
    }

    return pre;
};

console.log([2, 3, 5].myReduce((pre, cur) => pre + cur));