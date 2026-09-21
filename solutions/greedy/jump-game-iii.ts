/**
 * 跳跃游戏 III
 * 难度：★★★☆☆
 * 从下标 start 出发，可跳到 i + arr[i] 或 i - arr[i]。判断能否到达值为 0 的位置。
 *
 * 示例：arr = [4,2,3,0,3,1,2], start = 5 => true
 *
 * 思路：从起点做广度优先搜索，访问到 0 即成功，越界或重复位置跳过。
 * 时间 O(n)，空间 O(n)
 */

export function canReach(arr: number[], start: number): boolean {
  const n = arr.length;
  const seen = new Array<boolean>(n).fill(false);
  const queue = [start];
  seen[start] = true;
  for (let head = 0; head < queue.length; head++) {
    const index = queue[head];
    if (arr[index] === 0) {
      return true;
    }
    for (const next of [index + arr[index], index - arr[index]]) {
      if (next >= 0 && next < n && !seen[next]) {
        seen[next] = true;
        queue.push(next);
      }
    }
  }
  return false;
}

console.log(canReach([4, 2, 3, 0, 3, 1, 2], 5));
