/*
 * @@Description: 两个数组求交集
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-09-01 10:22:12
 * @LastEditTime: 2020-09-01 10:24:25
 * @LastEditors: i.mengxh@gmail.com
 */

function interSection(arr1, arr2) {
    let newArr = [];
    arr1.forEach(item => {
        if (arr2.includes(item)) {
            newArr.push(item);
        }
    });

    return newArr;
}
let list1 = [1, 2, 3, 4, 4, 5];
let list2 = [4, 4, 5, 6, 7, 8];
console.log(interSection(list1, list2));