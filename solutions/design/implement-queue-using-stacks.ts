/**
 * 用栈实现队列
 * 仅用两个栈实现队列的 push / pop / peek / empty。
 *
 * 思路：入队进 inStack，出队时若 outStack 空则把 inStack 倒入。
 * 均摊时间 O(1)，空间 O(n)
 */

export class MyQueue {
  private readonly inStack: number[] = [];
  private readonly outStack: number[] = [];

  push(x: number): void {
    this.inStack.push(x);
  }

  pop(): number {
    this.moveIfNeeded();
    return this.outStack.pop()!;
  }

  peek(): number {
    this.moveIfNeeded();
    return this.outStack[this.outStack.length - 1];
  }

  empty(): boolean {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }

  private moveIfNeeded(): void {
    if (this.outStack.length > 0) {
      return;
    }
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop()!);
    }
  }
}

const queue = new MyQueue();
queue.push(1);
queue.push(2);
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.empty());
