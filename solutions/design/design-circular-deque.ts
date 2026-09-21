/**
 * 设计循环双端队列
 * 难度：★★☆☆☆
 * MyCircularDeque：固定容量，支持头尾插入删除、取头尾、判空判满。
 *
 * 示例：容量 3。insertLast(1/2)=true, insertFront(3)=true, insertFront(4)=false, getRear()=2, isFull()=true, deleteLast()=true, insertFront(4)=true, getFront()=4
 *
 * 思路：数组加头指针和当前长度，下标取模。
 * 时间每操作 O(1)，空间 O(k)
 */

export class MyCircularDeque {
  private readonly data: number[];
  private readonly capacity: number;
  private front = 0;
  private size = 0;

  constructor(k: number) {
    this.capacity = k;
    this.data = Array.from({ length: k }, () => 0);
  }

  insertFront(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.front = (this.front - 1 + this.capacity) % this.capacity;
    this.data[this.front] = value;
    this.size += 1;
    return true;
  }

  insertLast(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    const index = (this.front + this.size) % this.capacity;
    this.data[index] = value;
    this.size += 1;
    return true;
  }

  deleteFront(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.front = (this.front + 1) % this.capacity;
    this.size -= 1;
    return true;
  }

  deleteLast(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.size -= 1;
    return true;
  }

  getFront(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.data[this.front];
  }

  getRear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.data[(this.front + this.size - 1) % this.capacity];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  isFull(): boolean {
    return this.size === this.capacity;
  }
}

const deque = new MyCircularDeque(3);
console.log([
  deque.insertLast(1),
  deque.insertLast(2),
  deque.insertFront(3),
  deque.insertFront(4),
  deque.getRear(),
  deque.isFull(),
  deque.deleteLast(),
  deque.insertFront(4),
  deque.getFront(),
]);
