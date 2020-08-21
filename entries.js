/*
 * @@Description: Object.entries()的使用 返回一个数组，其元素是与直接找到的可枚举属性键值对相对应的数组。属性的顺序与通过手动循环对象的属性值所给出的顺序相同。
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-12 15:43:59
 * @LastEditTime: 2020-08-12 15:58:15
 * @LastEditors: i.mengxh@gmail.com
 */

let obj = { a: 1, b: 2, c: 3, d: 4 };

console.log(Object.entries(obj));// [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]

// 作用将一个对象转换成Map

const newMap = new Map(Object.entries(obj)); // Map { 'a' => 1, 'b' => 2, 'c' => 3, 'd' => 4 }
console.log(newMap);

console.log(Object.values(obj));// [1, 2, 3, 4]
console.log(Object.getOwnPropertyDescriptors(obj));

// {
//     a:
//     { value: 1, writable: true, enumerable: true, configurable: true },
//     b:
//     { value: 2, writable: true, enumerable: true, configurable: true },
//     c:
//     { value: 3, writable: true, enumerable: true, configurable: true },
//     d:
//     { value: 4, writable: true, enumerable: true, configurable: true }
// }