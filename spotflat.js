/*
 * @@Description:数组压平
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-31 09:53:56
 * @LastEditTime: 2020-07-31 10:10:55
 * @LastEditors: i.mengxh@gmail.com
 */
/** 
 * 思路，循环数组，遇到元素是数组继续递归最终放入到新的数组中
 * 
 */

function flatFun(arr) {
    let newArr = []; // 新数组
    if (!Array.isArray(arr)) {
        return [];
    }

    const check = (data) => {
        data.map((item) => {
            if (Array.isArray(item)) {
                check(item);
            } else {
                newArr.push(item);
            }
        });
    };
    check(arr);
    return newArr;
}

// 利用concat的方法,但是只能展示二位数组，三维数组会有问题
function flatten2d(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result = result.concat(arr[i]);
    }
    return result;
}




console.log(flatten([1, 2, 3, 3, [4, 5, 6, 8, [4, 5, 6]]])); //  [ 1, 2, 3, 3, 4, 5, 6, 8, [ 4, 5, 6 ] ]