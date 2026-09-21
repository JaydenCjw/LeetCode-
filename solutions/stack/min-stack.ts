/**
 * 最小栈
 * 难度：★★☆☆☆
 * 设计支持 push / pop / top / getMin 的栈，getMin 要求 O(1)。
 *
 * 思路：辅助栈同步维护当前最小值。
 * 时间每个操作 O(1)，空间 O(n)
 */

export class MinStack {
  private readonly values: number[] = [];
  private readonly mins: number[] = [];

  push(val: number): void {
    this.values.push(val);
    const currentMin = this.mins.length === 0 ? val : Math.min(val, this.mins[this.mins.length - 1]);
    this.mins.push(currentMin);
  }

  pop(): void {
    this.values.pop();
    this.mins.pop();
  }

  top(): number {
    return this.values[this.values.length - 1];
  }

  getMin(): number {
    return this.mins[this.mins.length - 1];
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());
