/**
 * 股票价格跨度
 * 难度：★★☆☆☆
 * 连续调用 next(price)，返回今日价格小于等于今天的连续天数。
 *
 * 思路：单调递减栈保存 [价格, 跨度]。
 * 时间均摊 O(1)，空间 O(n)
 */

export class StockSpanner {
  private readonly stack: Array<[number, number]> = [];

  next(price: number): number {
    let span = 1;
    while (this.stack.length > 0 && this.stack[this.stack.length - 1][0] <= price) {
      span += this.stack.pop()![1];
    }
    this.stack.push([price, span]);
    return span;
  }
}

const spanner = new StockSpanner();
console.log([100, 80, 60, 70, 60, 75, 85].map((price) => spanner.next(price)));
