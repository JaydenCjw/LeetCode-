/**
 * 钥匙和房间
 * 难度：★★☆☆☆
 * rooms[i] 是房间 i 里的钥匙列表，从 0 号房间出发，判断能否进入所有房间。
 *
 * 思路：DFS / BFS 收集能打开的房间。
 * 时间 O(n+k)，空间 O(n)
 */

export function canVisitAllRooms(rooms: number[][]): boolean {
  const visited = new Set<number>([0]);
  const stack = [0];
  while (stack.length > 0) {
    const room = stack.pop()!;
    for (const key of rooms[room]) {
      if (!visited.has(key)) {
        visited.add(key);
        stack.push(key);
      }
    }
  }
  return visited.size === rooms.length;
}

console.log(canVisitAllRooms([[1], [2], [3], []]));
