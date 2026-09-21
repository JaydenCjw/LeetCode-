/**
 * 填充每个节点的下一个右侧节点指针 II
 * 难度：★★★☆☆
 * 二叉树不一定完美。把每个结点的 next 指向同一层右侧的下一个结点。
 *
 * 示例：[1,2,3,4,5,null,7] 中 5.next 为 7
 *
 * 思路：用哑结点串起下一层。遍历当前层时，把非空的左、右孩子依次接到哑结点后面。
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
  let current = root;
  while (current) {
    const dummy = new Node(0);
    let tail = dummy;
    while (current) {
      if (current.left) {
        tail.next = current.left;
        tail = current.left;
      }
      if (current.right) {
        tail.next = current.right;
        tail = current.right;
      }
      current = current.next;
    }
    current = dummy.next;
  }
  return root;
}

const root = new Node(
  1,
  new Node(2, new Node(4), new Node(5)),
  new Node(3, null, new Node(7)),
);
connect(root);
console.log(root.left?.right?.next?.val ?? null);
