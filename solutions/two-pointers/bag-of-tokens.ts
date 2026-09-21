/**
 * 令牌放置
 * 难度：★★★☆☆
 * 能量不少于令牌值时可正面换 1 分，分数大于 0 时可反面用 1 分换能量。返回能得到的最大分数。
 *
 * 示例：tokens = [100], power = 50 => 0；tokens = [100,200], power = 150 => 1
 *
 * 思路：排序后用小令牌换分，分不够时用大令牌回能量。
 * 时间 O(n log n)，空间 O(1)
 */

export function bagOfTokensScore(tokens: number[], power: number): number {
  tokens.sort((left, right) => left - right);
  let left = 0;
  let right = tokens.length - 1;
  let score = 0;
  let best = 0;
  while (left <= right) {
    if (power >= tokens[left]) {
      power -= tokens[left];
      left++;
      score++;
      best = Math.max(best, score);
    } else if (score > 0 && left < right) {
      power += tokens[right];
      right--;
      score--;
    } else {
      break;
    }
  }
  return best;
}

console.log(bagOfTokensScore([100], 50));
console.log(bagOfTokensScore([100, 200], 150));
