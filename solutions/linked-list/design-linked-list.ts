/**
 * 设计链表
 * 难度：★★☆☆☆
 * 实现单链表：按下标取值、头插、尾插、按下标插入和删除。下标非法时取值返回 -1，插入和删除直接忽略。
 *
 * 示例：addAtHead(1)、addAtTail(3)、addAtIndex(1,2)、get(1)、deleteAtIndex(1)、get(1)
 * => 依次得到 2 和 3
 *
 * 思路：哑结点统一头尾操作，用 size 判断下标是否合法。
 * 单次操作时间 O(n)，空间 O(n)
 */

import { ListNode } from "@/types";

export class MyLinkedList {
  private readonly dummy = new ListNode(0);
  private size = 0;

  private nodeBefore(index: number): ListNode {
    let current = this.dummy;
    for (let i = 0; i < index; i += 1) {
      current = current.next ?? current;
    }
    return current;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1;
    }
    return this.nodeBefore(index).next?.val ?? -1;
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.size, val);
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) {
      return;
    }
    const prev = this.nodeBefore(index);
    prev.next = new ListNode(val, prev.next);
    this.size += 1;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return;
    }
    const prev = this.nodeBefore(index);
    prev.next = prev.next?.next ?? null;
    this.size -= 1;
  }
}

const list = new MyLinkedList();
list.addAtHead(1);
list.addAtTail(3);
list.addAtIndex(1, 2);
const first = list.get(1);
list.deleteAtIndex(1);
const second = list.get(1);
console.log([first, second]);
