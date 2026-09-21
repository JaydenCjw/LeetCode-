/**
 * 用队列实现栈
 * 难度：★★☆☆☆
 * 仅用队列实现栈的 push / pop / top / empty。
 *
 * 思路：单队列，每次 push 后把前面元素轮转到后面。
 * 时间 push O(n)，其余 O(1)
 */

export class MyStack {
  private readonly queue: number[] = [];

  push(x: number): void {
    const size = this.queue.length;
    this.queue.push(x);
    for (let i = 0; i < size; i++) {
      this.queue.push(this.queue.shift()!);
    }
  }

  pop(): number {
    return this.queue.shift()!;
  }

  top(): number {
    return this.queue[0];
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}

const stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top());
console.log(stack.pop());
console.log(stack.empty());
