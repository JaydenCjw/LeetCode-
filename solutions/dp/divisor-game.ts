/**
 * 除数博弈
 * 难度：★★☆☆☆
 * 爱丽丝和鲍勃从 n 开始，每次把当前数换成 x（0 < x < N 且 N % x == 0）。不能操作者输。爱丽丝先手。
 *
 * 示例：n = 2 => true
 *
 * 思路：偶数必胜。面对偶数总能选 1 留给对手奇数，对手只能再变回偶数。
 * 时间 O(1)，空间 O(1)
 */

export function divisorGame(n: number): boolean {
  return n % 2 === 0;
}

console.log(divisorGame(2));
