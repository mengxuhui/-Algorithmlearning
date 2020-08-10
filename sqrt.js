/*
 * @@Description: 平方根
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-27 09:50:16
 * @LastEditTime: 2020-08-06 10:14:25
 * @LastEditors: i.mengxh@gmail.com
 */

function Sqrt(x) {
    let i = 1;
    while (i * i <= x) {
        i++;
    }
    return i - 1;
}

// 阶乘

function Factorial(num) {
    let result = 1;

    while (num) {
        result *= num;
        num--;
    }
    return result;
}

// console.log(Sqrt(36)); // 6
console.log(Factorial(5)); // 