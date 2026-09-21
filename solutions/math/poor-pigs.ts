/**
 * 可怜的小猪
 * 难度：★★★★☆
 * 有 buckets 桶液体，其中恰好一桶有毒。小猪喝下后 minutesToDie 分钟会死。在 minutesToTest 分钟内，最少需要几只猪才能找出毒桶。
 *
 * 示例：buckets=1000, minutesToDie=15, minutesToTest=60 => 5
 *
 * 思路：每只猪有 rounds+1 种状态（哪个时间点死亡，或活着）。rounds = floor(minutesToTest / minutesToDie)。需要 states^pigs >= buckets。
 * 时间 O(log buckets)，空间 O(1)
 */

export function poorPigs(buckets: number, minutesToDie: number, minutesToTest: number): number {
  const states = Math.floor(minutesToTest / minutesToDie) + 1;
  let pigs = 0;
  let cover = 1;
  while (cover < buckets) {
    cover *= states;
    pigs += 1;
  }
  return pigs;
}

console.log(poorPigs(1000, 15, 60));
