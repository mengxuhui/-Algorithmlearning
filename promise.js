/*
 * @@Description: 实现promise的链式调用
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-17 19:44:12
 * @LastEditTime: 2020-08-17 19:54:04
 * @LastEditors: i.mengxh@gmail.com
 */
function Promise(excutor) {
    let self = this;
    self.onResolvedCallback = []; // Promise resolve时的回调函数集
    // 传递给Promise处理函数的resolve
    // 这里直接往实例上挂个data  
    // 然后把onResolvedCallback数组里的函数依次执行一遍就可以
    function resolve(value) {
        // 注意promise的then函数需要异步执行 
        setTimeout(() => {
            self.data = value;
            self.onResolvedCallback.forEach(callback => callback(value));
        });
    }
    // 执行用户传入的函数
    excutor(resolve.bind(self));
}

Promise.prototype.then = function (onResolved) {
    // 保存上下文，哪个promise调用的then，就指向哪个promise。
    let self = this;
    // 一定要返回一个新的promise
    // promise2
    return new Promise(resolve => {
        self.onResolvedCallback.push(function () {
            let result = onResolved(self.data);
            if (result instanceof Promise) {
                // resolve的权力被交给了user promise
                result.then(resolve);
            } else {
                resolve(result);
            }
        });
    });
};



