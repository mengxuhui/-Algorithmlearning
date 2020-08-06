/*
 * @@Description: 选择排序
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-05 10:12:31
 * @LastEditTime: 2020-08-05 10:24:09
 * @LastEditors: i.mengxh@gmail.com
 */

let arr = [3, 6, 9, 8, 2, 5, 1, 4, 7];

function selectSort(arr) {
    const len = arr.length;
    let min, temp;
    console.time('选择排序耗时');
    for (let i = 0; i < len - 1; i++) {
        min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    console.timeEnd('选择排序耗时');
    return arr;

}

console.log(selectSort(arr));