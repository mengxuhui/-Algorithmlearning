/*
 * @@Description:
 * @Author: i.mengxh@gmail.com
 * @Date: 2020-07-24 16:55:52
 * @LastEditTime: 2020-07-24 17:00:59
 * @LastEditors: i.mengxh@gmail.com
 */
function minDepth(root) {
    if (root === null) return 0;
    if (!root.left && !root.right) return 1;// 当前节点为叶子节点时
    if (root.left && !root.right) return 1 + minDepth(root.left);// 只有一个字节点时 减枝
    if (!root.left && root.right) return 1 + minDepth(root.right);// 只有一个字节点时 减枝
    return 1 + Math.min(minDepth(root.left), minDepth(root.right)); // 存在两个字节点
}
