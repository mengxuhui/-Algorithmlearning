/*
 * @@Description: 版本号进行排序
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-06 09:32:07
 * @LastEditTime: 2020-09-07 15:17:10
 * @LastEditors: i.mengxh@gmail.com
 */

const arr = ['0.1.1', '2.3.3', '0.3002.1', '4.2', '4.3.5', '4.3.4.5'];

function versionSort(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });

    return arr;
}

console.log(versionSort(arr));