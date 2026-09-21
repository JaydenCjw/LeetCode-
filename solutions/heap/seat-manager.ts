/**
 * 座位预约管理系统
 * 难度：★★☆☆☆
 * n 个座位编号 1 到 n。reserve 返回最小的空闲座位，unreserve 取消预约。
 *
 * 示例：n = 5，两次 reserve 得到 1、2，unreserve(2) 后再 reserve 得到 2。
 *
 * 思路：小根堆保存空闲座位。
 * 单次操作 O(log n)
 */

import { Heap } from "@/heap";

export class SeatManager {
  private readonly available: Heap<number>;

  constructor(n: number) {
    this.available = new Heap<number>((a, b) => a < b);
    for (let seat = 1; seat <= n; seat += 1) {
      this.available.push(seat);
    }
  }

  reserve(): number {
    return this.available.pop();
  }

  unreserve(seatNumber: number): void {
    this.available.push(seatNumber);
  }
}

const manager = new SeatManager(5);
const first = manager.reserve();
const second = manager.reserve();
manager.unreserve(2);
const third = manager.reserve();
console.log([first, second, third]);
