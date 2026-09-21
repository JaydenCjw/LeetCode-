/**
 * 二叉树的序列化与反序列化
 * 难度：★★★★☆
 * 把二叉树编码成字符串，并能还原成原来的树。
 *
 * 思路：前序遍历，空节点用 # 占位，逗号分隔。
 * 时间 O(n)，空间 O(n)
 */

import { TreeNode } from "@/types";

export class Codec {
  serialize(root: TreeNode | null): string {
    const parts: string[] = [];
    const dfs = (node: TreeNode | null): void => {
      if (!node) {
        parts.push("#");
        return;
      }
      parts.push(String(node.val));
      dfs(node.left);
      dfs(node.right);
    };
    dfs(root);
    return parts.join(",");
  }

  deserialize(data: string): TreeNode | null {
    const parts = data.split(",");
    let index = 0;
    const dfs = (): TreeNode | null => {
      const token = parts[index++];
      if (token === "#") {
        return null;
      }
      return new TreeNode(Number(token), dfs(), dfs());
    };
    return dfs();
  }
}

const codec = new Codec();
const tree = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
console.log(codec.serialize(codec.deserialize(codec.serialize(tree))));
