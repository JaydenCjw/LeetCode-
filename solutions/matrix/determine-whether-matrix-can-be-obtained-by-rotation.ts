/**
 * 判断矩阵经轮转后是否一致
 * 难度：★★☆☆☆
 * 判断 mat 能否通过若干次顺时针旋转 90 度变成 target。
 *
 * 示例：mat=[[0,1],[1,0]], target=[[1,0],[0,1]] => true
 *
 * 思路：最多旋转 4 次，每次把 (r,c) 送到 (c, n-1-r)，并与目标比较。
 * 时间 O(n^2)，空间 O(n^2)
 */

function sameMatrix(a: number[][], b: number[][]): boolean {
  for (let row = 0; row < a.length; row += 1) {
    for (let col = 0; col < a[0].length; col += 1) {
      if (a[row][col] !== b[row][col]) {
        return false;
      }
    }
  }
  return true;
}

function rotate90(mat: number[][]): number[][] {
  const n = mat.length;
  const next = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < n; col += 1) {
      next[col][n - 1 - row] = mat[row][col];
    }
  }
  return next;
}

export function findRotation(mat: number[][], target: number[][]): boolean {
  let current = mat;
  for (let turn = 0; turn < 4; turn += 1) {
    if (sameMatrix(current, target)) {
      return true;
    }
    current = rotate90(current);
  }
  return false;
}

console.log(
  findRotation(
    [
      [0, 1],
      [1, 0],
    ],
    [
      [1, 0],
      [0, 1],
    ],
  ),
);
