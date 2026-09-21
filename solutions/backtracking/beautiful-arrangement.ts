/**
 * 优美的排列
 * 难度：★★☆☆☆
 * 1..n 的排列中，每个位置 i（从 1 计）满足 perm[i] 能被 i 整除或 i 能被 perm[i] 整除。求个数。
 *
 * 示例：n = 2 => 2
 *
 * 思路：按位置回溯，剪掉不满足整除关系的数字。
 * 时间 O(n!)，空间 O(n)
 */

export function countArrangement(n: number): number {
  const used = new Array<boolean>(n + 1).fill(false);

  function dfs(pos: number): number {
    if (pos > n) {
      return 1;
    }
    let count = 0;
    for (let num = 1; num <= n; num++) {
      if (used[num]) {
        continue;
      }
      if (num % pos !== 0 && pos % num !== 0) {
        continue;
      }
      used[num] = true;
      count += dfs(pos + 1);
      used[num] = false;
    }
    return count;
  }

  return dfs(1);
}

console.log(countArrangement(2));
