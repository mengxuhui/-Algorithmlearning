/*
 * @@Description: 插入排序
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-06 09:59:40
 * @LastEditTime: 2020-08-06 10:07:07
 * @LastEditors: i.mengxh@gmail.com
 */

// 一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：
// 从第一个元素开始，该元素可以认为已经被排序；
// 取出下一个元素，在已经排序的元素序列中从后向前扫描；
// 如果该元素（已排序）大于新元素，将该元素移到下一位置；
// 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
// 将新元素插入到该位置后；
// 重复步骤2~5。

const arr = [5, 2, 4, 8, 7, 1, 3, 9];

function insertSort(arr) {
    let len = arr.length;
    let preIndex, current;

    for (let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}

console.log(insertSort(arr));