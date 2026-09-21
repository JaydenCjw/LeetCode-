/**
 * 设计循环队列
 * 难度：★★★☆☆
 * 实现 MyCircularQueue：enQueue / deQueue / Front / Rear / isEmpty / isFull。
 *
 * 思路：数组 + head/tail/size。
 * 时间每操作 O(1)，空间 O(k)
 */

export class MyCircularQueue {
  private readonly data: number[];
  private head = 0;
  private tail = 0;
  private size = 0;

  constructor(k: number) {
    this.data = new Array<number>(k);
  }

  enQueue(value: number): boolean {
    if (this.isFull()) return false;
    this.data[this.tail] = value;
    this.tail = (this.tail + 1) % this.data.length;
    this.size++;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) return false;
    this.head = (this.head + 1) % this.data.length;
    this.size--;
    return true;
  }

  Front(): number {
    return this.isEmpty() ? -1 : this.data[this.head];
  }

  Rear(): number {
    if (this.isEmpty()) return -1;
    const index = (this.tail - 1 + this.data.length) % this.data.length;
    return this.data[index];
  }

  isEmpty(): boolean {
    return this.size === 0;
  }

  isFull(): boolean {
    return this.size === this.data.length;
  }
}

const q = new MyCircularQueue(3);
console.log(q.enQueue(1), q.enQueue(2), q.enQueue(3), q.enQueue(4));
console.log(q.Rear(), q.isFull(), q.deQueue(), q.enQueue(4), q.Rear());
