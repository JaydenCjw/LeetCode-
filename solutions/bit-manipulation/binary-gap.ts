/**
 * 二进制间距
 * 难度：★☆☆☆☆
 * 返回二进制中两个相邻 1 的最大距离。没有两个 1 则返回 0。
 *
 * 示例：22（10110）=> 2
 *
 * 思路：记录上一个 1 的位置。
 * 时间 O(log n)，空间 O(1)
 */

export function binaryGap(n: number): number {
  let best = 0;
  let last = -1;
  let index = 0;
  while (n > 0) {
    if ((n & 1) === 1) {
      if (last !== -1) {
        best = Math.max(best, index - last);
      }
      last = index;
    }
    n >>= 1;
    index++;
  }
  return best;
}

console.log(binaryGap(22));
