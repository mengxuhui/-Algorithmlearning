/*
 * @@Description: 防抖和节流
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-31 09:23:31
 * @LastEditTime: 2020-09-02 14:11:23
 * @LastEditors: i.mengxh@gmail.com
 */
// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
function debounce(fn, delay) {
    return (args) => {
        let instance = this;
        let _args = args;
        clearTimeout(fn.id);
        fn.id = setTimeout(() => {
            fn.apply(instance, _args);
        }, delay);
    };
}

// 节流：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
function thottle(fun, delay) {
    let last, timer;
    return (args) => {
        let that = this;
        let _args = args;
        let now = +new Date();
        if (last && now < delay + last) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                last = now;
                fun.apply(that, _args);
            }, delay);
        } else {
            last = now;
            fun.apply(that, _args);
        }
    };
}
let biu = function () {
    console.log('biu biu biu');
};

let boom = function () {
    console.log('boom boom boom');
};


setInterval(debounce(biu, 500), 1000);
setInterval(debounce(boom, 2000), 1000);


// 结合应用场景
// debounce
// search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
// window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次

// throttle
// 鼠标不断点击触发，mousedown(单位时间内只触发一次)
// 监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断