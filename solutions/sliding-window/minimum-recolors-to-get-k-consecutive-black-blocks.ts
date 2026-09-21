/**
 * 得到 K 个黑块的最少涂色次数
 * 难度：★★☆☆☆
 * 方块为黑 B 或白 W。每次可以把白涂成黑。返回得到连续 k 个黑块的最少涂色次数。
 *
 * 示例：blocks = "WBBWWBBWBW", k = 7 => 3
 *
 * 思路：定长窗口统计白色个数，取最小值。
 * 时间 O(n)，空间 O(1)
 */

export function minimumRecolors(blocks: string, k: number): number {
  let white = 0;
  let best = k;
  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === "W") {
      white++;
    }
    if (i >= k && blocks[i - k] === "W") {
      white--;
    }
    if (i >= k - 1) {
      best = Math.min(best, white);
    }
  }
  return best;
}

console.log(minimumRecolors("WBBWWBBWBW", 7));
