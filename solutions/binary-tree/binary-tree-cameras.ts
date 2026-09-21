/**
 * 监控二叉树
 * 难度：★★★★☆
 * 摄像头装在结点上，可以监视自身、父结点和子结点。返回覆盖整棵树所需的最少摄像头。
 *
 * 示例：[0,0,null,0,0] => 1；[0,0,null,0,null,0,null,null,0] => 2
 *
 * 思路：后序贪心。0 表示未被覆盖，1 表示装了摄像头，2 表示已被覆盖。孩子有 0 就在当前装摄像头；孩子有 1 则当前已被覆盖；否则当前还需要父结点来覆盖。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export function minCameraCover(root: TreeNode | null): number {
  let cameras = 0;
  const walk = (node: TreeNode | null): number => {
    if (!node) {
      return 2;
    }
    const left = walk(node.left);
    const right = walk(node.right);
    if (left === 0 || right === 0) {
      cameras += 1;
      return 1;
    }
    if (left === 1 || right === 1) {
      return 2;
    }
    return 0;
  };
  if (walk(root) === 0) {
    cameras += 1;
  }
  return cameras;
}

const first = new TreeNode(0, new TreeNode(0, new TreeNode(0), new TreeNode(0)));
const second = new TreeNode(
  0,
  new TreeNode(0, new TreeNode(0, new TreeNode(0, null, new TreeNode(0)))),
);
console.log(minCameraCover(first));
console.log(minCameraCover(second));
