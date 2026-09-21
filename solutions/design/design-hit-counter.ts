/**
 * 敲击计数器
 * 难度：★★☆☆☆
 * HitCounter：hit 记录一次敲击，getHits 返回过去 300 秒（含当前时刻、不含 timestamp-300）内的敲击次数。
 *
 * 示例：hit(1), hit(2), hit(3), getHits(4)=3, hit(300), getHits(300)=4, getHits(301)=3
 *
 * 思路：队列按时间保存敲击，查询前弹出已过期的记录。
 * 时间均摊 O(1)，空间 O(300 秒内的敲击数)
 */

export class HitCounter {
  private readonly hits: number[] = [];

  hit(timestamp: number): void {
    this.hits.push(timestamp);
  }

  getHits(timestamp: number): number {
    const earliest = timestamp - 299;
    let start = 0;
    while (start < this.hits.length && this.hits[start] < earliest) {
      start += 1;
    }
    if (start > 0) {
      this.hits.splice(0, start);
    }
    return this.hits.length;
  }
}

const counter = new HitCounter();
counter.hit(1);
counter.hit(2);
counter.hit(3);
const hitsAt4 = counter.getHits(4);
counter.hit(300);
console.log([hitsAt4, counter.getHits(300), counter.getHits(301)]);
