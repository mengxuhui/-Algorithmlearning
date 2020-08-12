/*
 * @@Description:  js 统计一个字符串出现频率最高的字母/数字
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-12 10:01:35
 * @LastEditTime: 2020-08-12 10:46:24
 * @LastEditors: i.mengxh@gmail.com
 */

let str = 'asdfghjklaqwertyuiopiaia';

function freq(str) {
    let result = {}; // 构造一个key-value的对象用来存储结果
    let strArr = [...str];
    strArr.forEach((item) => {
        if (result[item] == undefined) {
            result[item] = 1;
        } else {
            result[item]++;
        }
    });
    let max = -Infinity, k;
    for (let key in result) {
        if (result[key] > max) {
            max = result[key];
            k = key;
        }
    }
    return k;
}

function freq1(str) {
    const res = str.split('').reduce((accumulator, cur) => { accumulator[cur] ? accumulator[cur]++ : accumulator[cur] = 1; return accumulator; }, {});
    let max = -Infinity, k;
    for (let key in res) {
        if (res[key] > max) {
            max = res[key];
            k = key;
        }
    }
    return k;
}

// 求数组中的最大值
let arr = [23, 4, 5, 2, 4, 5, 6, 6, 71, -3];
function getMax(arr) {
    return Math.max.apply(this, arr);
}

function getMax1(arr) {
    let len = arr.length;
    let max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

function getMax2(arr) {
    // temp 初始值，或者计算结束后的返回值
    const max = arr.reduce((pre, cur) => pre > cur ? pre : cur, -Infinity);
    return max;
}

console.log("getMax", getMax(arr));
console.log("getMax1", getMax1(arr));
console.log("getMax2", getMax2(arr));
console.log("freq", freq(str));
console.log("freq1", freq1(str));