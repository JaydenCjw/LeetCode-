/**
 * 到达终点数字
 * 难度：★★☆☆☆
 * 从 0 出发，第 i 步必须向左或向右走 i。返回到达 target 的最少步数。target 非负。
 *
 * 示例：target=2 => 3；target=3 => 2
 *
 * 思路：累加 1..n，直到 sum >= target 且 sum - target 为偶数（多走的部分可以靠反向抵消 2 倍）。
 * 时间 O(sqrt target)，空间 O(1)
 */

export function reachNumber(target: number): number {
  let goal = Math.abs(target);
  let step = 0;
  let sum = 0;
  while (sum < goal || (sum - goal) % 2 !== 0) {
    step += 1;
    sum += step;
  }
  return step;
}

console.log([reachNumber(2), reachNumber(3)]);
