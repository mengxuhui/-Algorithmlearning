/*
 * @@Description: 斐波那契数列
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-08-03 10:27:02
 * @LastEditTime: 2020-09-03 19:25:17
 * @LastEditors: i.mengxh@gmail.com
 */
// 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项。斐波那契数列的定义如下：

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

function Fib(n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    let rest1 = 0, rest2 = 1;
    for (let i = 1; i < n; i++) {
        let t = rest1;
        rest1 = rest2;
        rest2 = (t + rest2) % 1000000007;
    }

    return rest2;
}


// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
// 答案需要取模 1e9 + 7（1000000007），如计算初始结果为：1000000008，请返回 1。
// 解题思路
// 当青蛙处于0层和1层台阶时，有一种走法，可先判断
// 动态规划的方程是 dp[i] = dp[i - 1] + dp[i - 2]
// 注意需要进行取余数
/**
 * @param {number} n
 * @return {number}
 */
let numWays = function (n) {
    if (n <= 1) return 1;
    let dp = [1, 1, 2];
    const Max = 1e9 + 7;
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % Max;
    }
    return dp[n];
};


let fibobacci = (function () {
    let memory = [];
    return function (n) {
        if (memory[n] !== undefined) {
            return memory[n];
        }
        return memory[n] = (n === 0 || n === 1) ? n : fibobacci(n - 1) + fibobacci(n - 2)
    };
})();


console.log(Fib(10)); // 55 
console.log(numWays(2)); // 55 