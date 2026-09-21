/**
 * 供暖器
 * 难度：★★☆☆☆
 * 房屋和供暖器都在数轴上。供暖器半径为 r 时覆盖 [x-r, x+r]。求让所有房屋被覆盖的最小半径。
 *
 * 示例：houses = [1,2,3], heaters = [2] => 1
 *
 * 思路：供暖器排序。每个房屋二分最近的供暖器，半径取这些距离的最大值。
 * 时间 O((n + m) log m)，空间 O(1)
 */

export function findRadius(houses: number[], heaters: number[]): number {
  heaters.sort((a, b) => a - b);
  let answer = 0;
  for (const house of houses) {
    let lo = 0;
    let hi = heaters.length - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (heaters[mid] < house) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    let distance = Math.abs(heaters[lo] - house);
    if (lo > 0) {
      distance = Math.min(distance, Math.abs(heaters[lo - 1] - house));
    }
    answer = Math.max(answer, distance);
  }
  return answer;
}

console.log(findRadius([1, 2, 3], [2]));
