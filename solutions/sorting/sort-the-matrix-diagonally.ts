/**
 * 将矩阵按对角线排序
 * 难度：★★☆☆☆
 * 同一条对角线上的元素（行号减列号相同）按升序排列，其余位置相对关系由这条规则决定。
 *
 * 示例：[[3,3,1,1],[2,2,1,2],[1,1,1,2]] => [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
 *
 * 思路：按 row-col 分组，组内排序后从左上到右下填回。
 * 时间 O(mn log(min(m,n)))，空间 O(mn)
 */

export function diagonalSort(mat: number[][]): number[][] {
  const rows = mat.length;
  const cols = mat[0].length;
  const groups = new Map<number, number[]>();
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const key = row - col;
      const list = groups.get(key) ?? [];
      list.push(mat[row][col]);
      groups.set(key, list);
    }
  }
  for (const list of groups.values()) {
    list.sort((a, b) => b - a);
  }
  const result = mat.map((row) => row.slice());
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const list = groups.get(row - col);
      const value = list?.pop();
      result[row][col] = value ?? 0;
    }
  }
  return result;
}

console.log(
  diagonalSort([
    [3, 3, 1, 1],
    [2, 2, 1, 2],
    [1, 1, 1, 2],
  ]),
);
