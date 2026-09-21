/**
 * 使整数变为 0 的最少操作次数
 * 难度：★★★★☆
 * 操作 1：若 n 为奇数? 实际上两种操作：把最右边的 1 翻转，或把最右边的 0 的左侧那位翻转。返回把 n 变成 0 的最少次数。
 *
 * 示例：3 => 2
 *
 * 思路：答案等于 n 的二进制格雷码逆变换，即不断 n ^= n>>1。
 * 时间 O(log n)，空间 O(1)
 */

export function minimumOneBitOperations(n: number): number {
  let answer = 0;
  while (n > 0) {
    answer ^= n;
    n >>= 1;
  }
  return answer;
}

console.log(minimumOneBitOperations(3));
