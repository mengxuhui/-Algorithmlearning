/*
 * @@Description: 二叉树的遍历方式
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-29 09:32:22
 * @LastEditTime: 2020-07-29 09:47:59
 * @LastEditors: i.mengxh@gmail.com
 */
// 先定义一棵树。node1是根节点。

function Node(val) {
    this.left = this.right = null;
    this.val = val;
}
//     1
//    /\
//   2  3
//  /\  /\
// 4 5 6  7

const node4 = { left: null, right: null, val: 4 };
const node5 = { left: null, right: null, val: 5 };
const node6 = { left: null, right: null, val: 6 };
const node7 = { left: null, right: null, val: 7 };
const node3 = { left: node6, right: node7, val: 3 };
const node2 = { left: node4, right: node5, val: 2 };
const node1 = { left: node2, right: node3, val: 1 };
/**
 * 什么是前中后序遍历？
 * 以一个根节点带两个叶子节点举例。　根据访问的顺序,根节点在前面就是前序（根左右），在中间就是中序（左根右），在后面就是后续（左右根）。
 * 四种主要的遍历思想为：
 * 前序遍历：根结点 ---> 左子树 ---> 右子树
 * 中序遍历：左子树---> 根结点 ---> 右子树
 * 后序遍历：左子树 ---> 右子树 ---> 根结点
 * 层次遍历：只需按层次遍历即可
 */

// 1. 前序遍历
function preorderTraversal(root) {
    if (!root) {
        return 'tree is empty';
    }
    console.log(root.val);
    const left = root.left;
    const right = root.right;
    left && preorderTraversal(left);

    right && preorderTraversal(right);
}

// 2. 中序遍历
function middleTraversal(root) {
    if (!root) return 'tree is empty';
    const left = root.left;
    const right = root.right;
    left && middleTraversal(left);
    console.log(root.val);
    right && middleTraversal(right);
}

// 3. 后续遍历

function endTraversal(root) {
    if (!root) return 'tree is empty';
    const left = root.left;
    const right = root.right;
    left && middleTraversal(left);
    right && middleTraversal(right);
    console.log(root.val);
}

// preorderTraversal(node1); // 1 2 4 5 3 6 7 
// middleTraversal(node1); // 4 2 5 1 6 3 7
endTraversal(node1); // 4 5 2 6 7 3 1