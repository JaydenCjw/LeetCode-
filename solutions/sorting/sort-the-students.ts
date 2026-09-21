/**
 * 按第 K 列排序
 * 难度：★★☆☆☆
 * 矩阵每一行是一名学生的各科成绩。按第 k 列（从 0 开始）从高到低重排各行。
 *
 * 示例：score=[[10,6,9,1],[7,5,11,2],[4,8,3,15]], k=2 => [[7,5,11,2],[10,6,9,1],[4,8,3,15]]
 *
 * 思路：按 score[row][k] 降序排序行。
 * 时间 O(m log m)，空间 O(m)
 */

export function sortTheStudents(score: number[][], k: number): number[][] {
  return score.slice().sort((a, b) => b[k] - a[k]);
}

console.log(
  sortTheStudents(
    [
      [10, 6, 9, 1],
      [7, 5, 11, 2],
      [4, 8, 3, 15],
    ],
    2,
  ),
);
