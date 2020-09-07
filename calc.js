/*
 * @@Description:  实现一个 calc 方法,可以将输入的数拆解为尽可能多的乘数，所有数相乘等于输入数。
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-24 10:17:13
 * @LastEditTime: 2020-08-24 10:27:06
 * @LastEditors: i.mengxh@gmail.com
 */
/**
 * @description: 以将输入的数拆解为尽可能多的乘数，所有数相乘等于输入数。
 * @param {number} num 乘积
 * @return {Array} 拆解后的乘数
 * @author: i.mengxh@gmail.com
 */

function calc(num) {
    let arr = [];
    let i = 2;
    while (i <= num) {
        if (num % i === 0) {
            arr.push(i);
            num /= i;
        } else {
            i++;
        }
    }
    return arr;
}

console.log(calc(8)); // [2, 2, 2]