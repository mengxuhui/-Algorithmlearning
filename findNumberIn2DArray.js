/*
 * @@Description:二维数据查找
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-28 09:37:04
 * @LastEditTime: 2020-07-28 09:44:35
 * @LastEditors: i.mengxh@gmail.com
 */
/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 *示例:
 *
 *现有矩阵 matrix 如下：
 *
*[
*[1, 4,  7, 11, 15],
*[2, 5,  8, 12, 19],
*[3, 6,  9, 16, 22],
*[10, 13, 14, 17, 24],
*[18, 21, 23, 26, 30]
*]

给定 target = 5，返回 true。

给定 target = 20，返回 false。

 * @param {*} arr2d 
 * @param {*} target 
 */


function findNumberIn2DArray(matrix, target) {
    let row = 0, col = matrix[0].length - 1;
    while (row < matrix.length && col > 0) {
        let temp = matrix[row][col];
        if (temp < target) {
            row++;
        } else if (temp > target) {
            col--;
        } else {
            return true;
        }
    }
    return false;
}

const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
];
console.log(findNumberIn2DArray(matrix, 5)); // true