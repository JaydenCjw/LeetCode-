/**
 * 二叉搜索树迭代器
 * 难度：★★☆☆☆
 * 实现 next 与 hasNext，按中序依次返回下一个最小值。
 *
 * 示例：树 [7,3,15,null,null,9,20]，依次 next 得到 [3,7,9,15,20]
 *
 * 思路：栈模拟中序，始终把左链压栈。next 弹出栈顶，再把它的右子树左链压入。
 * 均摊每次 next 时间 O(1)，空间 O(h)
 */

import { TreeNode } from "@/types";

export class BSTIterator {
  private readonly stack: TreeNode[] = [];

  constructor(root: TreeNode | null) {
    this.pushLeft(root);
  }

  private pushLeft(node: TreeNode | null): void {
    while (node) {
      this.stack.push(node);
      node = node.left;
    }
  }

  next(): number {
    const node = this.stack.pop();
    if (!node) {
      return 0;
    }
    this.pushLeft(node.right);
    return node.val;
  }

  hasNext(): boolean {
    return this.stack.length > 0;
  }
}

const root = new TreeNode(
  7,
  new TreeNode(3),
  new TreeNode(15, new TreeNode(9), new TreeNode(20)),
);
const iterator = new BSTIterator(root);
const order: number[] = [];
while (iterator.hasNext()) {
  order.push(iterator.next());
}
console.log(order);
