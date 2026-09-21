/**
 * 墙与门
 * 难度：★★★☆☆
 * 房间网格中 -1 是墙，0 是门，2147483647 是空房间。把每个空房间填成到最近门的距离。
 *
 * 示例：左上角空房间到门的距离为 3。
 *
 * 思路：从所有门同时多源 BFS，第一次到达空房间即为最短距离。
 * 时间 O(m*n)，空间 O(m*n)
 */

const INF = 2147483647;

export function wallsAndGates(rooms: number[][]): number[][] {
  if (rooms.length === 0) {
    return rooms;
  }
  const rows = rooms.length;
  const cols = rooms[0].length;
  const queue: Array<[number, number]> = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (rooms[row][col] === 0) {
        queue.push([row, col]);
      }
    }
  }

  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let head = 0;
  while (head < queue.length) {
    const current = queue[head];
    head++;
    if (!current) {
      continue;
    }
    const [row, col] = current;
    for (const [dr, dc] of dirs) {
      const nr = row + dr;
      const nc = col + dc;
      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols || rooms[nr][nc] !== INF) {
        continue;
      }
      rooms[nr][nc] = rooms[row][col] + 1;
      queue.push([nr, nc]);
    }
  }
  return rooms;
}

const rooms = wallsAndGates([
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
]);
console.log(rooms[0][0]);
