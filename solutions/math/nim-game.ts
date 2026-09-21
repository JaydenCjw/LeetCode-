/**
 * Nim 游戏
 * 难度：★☆☆☆☆
 * 桌上有 n 块石头，你和朋友轮流拿 1 到 3 块，拿到最后一块的人获胜。你先手，判断能否必胜。
 *
 * 示例：n=4 => false（无论拿几块，对手都能拿光剩余的）
 *
 * 思路：n 能被 4 整除时先手必败，否则先手可把剩余石子数维持为 4 的倍数。
 * 时间 O(1)，空间 O(1)
 */

export function canWinNim(n: number): boolean {
  return n % 4 !== 0;
}

console.log(canWinNim(4));
