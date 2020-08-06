/*
 * @@Description: 
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-24 11:49:38
 * @LastEditTime: 2020-08-05 14:14:18
 * @LastEditors: i.mengxh@gmail.com
 */
/* 快速排序
 * @Author: i.mengxh@gmail.com 
 * @Date: 2020-07-22 11:01:42 
 * @Last Modified by: i.mengxh@gmail.com
 * @Last Modified time: 2020-07-22 11:23:54
 */

function QuicklySort(arr) {
    if (arr.length <= 1) { return arr; }
    let mid = Math.floor(arr.length / 2); // 目标元素
    let pivot = arr.splice(mid, 1)[0];
    let right = [], left = [];
    for (let i = 0, j = arr.length; i < j; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }
    return QuicklySort(left).concat([pivot], QuicklySort(right));
}


function quicklySortOne(arr) {
    if (arr.length <= 1) { return arr; }
    let left = [], right = [];
    let mid = Math.floor(arr.length / 2);
    let midArr = arr.splice(mid, 1)[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < midArr) {
            left.push(arr[i]);
        } else if (arr[i] > midArr) {
            right.push(arr[i]);
        }
    }
    return quicklySortOne(left).concat([midArr], QuicklySort(right));
}

console.log(quicklySortOne([1, 8, 3, 9, 10, 4]));
