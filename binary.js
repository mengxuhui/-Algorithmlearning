/*
 * @@Description:Binary tree
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-24 11:50:12
 * @LastEditTime: 2020-07-27 16:26:45
 * @LastEditors: i.mengxh@gmail.com
 */

function BinaryTree() {
    const Node = function (key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };

    let root = null;
    function insertNode(node, newNode) {
        if (newNode.key < node.key) { //没有左孩子，则新增左孩子
            if (node.left === null) {
                node.left = newNode;
            } else {
                insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                //如果有左孩子则递归算法实现插入右孩子节点
                insertNode(node.right, newNode);
            }
        }
    }
    // 插入新节点
    this.insert = function (key) {
        //创建节点
        let node = new Node(key);
        if (root === null) {//判断是否为根节点
            root = node;
        } else {
            // 不是根节点则新增节点
            insertNode(root, node);
        }
    };
}

//构建二叉树
let nodes = [6, 2, 3, 4, 9, 8, 7, 12, 1, 22];
let binaryTree = new BinaryTree();

nodes.forEach(function (key) {
    binaryTree.insert(key);
});

// 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。 说明: 叶子节点是指没有子节点的节点。

/*
解题思路
sum —— 从根节点到叶子节点的路径上的节点值相加的目标和
递归。转为判断：左、右子树（root.left、root.right）中能否找出和为 sum - root.val 的路径
每遍历一个节点，sum 就减去当前节点值，当遍历到叶子节点时，已经没有子节点了，如果 sum - 当前叶子节点值 == 0 ，就是找到了从根节点到叶子节点的和为 sum 的路径
时间复杂度：O(n)，每个节点被遍历一次
*/

const hasPathSum = (root, sum) => {

    if (root == null) {
        return false;
    }

    if (root.left == null && root.right === null) {
        return sum - root.val == 0; // 如果满足这个就返回true
    }

    return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};



