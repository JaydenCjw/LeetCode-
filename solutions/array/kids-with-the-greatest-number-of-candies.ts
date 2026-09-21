/**
 * 拥有最多糖果的孩子
 * 难度：★☆☆☆☆
 * 每个孩子再得到 extraCandies 颗糖后，是否能达到当前最大糖果数。
 *
 * 示例：candies = [2,3,5,1,3], extraCandies = 3 => [true,true,true,false,true]
 *
 * 思路：先求最大值，再逐个判断。
 * 时间 O(n)，空间 O(n)
 */

export function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let maxCandies = 0;
  for (const candy of candies) {
    if (candy > maxCandies) {
      maxCandies = candy;
    }
  }
  return candies.map((candy) => candy + extraCandies >= maxCandies);
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
