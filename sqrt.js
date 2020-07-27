/*
 * @@Description: 平方根
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-27 09:50:16
 * @LastEditTime: 2020-07-27 09:52:40
 * @LastEditors: i.mengxh@gmail.com
 */

function Sqrt(x) {
    let i = 1;
    while (i * i <= x) {
        i++;
    }
    return i - 1;
}

console.log(Sqrt(36)); // 6