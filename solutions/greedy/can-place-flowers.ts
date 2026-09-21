/**
 * 种花问题
 * 难度：★☆☆☆☆
 * 花不能种在相邻地块。判断能否再种 n 朵花。
 *
 * 思路：连续空地能种 (空地数-1)/2 或边界特判。
 * 时间 O(n)，空间 O(1)
 */

export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;
  for (let i = 0; i < flowerbed.length && count < n; i++) {
    const empty = flowerbed[i] === 0;
    const leftEmpty = i === 0 || flowerbed[i - 1] === 0;
    const rightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
    if (empty && leftEmpty && rightEmpty) {
      flowerbed[i] = 1;
      count++;
    }
  }
  return count >= n;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
