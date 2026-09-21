/**
 * 孤独像素
 * 难度：★★☆☆☆
 * 图片由黑像素 B 和白像素 W 组成。若某个 B 是所在行和所在列唯一的黑像素，则它是孤独像素。返回孤独像素个数。
 *
 * 示例：三行分别为 WWB、WBW、BWW，三个黑像素各自独占一行一列，答案为 3。
 *
 * 思路：统计每行、每列的 B 数量，再数行列计数都为 1 的 B。
 * 时间 O(mn)，空间 O(m+n)
 */

export function findLonelyPixel(picture: string[][]): number {
  const rows = picture.length;
  const cols = picture[0].length;
  const rowCount = Array.from({ length: rows }, () => 0);
  const colCount = Array.from({ length: cols }, () => 0);
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (picture[row][col] === "B") {
        rowCount[row] += 1;
        colCount[col] += 1;
      }
    }
  }
  let lonely = 0;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (picture[row][col] === "B" && rowCount[row] === 1 && colCount[col] === 1) {
        lonely += 1;
      }
    }
  }
  return lonely;
}

console.log(
  findLonelyPixel([
    ["W", "W", "B"],
    ["W", "B", "W"],
    ["B", "W", "W"],
  ]),
);
