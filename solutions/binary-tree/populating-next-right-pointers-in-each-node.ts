/**
 * 填充每个节点的下一个右侧节点指针
 * 难度：★★☆☆☆
 * 完美二叉树中，把每个结点的 next 指向同一层右侧结点。
 *
 * 示例：1 的左右是 2 和 3，2 的左右是 4 和 5。连接后 2.next 为 3，4.next 为 5。
 *
 * 思路：利用上一层已经连好的 next，把下一层的左右孩子串起来。不使用额外队列。
 * 时间 O(n)，空间 O(1)
 */

class Node {
  val: number;
  left: Node | null;
  right: Node | null;
  next: Node | null;

  constructor(
    val = 0,
    left: Node | null = null,
    right: Node | null = null,
    next: Node | null = null,
  ) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
  }
}

export function connect(root: Node | null): Node | null {
  let level = root;
  while (level?.left) {
    let current: Node | null = level;
    while (current) {
      if (current.left) {
        current.left.next = current.right;
      }
      if (current.right && current.next) {
        current.right.next = current.next.left;
      }
      current = current.next;
    }
    level = level.left;
  }
  return root;
}

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, new Node(6), new Node(7)),
);
connect(root);
console.log([root.left?.next?.val ?? null, root.left?.left?.next?.val ?? null]);
