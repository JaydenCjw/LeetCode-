/**
 * 螺旋矩阵 IV
 * 难度：★★★☆☆
 * 按顺时针螺旋把链表的值填进 m 行 n 列矩阵，填不满的位置为 -1。
 *
 * 示例：m = 3，n = 5，head = 3->0->2->6->8->1->7->9->4->2->5->5->0
 * => [[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]
 *
 * 思路：四个方向轮转，下一步越界或已填过就转向。
 * 时间 O(m * n)，空间 O(m * n)
 */

import { ListNode, buildList } from "@/types";

export function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
  const matrix = Array.from({ length: m }, () => new Array<number>(n).fill(-1));
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let row = 0;
  let col = 0;
  let direction = 0;
  let current = head;
  while (current && matrix[row][col] === -1) {
    matrix[row][col] = current.val;
    current = current.next;
    let nextRow = row + directions[direction][0];
    let nextCol = col + directions[direction][1];
    const blocked =
      nextRow < 0 ||
      nextRow >= m ||
      nextCol < 0 ||
      nextCol >= n ||
      matrix[nextRow][nextCol] !== -1;
    if (blocked) {
      direction = (direction + 1) % 4;
      nextRow = row + directions[direction][0];
      nextCol = col + directions[direction][1];
    }
    row = nextRow;
    col = nextCol;
  }
  return matrix;
}

console.log(
  spiralMatrix(3, 5, buildList([3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0])),
);
