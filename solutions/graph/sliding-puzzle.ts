/**
 * 滑动谜题
 * 难度：★★★★☆
 * 2x3 棋盘上有 0 到 5，0 表示空格。每次把空格与相邻数字交换，返回变成 [[1,2,3],[4,5,0]] 的最少步数，无法完成返回 -1。
 *
 * 示例：[[1,2,3],[4,0,5]] => 1
 *
 * 思路：把棋盘压成字符串，对空格的四个邻接位置做 BFS。
 * 时间 O(6!)，空间 O(6!)
 */

export function slidingPuzzle(board: number[][]): number {
  const start = `${board[0].join("")}${board[1].join("")}`;
  const target = "123450";
  const neighbors = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4],
    [1, 3, 5],
    [2, 4],
  ];
  const queue: Array<[string, number]> = [[start, 0]];
  const seen = new Set<string>([start]);
  let head = 0;

  while (head < queue.length) {
    const current = queue[head];
    head++;
    if (!current) {
      continue;
    }
    const [state, dist] = current;
    if (state === target) {
      return dist;
    }
    const zero = state.indexOf("0");
    for (const next of neighbors[zero]) {
      const chars = state.split("");
      const swapped = chars[zero];
      chars[zero] = chars[next];
      chars[next] = swapped;
      const nextState = chars.join("");
      if (!seen.has(nextState)) {
        seen.add(nextState);
        queue.push([nextState, dist + 1]);
      }
    }
  }
  return -1;
}

console.log(
  slidingPuzzle([
    [1, 2, 3],
    [4, 0, 5],
  ]),
);
