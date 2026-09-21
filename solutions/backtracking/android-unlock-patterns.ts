/**
 * 安卓解锁图案
 * 难度：★★☆☆☆
 * 3x3 键盘上，图案长度在 [m, n] 之间。经过两点中点时，中点必须已经访问过。求图案数。
 *
 * 示例：m = 1, n = 1 => 9
 *
 * 思路：记录跳跃中点，从角、边、中心三类起点回溯，再按对称性乘 4。
 * 时间 O(9!)，空间 O(1)
 */

export function numberOfPatterns(m: number, n: number): number {
  const skip: number[][] = Array.from({ length: 10 }, () => new Array<number>(10).fill(0));
  skip[1][3] = skip[3][1] = 2;
  skip[1][7] = skip[7][1] = 4;
  skip[1][9] = skip[9][1] = 5;
  skip[2][8] = skip[8][2] = 5;
  skip[3][9] = skip[9][3] = 6;
  skip[3][7] = skip[7][3] = 5;
  skip[4][6] = skip[6][4] = 5;
  skip[7][9] = skip[9][7] = 8;
  const visited = new Array<boolean>(10).fill(false);

  function dfs(current: number, length: number): number {
    if (length > n) {
      return 0;
    }
    let count = length >= m ? 1 : 0;
    visited[current] = true;
    for (let next = 1; next <= 9; next++) {
      if (visited[next]) {
        continue;
      }
      const mid = skip[current][next];
      if (mid !== 0 && !visited[mid]) {
        continue;
      }
      count += dfs(next, length + 1);
    }
    visited[current] = false;
    return count;
  }

  return dfs(1, 1) * 4 + dfs(2, 1) * 4 + dfs(5, 1);
}

console.log(numberOfPatterns(1, 1));
