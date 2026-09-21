/**
 * 数组异或操作
 * 难度：★☆☆☆☆
 * 定义 nums[i] = start + 2*i，返回前 n 项的异或。
 *
 * 示例：n = 5, start = 0 => 8
 *
 * 思路：按定义生成并依次异或。
 * 时间 O(n)，空间 O(1)
 */

export function xorOperation(n: number, start: number): number {
  let result = 0;
  for (let i = 0; i < n; i++) {
    result ^= start + 2 * i;
  }
  return result;
}

console.log(xorOperation(5, 0));
