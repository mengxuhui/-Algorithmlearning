/*
 * @@Description:二进制求和
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-27 09:39:45
 * @LastEditTime: 2020-07-27 09:44:25
 * @LastEditors: i.mengxh@gmail.com
 */

/*
思路：逐位相加
先让 a 和 b 对齐，补齐前面的0
从右往左，逐位相加，用 carry 变量记录是否 进1
每一位的计算结果放到 res 数组里，最后转成字符串
*/

const addBinary = (a, b) => {
    while (a.length > b.length) b = '0' + b;
    while (a.length < b.length) a = '0' + a; // 先对齐
    let res = new Array(a.length);
    let sum = 0;
    let carry = 0; // 进位
    for (let i = a.length - 1; i >= 0; i--) {
        sum = Number(a[i]) + Number(b[i]) + carry;
        if (sum >= 2) {
            res[i] = sum - 2;
            carry = 1;
        } else {
            res[i] = sum;
            carry = 0;
        }
    }
    if (carry) res.unshift(1); // 循环结束还要进1，则在res数组前端加一个1
    return res.join('');
};

console.log(addBinary('10101', '101'));