/*
 * @@Description: 冒泡排序
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-05 09:28:33
 * @LastEditTime: 2020-08-10 10:50:38
 * @LastEditors: i.mengxh@gmail.com
 */

/** 
 * 1. 比较相邻的元素。如果第一个比第二个大，就交换它们两个；
 * 2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
 * 3. 针对所有的元素重复以上的步骤，除了最后一个；
 * 4. 重复步骤1~3，直到排序完成。
 */

let arr = [1, 5, 3, 2, 8, 6, 4, 9, 7];

function bubbleSort(arr) {
    let len = arr.length;
    // 第一个循环是比较的次数，总共的次数是: arr.length-1
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
// bubbleSort(arr);
console.log(bubbleSort(arr)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// 上面一共用到两个循环，一个i循环，一个j循环
// 简单说明一下两个循环的作用：
// i循环作用是控制数组内的元素一共要比较多少次
// j循环作用是控制相邻两个元素依次比较大小
// 当i = 0的时候，里面的循环第一次完全执行，当j = 0时判断arr[j]是否大于arr[j + 1]，
// 此时j = 0也就是判断arr的第0项是否大于arr的第1项，如果条件成立，则把arr第0项和arr第1项元素值进行互换，继续进行j的第二轮循环判断
// 如果条件不成立则不进行值互换，直接进行j的第二轮循环判断，这样就能够保证后面的元素值始终是较大的，然后等j循环全部执行后我们就能够把数组中元素值最大的元素给排序到数组的最后。
// 此时arr数组通过断点查看为arr = [ 1, 3, 2, 5, 6, 4, 8, 9 ];

// 当i = 1的时候，里面的循环再次完整执行，就会判断arr的第1项和arr的第2项的大小，
// 并把较大的元素排序到后面，此时由于i的上一轮循环已经把最大的元素排序到最后了，也就说我们没有必要再去比较数组的最后两项
// ，所以当i每多循环一次，j就可以少循环一次，这也是为什么j的循环条件设置为j < arr.length - 1 - i的原因，这样写可以减少浏览器解析次数，从而提高代码执行效率。

// 参考：https://segmentfault.com/a/1190000014175918