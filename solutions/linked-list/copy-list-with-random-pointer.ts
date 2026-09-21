/**
 * 复制带随机指针的链表
 * 难度：★★★☆☆
 * 深拷贝含 random 指针的链表。
 *
 * 思路：哈希映射旧节点到新节点，两次遍历。
 * 时间 O(n)，空间 O(n)
 */

export class Node {
  val: number;
  next: Node | null;
  random: Node | null;

  constructor(val?: number, next?: Node | null, random?: Node | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
    this.random = random ?? null;
  }
}

export function copyRandomList(head: Node | null): Node | null {
  if (!head) return null;

  const map = new Map<Node, Node>();
  let current: Node | null = head;
  while (current) {
    map.set(current, new Node(current.val));
    current = current.next;
  }

  current = head;
  while (current) {
    const copy = map.get(current)!;
    copy.next = current.next ? map.get(current.next)! : null;
    copy.random = current.random ? map.get(current.random)! : null;
    current = current.next;
  }

  return map.get(head)!;
}

const n1 = new Node(7);
const n2 = new Node(13);
const n3 = new Node(11);
n1.next = n2;
n2.next = n3;
n2.random = n1;
n3.random = n2;
const copied = copyRandomList(n1);
console.log(copied?.val, copied?.next?.val, copied?.next?.random?.val);
