/*
 * @@Description: 转换字符串的首字母为大写，其余的为小写
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-07 09:30:17
 * @LastEditTime: 2020-08-07 09:36:19
 * @LastEditors: i.mengxh@gmail.com
 */

let str = 'hello Javascript!! i love it';

function titleCase(str) {
    let strArr = str.split(' ');
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
    }
    return strArr.join(" ");
}

console.log(titleCase(str));