/**
 * 拿起连续卡牌的最少数量
 * 难度：★★★☆☆
 * 从一行卡牌中拿走连续一段，使其中至少有两张相同。返回最短长度，不可能则返回 -1。
 *
 * 示例：cards = [3,4,2,3,4,7] => 4
 *
 * 思路：记录每个点数上次出现的位置，相邻两次出现的跨度取最小。
 * 时间 O(n)，空间 O(n)
 */

export function minimumCardPickup(cards: number[]): number {
  const last = new Map<number, number>();
  let best = Number.POSITIVE_INFINITY;
  for (let i = 0; i < cards.length; i++) {
    const previous = last.get(cards[i]);
    if (previous !== undefined) {
      best = Math.min(best, i - previous + 1);
    }
    last.set(cards[i], i);
  }
  return best === Number.POSITIVE_INFINITY ? -1 : best;
}

console.log(minimumCardPickup([3, 4, 2, 3, 4, 7]));
