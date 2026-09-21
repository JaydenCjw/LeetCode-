/**
 * 设计一个支持增量操作的栈
 * 难度：★★☆☆☆
 * CustomStack 有容量上限。push 满了则忽略，pop 为空返回 -1，increment(k, val) 给栈底的 k 个元素各加 val。
 *
 * 示例：容量 3，依次 push 1、push 2、pop、push 2、push 3、push 4、increment(5,100)、increment(2,100)、四次 pop
 * => [2,103,202,201,-1]
 *
 * 思路：数组模拟栈。增量直接改底部元素。
 * 单次操作时间 O(min(k, n))，空间 O(容量)
 */

export class CustomStack {
  private readonly data: number[] = [];
  private readonly maxSize: number;

  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  push(x: number): void {
    if (this.data.length < this.maxSize) {
      this.data.push(x);
    }
  }

  pop(): number {
    return this.data.pop() ?? -1;
  }

  increment(k: number, val: number): void {
    const limit = Math.min(k, this.data.length);
    for (let i = 0; i < limit; i += 1) {
      this.data[i] += val;
    }
  }
}

const stack = new CustomStack(3);
stack.push(1);
stack.push(2);
const popped = stack.pop();
stack.push(2);
stack.push(3);
stack.push(4);
stack.increment(5, 100);
stack.increment(2, 100);
console.log([popped, stack.pop(), stack.pop(), stack.pop(), stack.pop()]);
