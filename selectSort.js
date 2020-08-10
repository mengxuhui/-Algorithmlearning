/*
 * @@Description: 选择排序
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-05 10:12:31
 * @LastEditTime: 2020-08-10 10:42:19
 * @LastEditors: i.mengxh@gmail.com
 */
// 找到数组最小的元素，将它和数组中第一个元素交换位置，接下来，在剩下的元素中找到最小的元素，
// 将它与数组的第二个元素交换位置，往复如此，直到将整个数组排序。基本点就是不断地选择剩余元素之中的最小者
let arr = [3, 6, 9, 8, 2, 5, 1, 4, 7];

function selectSort(arr) {
    // const len = arr.length;
    // let min, temp;
    // console.time('选择排序耗时');
    // for (let i = 0; i < len - 1; i++) {
    //     min = i;
    //     for (let j = i + 1; j < len; j++) {
    //         if (arr[j] < arr[min]) {
    //             min = j;
    //         }
    //     }
    //     temp = arr[i];
    //     arr[i] = arr[min];
    //     arr[min] = temp;
    // }
    // console.timeEnd('选择排序耗时');
    // return arr;

    let len = arr.length;
    for (let i = 0; i < len - 1; i++) { // 之所以是len-1,是因为到最后两个元素，交换位置整个数组就已经排序好了
        let minnum = arr[i];
        for (let j = i + 1; j < len; j++) { // j = i+1是把与自己比较的情况省略掉
            if (arr[j] < minnum) {
                let temp = minnum;
                minnum = arr[j];
                arr[j] = temp;
            }
        }
        arr[i] = minnum;
    }
    return arr;
}

console.log(selectSort(arr));