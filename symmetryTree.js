/*
 * @@Description: 判断树是否是对称二叉树
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-27 11:41:41
 * @LastEditTime: 2020-07-27 11:50:10
 * @LastEditors: i.mengxh@gmail.com
 */
/*
思路
左子树和右子树镜像对称，则这个树是对称的。那，两个树什么情况下互为镜像？
它们的根节点具有相同的值
每个树的右子树，和另一个树的左子树镜像对称
1、递归法
递归主要确定2点
递归的子问题
递归的结束条件
*/
let isSymmetric = function (root) {
    const check = (left, right) => {   // 参数接收左右子树
        if (!left && !right) return true; // 左右子树都不存在 也是对称的 
        if (left && right) {             // 左右子树都存在，要继续判断
            return left.val === right.val &&   // 左右子树的顶点值要相等
                check(left.left, right.right) && // 左子树的left和右子树的right相等
                check(left.right, right.left);    // 左子树的right和右子树的left相等
        }
        return false;  // 左右子树中的一个不存在，一个存在，不是对称的
    };
    return !root || check(root.left, root.right); // root为null也是对称的
    // 不满足则调用check判断左右子树
};