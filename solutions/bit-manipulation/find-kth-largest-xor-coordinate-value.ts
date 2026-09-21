/**
 * 找出第 K 大的异或坐标值
 * 难度：★★★☆☆
 * 矩阵坐标 (i,j) 的值是左上角到 (i,j) 子矩阵所有元素的异或。返回第 k 大。
 *
 * 示例：matrix = [[5,2],[1,6]], k = 1 => 7
 *
 * 思路：二维前缀异或，收集后降序取第 k 个。
 * 时间 O(mn log(mn))，空间 O(mn)
 */

export function kthLargestValue(matrix: number[][], k: number): number {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const prefix = Array.from({ length: rows + 1 }, () => new Array<number>(cols + 1).fill(0));
  const values: number[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      prefix[row + 1][col + 1] = matrix[row][col] ^ prefix[row][col + 1] ^ prefix[row + 1][col] ^ prefix[row][col];
      values.push(prefix[row + 1][col + 1]);
    }
  }
  values.sort((a, b) => b - a);
  return values[k - 1];
}

console.log(kthLargestValue([[5, 2], [1, 6]], 1));
