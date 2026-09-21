/**
 * 最大栈
 * 难度：★★★★☆
 * MaxStack：push、pop、top 与普通栈相同；peekMax 查看最大值，popMax 弹出最近压入的最大值（栈中可能有重复）。
 *
 * 示例：push(5), push(1), push(5)。top=5，popMax=5（去掉最上面的 5），top=1，peekMax=5，pop=1，top=5
 *
 * 思路：数组保存栈。popMax 从右向左找到第一个最大值并删除，其余元素顺序不变。
 * 时间 push/pop/top O(1)，peekMax/popMax O(n)，空间 O(n)
 */

export class MaxStack {
  private readonly data: number[] = [];

  push(x: number): void {
    this.data.push(x);
  }

  pop(): number {
    const value = this.data.pop();
    return value === undefined ? 0 : value;
  }

  top(): number {
    return this.data[this.data.length - 1];
  }

  peekMax(): number {
    let best = this.data[0];
    for (const value of this.data) {
      if (value > best) {
        best = value;
      }
    }
    return best;
  }

  popMax(): number {
    let index = 0;
    for (let i = 1; i < this.data.length; i += 1) {
      if (this.data[i] >= this.data[index]) {
        index = i;
      }
    }
    const [value] = this.data.splice(index, 1);
    return value;
  }
}

const maxStack = new MaxStack();
maxStack.push(5);
maxStack.push(1);
maxStack.push(5);
const topFirst = maxStack.top();
const poppedMax = maxStack.popMax();
const topSecond = maxStack.top();
const peeked = maxStack.peekMax();
const popped = maxStack.pop();
console.log([topFirst, poppedMax, topSecond, peeked, popped, maxStack.top()]);
