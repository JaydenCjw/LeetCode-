/**
 * 杨辉三角 II
 * 难度：★★☆☆☆
 * 给定行下标 rowIndex（从 0 开始），只返回杨辉三角的这一行。
 *
 * 示例：rowIndex = 3 => [1,3,3,1]
 *
 * 思路：滚动一行，从右向左用相邻两项之和更新。
 * 时间 O(rowIndex^2)，空间 O(rowIndex)
 */

export function getRow(rowIndex: number): number[] {
  const row = new Array<number>(rowIndex + 1).fill(1);
  for (let i = 2; i <= rowIndex; i++) {
    for (let j = i - 1; j >= 1; j--) {
      row[j] = row[j] + row[j - 1];
    }
  }
  return row;
}

console.log(getRow(3));
