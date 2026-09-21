/**
 * 香槟塔
 * 难度：★★☆☆☆
 * 向塔顶倒入 poured 杯香槟，溢出的一半流向下一层左右两杯。求第 queryRow 行第 queryGlass 杯的酒量（最多 1）。
 *
 * 示例：poured = 1, query_row = 1, query_glass = 1 => 0
 *
 * 思路：按行模拟溢出。一杯超过 1 的部分平均分给下方两杯，最后对查询杯取 min(1, 酒量)。
 * 时间 O(queryRow^2)，空间 O(queryRow^2)
 */

export function champagneTower(poured: number, queryRow: number, queryGlass: number): number {
  const rows: number[][] = [];
  for (let r = 0; r <= queryRow; r++) {
    rows.push(new Array<number>(r + 1).fill(0));
  }
  rows[0][0] = poured;
  for (let r = 0; r < queryRow; r++) {
    for (let c = 0; c <= r; c++) {
      const overflow = (rows[r][c] - 1) / 2;
      if (overflow > 0) {
        rows[r + 1][c] += overflow;
        rows[r + 1][c + 1] += overflow;
      }
    }
  }
  return Math.min(1, rows[queryRow][queryGlass]);
}

console.log(champagneTower(1, 1, 1));
