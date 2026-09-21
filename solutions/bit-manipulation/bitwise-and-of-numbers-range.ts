/**
 * 数字范围按位与
 * 难度：★★★☆☆
 * 返回区间 [left, right] 内所有数字按位与的结果。
 *
 * 示例：left = 5, right = 7 => 4
 *
 * 思路：公共前缀 —— 右移直到 left == right，再左移回来。
 * 时间 O(log n)，空间 O(1)
 */

export function rangeBitwiseAnd(left: number, right: number): number {
  let shift = 0;
  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }
  return left << shift;
}

console.log(rangeBitwiseAnd(5, 7));
console.log(rangeBitwiseAnd(1, 2147483647));
