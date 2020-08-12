/*
 * @@Description: 宏任务和微任务
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-10 09:25:50
 * @LastEditTime: 2020-08-10 09:31:56
 * @LastEditors: i.mengxh@gmail.com
 */
// 结论在node端setTimeout全部执行完成才会执行promise，在浏览器端一次setTimeout一次微任务
for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log('0000');
        Promise.resolve().then(() => {
            console.log(`promise${i}`);
        });
    }, 0);
}
