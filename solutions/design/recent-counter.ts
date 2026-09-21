/**
 * 最近的请求次数
 * 难度：★☆☆☆☆
 * ping(t) 记录时刻 t 的请求，返回 [t-3000, t] 内的请求数。调用时间严格递增。
 *
 * 思路：队列弹出过期请求。
 * 时间均摊 O(1)，空间 O(n)
 */

export class RecentCounter {
  private readonly times: number[] = [];
  private head = 0;

  ping(t: number): number {
    this.times.push(t);
    while (this.times[this.head] < t - 3000) {
      this.head++;
    }
    return this.times.length - this.head;
  }
}

const counter = new RecentCounter();
console.log([1, 100, 3001, 3002].map((t) => counter.ping(t)));
