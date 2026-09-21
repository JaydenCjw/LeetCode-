/**
 * 奇数单元格
 * 难度：★☆☆☆☆
 * m×n 矩阵初始全为 0。对 indices 中每个 [ri, ci]，把第 ri 行和第 ci 列都加 1（交点加 2）。返回值为奇数的单元格个数。
 *
 * 示例：m=2, n=3, indices=[[0,1],[1,1]] => 6
 *
 * 思路：记录每行、每列被加的次数。单元格奇偶性由行次数与列次数之和决定。
 * 时间 O(m*n + indices)，空间 O(m+n)
 */

export function oddCells(m: number, n: number, indices: number[][]): number {
  const rowAdd = Array.from({ length: m }, () => 0);
  const colAdd = Array.from({ length: n }, () => 0);
  for (const pair of indices) {
    rowAdd[pair[0]] += 1;
    colAdd[pair[1]] += 1;
  }
  let odds = 0;
  for (let row = 0; row < m; row += 1) {
    for (let col = 0; col < n; col += 1) {
      if ((rowAdd[row] + colAdd[col]) % 2 === 1) {
        odds += 1;
      }
    }
  }
  return odds;
}

console.log(
  oddCells(2, 3, [
    [0, 1],
    [1, 1],
  ]),
);
