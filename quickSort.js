/* 快速排序
 * @Author: i.mengxh@gmail.com 
 * @Date: 2020-07-22 11:01:42 
 * @Last Modified by: i.mengxh@gmail.com
 * @Last Modified time: 2020-07-22 11:23:54
 */

function QuicklySort(arr) {
    if (arr.length <= 1) { return arr; }
    let mid = Math.floor(arr.length / 2); // 目标元素
    var pivot = arr.splice(mid, 1)[0];
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

console.log(QuicklySort([1, 8, 3, 9, 10, 4]))
