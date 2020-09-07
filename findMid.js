/*
 * @@Description: 二分查找&折半查找
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-31 11:19:55
 * @LastEditTime: 2020-08-31 14:01:11
 * @LastEditors: i.mengxh@gmail.com
 */

/**
 * 有序的二分查找，返回-1或存在的数组下标。不使用递归实现。
 * @param target
 * @param arr
 * @returns {*}
 */
function binarySearch(target, arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (target == arr[mid]) {
            return mid;
        } else if (target > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(6, arr));