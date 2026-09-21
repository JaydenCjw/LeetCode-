/**
 * 股票价格波动
 * 难度：★★★☆☆
 * update 记录某时刻价格，current 返回最新时刻价格，maximum 和 minimum 返回当前记录中的最高、最低价。
 *
 * 示例：update(1,10)、update(2,5) 后 current 为 5、maximum 为 10；再把时刻 1 改成 3，maximum 变为 5。
 *
 * 思路：哈希表保存每个时刻的最新价格。大根堆和小根堆延迟删除过期价格。
 * 单次操作摊还 O(log n)
 */

import { Heap } from "@/heap";

export class StockPrice {
  private readonly prices = new Map<number, number>();
  private latest = 0;
  private readonly maxHeap = new Heap<[number, number]>((a, b) => a[0] > b[0]);
  private readonly minHeap = new Heap<[number, number]>((a, b) => a[0] < b[0]);

  update(timestamp: number, price: number): void {
    this.prices.set(timestamp, price);
    this.latest = Math.max(this.latest, timestamp);
    this.maxHeap.push([price, timestamp]);
    this.minHeap.push([price, timestamp]);
  }

  current(): number {
    return this.prices.get(this.latest) ?? 0;
  }

  maximum(): number {
    while (this.maxHeap.size > 0) {
      const top = this.maxHeap.peek();
      if (this.prices.get(top[1]) === top[0]) {
        return top[0];
      }
      this.maxHeap.pop();
    }
    return 0;
  }

  minimum(): number {
    while (this.minHeap.size > 0) {
      const top = this.minHeap.peek();
      if (this.prices.get(top[1]) === top[0]) {
        return top[0];
      }
      this.minHeap.pop();
    }
    return 0;
  }
}

const stock = new StockPrice();
stock.update(1, 10);
stock.update(2, 5);
const currentPrice = stock.current();
const maxPrice = stock.maximum();
stock.update(1, 3);
const nextMax = stock.maximum();
console.log([currentPrice, maxPrice, nextMax]);
