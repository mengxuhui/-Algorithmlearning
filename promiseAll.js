/*
 * @@Description: 实现一个promiseAll
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-09-01 17:38:13
 * @LastEditTime: 2020-09-01 17:52:20
 * @LastEditors: i.mengxh@gmail.com
 */

function isPromise(item) {
    return (item && typeof item === 'object' || typeof obj === 'function') && typeof item.then == 'function';
}

function myPromiseAll(arr) {
    let request = [];
    return new Promise((resolve, reject) => {
        arr.map((item, idx) => {
            if (isPromise(item)) {
                item.then((result) => {
                    request[idx] = result;
                    if (request.length === arr.length) {
                        resolve(request);
                    }
                }).catch(err => reject(err));
            } else {
                request[idx] = item;
            }
        });
    });
}

let p1 = Promise.resolve(3);
let p2 = 1337;
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
    //foo 附加参数，一旦定时器到期，它们会作为参数传递给function
});

myPromiseAll([p1, p2, p3]).then(result => {
    console.log(result);
});