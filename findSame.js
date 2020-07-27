/*
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-27 18:07:17
 * @LastEditTime: 2020-07-27 18:31:13
 * @LastEditors: i.mengxh@gmail.com
 */
/*
 * @@Description: 从一个数组中找到重复元素
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-27 18:07:17
 * @LastEditTime: 2020-07-27 18:21:24
 * @LastEditors: i.mengxh@gmail.com
 */
/**
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，
 * 也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 */

/**
 * @description: hash表注意到只要判断数字是否重复，不用关系数字的顺序，只需要hash表存储之前遍历的，如果后续遍历已经在hash表上，就返回
 * @param {type} arr: Array
 * @return: num
 * @author: i.mengxh@gmail.com
 */

function findSameTemp(arr) {
    let map = {};
    for (let i = 0, j = arr.length; i < j; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            return arr[i];
        }
    }
}

console.log(findSameTemp([1, 3, 2, 'r', 5, 7, 9, 'a', 'a']));