/**
 * 矩阵对角线元素的和
 * 难度：★☆☆☆☆
 * 返回方阵主对角线与副对角线的元素和。若 n 为奇数，正中间的元素只加一次。
 *
 * 示例：mat=[[1,2,3],[4,5,6],[7,8,9]] => 25
 *
 * 思路：遍历行，加上 (i,i) 和 (i, n-1-i)，两下标相同则跳过副对角线。
 * 时间 O(n)，空间 O(1)
 */

export function diagonalSum(mat: number[][]): number {
  const n = mat.length;
  let sum = 0;
  for (let index = 0; index < n; index += 1) {
    sum += mat[index][index];
    const other = n - 1 - index;
    if (other !== index) {
      sum += mat[index][other];
    }
  }
  return sum;
}

console.log(
  diagonalSum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
