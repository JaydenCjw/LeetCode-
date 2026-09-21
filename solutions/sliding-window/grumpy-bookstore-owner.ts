/**
 * 爱生气的书店老板
 * 难度：★★★☆☆
 * grumpy[i] 为 1 表示该分钟老板生气，顾客会不满意。老板可以连续 minutes 分钟不生气。返回最多满意顾客数。
 *
 * 示例：customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3 => 16
 *
 * 思路：不生气时的顾客必满意，再滑动窗口找出这段时间内因不生气而额外挽回的最大值。
 * 时间 O(n)，空间 O(1)
 */

export function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
  let base = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 0) {
      base += customers[i];
    }
  }
  let extra = 0;
  let window = 0;
  for (let i = 0; i < customers.length; i++) {
    if (grumpy[i] === 1) {
      window += customers[i];
    }
    if (i >= minutes && grumpy[i - minutes] === 1) {
      window -= customers[i - minutes];
    }
    extra = Math.max(extra, window);
  }
  return base + extra;
}

console.log(maxSatisfied([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3));
