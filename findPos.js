/*
 * @@Description: 
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-24 11:49:38
 * @LastEditTime: 2020-07-24 16:36:13
 * @LastEditors: i.mengxh@gmail.com
 */
/* 找出两个数相加的值为target
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-22 09:52:49
 * @Last Modified by: i.mengxh@gmail.com
 * @Last Modified time: 2020-07-22 11:16:15
 */

function findPostion(arr, target) {
    let len = arr.length;
    let start = 0, end = len - 1;
    while (start < end) {
        if (arr[start] + arr[end] > target) {
            end--;
        } else if (arr[start] + arr[end] < target) {
            start++;
        } else {
            console.log(start, end);
            return [start, end];
        }
    }
}

console.log(findPostion([1, 2, 3, 4, 7, 8, 9, 11], 11));