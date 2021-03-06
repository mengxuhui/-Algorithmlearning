/*
 * @@Description: 
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-24 11:49:38
 * @LastEditTime: 2020-08-04 10:24:28
 * @LastEditors: i.mengxh@gmail.com
 */
function getMax(arr) {
    let len = arr.length, max = -Infinity;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
        }
    }
    return max;
}

function getMin(arr) {
    let len = arr.length, min = Infinity;
    while (len--) {
        if (arr[len] < min) {
            min = arr[len];
        }
    }
    return min;
}

function getTemp(arr) {
    return arr.reduce((cur, value) => {
        return cur > value ? cur : value;
    });
}

// 折半查找是一种在有序数组中查找某一特定元素的搜索算法
function bsearch(arr, target) {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

console.log(getTemp([-1, -4, -7, -2, -19, -3, -8, 0, -1, 19, 3, 8, 6]));