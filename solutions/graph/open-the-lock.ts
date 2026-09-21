/**
 * 打开转盘锁
 * 难度：★★★☆☆
 * 四位密码锁从 "0000" 开始，每次拨动一位 ±1，deadends 不可经过，求到达 target 的最少次数。
 *
 * 思路：BFS，避开死锁和已访问状态。
 * 时间 O(10^4)，空间 O(10^4)
 */

export function openLock(deadends: string[], target: string): number {
  const dead = new Set(deadends);
  if (dead.has("0000")) {
    return -1;
  }
  const visited = new Set(["0000"]);
  const queue: Array<[string, number]> = [["0000", 0]];
  let head = 0;

  while (head < queue.length) {
    const [state, steps] = queue[head++];
    if (state === target) {
      return steps;
    }
    for (let i = 0; i < 4; i++) {
      for (const delta of [-1, 1]) {
        const chars = state.split("");
        chars[i] = String((Number(chars[i]) + delta + 10) % 10);
        const next = chars.join("");
        if (dead.has(next) || visited.has(next)) {
          continue;
        }
        visited.add(next);
        queue.push([next, steps + 1]);
      }
    }
  }

  return -1;
}

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"));
