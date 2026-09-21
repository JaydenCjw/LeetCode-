/**
 * 格雷编码
 * 难度：★★☆☆☆
 * 返回 n 位格雷码序列，相邻（含首尾）只有一位不同。
 *
 * 示例：n = 2 => [0,1,3,2]
 *
 * 思路：第 i 个格雷码是 i ^ (i >> 1)。
 * 时间 O(2^n)，空间 O(1)（不计输出）
 */

export function grayCode(n: number): number[] {
  const result: number[] = [];
  const size = 1 << n;
  for (let i = 0; i < size; i++) {
    result.push(i ^ (i >> 1));
  }
  return result;
}

console.log(grayCode(2));
