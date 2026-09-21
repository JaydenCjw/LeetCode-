/**
 * 灌溉花园的最少水龙头数目
 * 难度：★★★★☆
 * 花园 [0, n]，位置 i 的水龙头可浇 [i - ranges[i], i + ranges[i]]。求覆盖整段的最少水龙头数。
 *
 * 示例：n = 5, ranges = [3,4,1,1,0,0] => 1
 *
 * 思路：把每个水龙头收成「某起点能到达的最远右端」，再按跳跃游戏 II 贪心延伸。
 * 时间 O(n)，空间 O(n)
 */

export function minTaps(n: number, ranges: number[]): number {
  const maxReach = new Array<number>(n + 1).fill(0);
  for (let i = 0; i < ranges.length; i++) {
    const left = Math.max(0, i - ranges[i]);
    const right = Math.min(n, i + ranges[i]);
    maxReach[left] = Math.max(maxReach[left], right);
  }
  let end = 0;
  let farthest = 0;
  let index = 0;
  let taps = 0;
  while (end < n) {
    while (index <= end) {
      farthest = Math.max(farthest, maxReach[index]);
      index++;
    }
    if (farthest <= end) {
      return -1;
    }
    end = farthest;
    taps++;
  }
  return taps;
}

console.log(minTaps(5, [3, 4, 1, 1, 0, 0]));
