/**
 * 重塑矩阵
 * 难度：★☆☆☆☆
 * 把矩阵按行优先重排成 r 行 c 列。若元素个数对不上，返回原矩阵。
 *
 * 示例：mat=[[1,2],[3,4]], r=1, c=4 => [[1,2,3,4]]
 *
 * 思路：用一个下标同时遍历原矩阵和目标矩阵。
 * 时间 O(mn)，空间 O(r*c)
 */

export function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const rows = mat.length;
  const cols = mat[0].length;
  if (rows * cols !== r * c) {
    return mat;
  }
  const result = Array.from({ length: r }, () => Array.from({ length: c }, () => 0));
  for (let index = 0; index < rows * cols; index += 1) {
    result[Math.floor(index / c)][index % c] = mat[Math.floor(index / cols)][index % cols];
  }
  return result;
}

console.log(
  matrixReshape(
    [
      [1, 2],
      [3, 4],
    ],
    1,
    4,
  ),
);
