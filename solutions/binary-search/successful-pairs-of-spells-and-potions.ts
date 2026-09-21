/**
 * 咒语和药水的成功对数
 * 难度：★★☆☆☆
 * 若 spells[i] * potions[j] >= success，则这一对成功。返回每个咒语的成功药水数。
 *
 * 示例：spells = [5,1,3], potions = [1,2,3,4,5], success = 7 => [4,0,3]
 *
 * 思路：药水排序后，对每个咒语二分第一个足够大的药水。
 * 时间 O((n+m) log m)，空间 O(1)
 */

export function successfulPairs(spells: number[], potions: number[], success: number): number[] {
  potions.sort((a, b) => a - b);
  return spells.map((spell) => {
    let left = 0;
    let right = potions.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (spell * potions[mid] >= success) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return potions.length - left;
  });
}

console.log(successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7));
