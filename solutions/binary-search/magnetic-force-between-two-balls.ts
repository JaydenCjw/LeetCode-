/**
 * 两球之间的磁力
 * 难度：★★★☆☆
 * 在数轴篮子上放 m 个球，每个篮子至多一个。最大化任意两球的最小距离。
 *
 * 示例：position = [1,2,3,4,7], m = 3 => 3
 *
 * 思路：二分最小距离。贪心从左到右放置，能放下 m 个则距离可行。
 * 时间 O(n log n + n log D)，空间 O(1)
 */

export function maxDistance(position: number[], m: number): number {
  position.sort((a, b) => a - b);
  const canPlace = (distance: number): boolean => {
    let count = 1;
    let last = position[0];
    for (let i = 1; i < position.length; i++) {
      if (position[i] - last >= distance) {
        count++;
        last = position[i];
      }
    }
    return count >= m;
  };
  let lo = 1;
  let hi = position[position.length - 1] - position[0];
  while (lo < hi) {
    const mid = (lo + hi + 1) >> 1;
    if (canPlace(mid)) {
      lo = mid;
    } else {
      hi = mid - 1;
    }
  }
  return lo;
}

console.log(maxDistance([1, 2, 3, 4, 7], 3));
