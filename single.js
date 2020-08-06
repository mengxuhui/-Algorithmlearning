/*
 * @@Description: 测试单线程
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-05 15:57:31
 * @LastEditTime: 2020-08-05 16:01:00
 * @LastEditors: i.mengxh@gmail.com
 */
const http = require('http');

function sleep(time) {

    const _exit = Date.now() + time * 1000;

    while (Date.now() < _exit) {

    }

    return;

}

const server = http.createServer(function (req, res) {

    sleep(10);

    res.end('server sleep 10s');

});

server.listen(10086);