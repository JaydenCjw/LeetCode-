/**
 * 最长连续序列
 * 难度：★★★☆☆
 * 未排序整数数组中，找出数字连续的最长序列长度。要求时间 O(n)。
 *
 * 示例：[100,4,200,1,3,2] => 4（1,2,3,4）
 *
 * 思路：哈希集合；只从序列起点向后延伸。
 * 时间 O(n)，空间 O(n)
 */

export function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let best = 0;

  for (const num of set) {
    if (set.has(num - 1)) {
      continue;
    }
    let length = 1;
    while (set.has(num + length)) {
      length++;
    }
    best = Math.max(best, length);
  }

  return best;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
