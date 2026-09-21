/**
 * 可能的二分法
 * 难度：★★★☆☆
 * n 个人编号 1 到 n，dislikes 表示两人互相讨厌。能否把所有人分成两组，使讨厌的人不在同一组。
 *
 * 示例：n = 3，dislikes = [[1,2],[1,3],[2,3]] => false
 *
 * 思路：讨厌关系建无向图，BFS 二染色，出现同色相邻则不可能。
 * 时间 O(n+m)，空间 O(n+m)
 */

export function possibleBipartition(n: number, dislikes: number[][]): boolean {
  const graph: number[][] = Array.from({ length: n + 1 }, () => []);
  for (const [left, right] of dislikes) {
    graph[left].push(right);
    graph[right].push(left);
  }

  const color = new Array<number>(n + 1).fill(0);
  const paint = (start: number): boolean => {
    const queue = [start];
    color[start] = 1;
    let head = 0;
    while (head < queue.length) {
      const node = queue[head];
      head++;
      if (node === undefined) {
        continue;
      }
      for (const next of graph[node]) {
        if (color[next] === 0) {
          color[next] = -color[node];
          queue.push(next);
        } else if (color[next] === color[node]) {
          return false;
        }
      }
    }
    return true;
  };

  for (let person = 1; person <= n; person++) {
    if (color[person] === 0 && !paint(person)) {
      return false;
    }
  }
  return true;
}

console.log(
  possibleBipartition(3, [
    [1, 2],
    [1, 3],
    [2, 3],
  ]),
);
