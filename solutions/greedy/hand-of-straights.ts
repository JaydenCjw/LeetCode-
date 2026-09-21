/**
 * 一手顺子
 * 难度：★★★☆☆
 * 判断手牌能否分成若干组，每组 groupSize 张连续数字。
 *
 * 思路：计数后从小到大取起点，连续扣减。
 * 时间 O(n log n)，空间 O(n)
 */

export function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) {
    return false;
  }
  const count = new Map<number, number>();
  for (const card of hand) {
    count.set(card, (count.get(card) ?? 0) + 1);
  }
  const cards = [...count.keys()].sort((a, b) => a - b);
  for (const start of cards) {
    const times = count.get(start) ?? 0;
    if (times === 0) {
      continue;
    }
    for (let offset = 0; offset < groupSize; offset++) {
      const card = start + offset;
      const left = count.get(card) ?? 0;
      if (left < times) {
        return false;
      }
      count.set(card, left - times);
    }
  }
  return true;
}

console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3));
