/*
 * @@Description: 宏任务和微任务
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-10 09:25:50
 * @LastEditTime: 2020-08-10 09:31:56
 * @LastEditors: i.mengxh@gmail.com
 */

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log('0000');
        Promise.resolve().then(() => {
            console.log(`promise${i}`);
        });
    }, 0);
}
