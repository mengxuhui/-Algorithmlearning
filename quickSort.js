/*
 * @@Description: 
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-24 11:49:38
 * @LastEditTime: 2020-08-10 10:25:35
 * @LastEditors: i.mengxh@gmail.com
 */
/* 快速排序
 * @Author: i.mengxh@gmail.com 
 * @Date: 2020-07-22 11:01:42 
 * @Last Modified by: i.mengxh@gmail.com
 * @Last Modified time: 2020-07-22 11:23:54
 */
// "快速排序"的思想很简单，整个排序过程只需要三步：
/**
*  （1）在数据集之中，选择一个元素作为"基准"（pivot）。
* 　（2）所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边。
* 　（3）对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。
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
    let len = arr.length;
    let left = [], right = [];
    let mid = Math.floor(len / 2); // 选择的基准一般是中间元素
    let pivot = arr.splice(mid, 1)[0];
    for (let i = 0; i < len; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        }
    }
    return quicklySortOne(left).concat([pivot], quicklySortOne(right));
}


console.log(quicklySortOne([1, 8, 3, 9, 10, 4]));
