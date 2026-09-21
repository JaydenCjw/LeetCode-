/**
 * 你能构造出连续值的最大数目
 * 难度：★★★☆☆
 * 用硬币的子集和，从 0 开始能连续构造出多少个整数（含 0）。
 *
 * 示例：[1,3] => 2；[1,1,1,4] => 8
 *
 * 思路：排序后维护下一处还覆盖不到的值。硬币不超过该值就能把区间延长，否则中断。
 * 时间 O(n log n)，空间 O(1)
 */

export function getMaximumConsecutive(coins: number[]): number {
  coins.sort((a, b) => a - b);
  let reach = 1;
  for (const coin of coins) {
    if (coin > reach) {
      break;
    }
    reach += coin;
  }
  return reach;
}

console.log(getMaximumConsecutive([1, 3]));
console.log(getMaximumConsecutive([1, 1, 1, 4]));
