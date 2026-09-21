/**
 * 最近使用队列
 * 难度：★★☆☆☆
 * MRUQueue(n) 初始为 [1..n]。fetch(k) 返回第 k 个元素（从 1 开始），并把该元素移到队尾，表示它刚刚被使用。
 *
 * 示例：n=8。fetch(3)=3，fetch(5)=6，fetch(2)=2，fetch(8)=2
 *
 * 思路：数组保存当前顺序，按下标取出后 splice 到末尾。
 * 时间每次 O(n)，空间 O(n)
 */

export class MRUQueue {
  private readonly data: number[];

  constructor(n: number) {
    this.data = Array.from({ length: n }, (_, index) => index + 1);
  }

  fetch(k: number): number {
    const index = k - 1;
    const [value] = this.data.splice(index, 1);
    this.data.push(value);
    return value;
  }
}

const recent = new MRUQueue(8);
console.log([recent.fetch(3), recent.fetch(5), recent.fetch(2), recent.fetch(8)]);
