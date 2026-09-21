/**
 * 球会落何处
 * 难度：★★★☆☆
 * 盒子每一格是挡板，1 表示向右下，-1 表示向左下。球从每一列顶部放下。若形成 V 形卡住或走出左右边界，则该列答案为 -1，否则为落到底部的列号。
 *
 * 示例：grid=[[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]] => [1,-1,-1,-1,-1]
 *
 * 思路：逐列模拟。当前挡板指向的相邻格必须是同一方向，球才能滑到下一行。
 * 时间 O(mn)，空间 O(1) 额外（不含输出）
 */

export function findBall(grid: number[][]): number[] {
  const rows = grid.length;
  const cols = grid[0].length;
  const answer = Array.from({ length: cols }, () => -1);
  for (let start = 0; start < cols; start += 1) {
    let col = start;
    let stuck = false;
    for (let row = 0; row < rows; row += 1) {
      const dir = grid[row][col];
      const next = col + dir;
      if (next < 0 || next >= cols || grid[row][next] !== dir) {
        stuck = true;
        break;
      }
      col = next;
    }
    if (!stuck) {
      answer[start] = col;
    }
  }
  return answer;
}

console.log(
  findBall([
    [1, 1, 1, -1, -1],
    [1, 1, 1, -1, -1],
    [-1, -1, -1, 1, 1],
    [1, 1, 1, 1, -1],
    [-1, -1, -1, -1, -1],
  ]),
);
