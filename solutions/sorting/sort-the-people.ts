/**
 * 按身高排序
 * 难度：★☆☆☆☆
 * names[i] 对应身高 heights[i]。按身高从高到低返回名字。
 *
 * 示例：names=["Mary","John","Emma"], heights=[180,165,170] => ["Mary","Emma","John"]
 *
 * 思路：把名字和下标绑在一起，按身高降序排序。
 * 时间 O(n log n)，空间 O(n)
 */

export function sortPeople(names: string[], heights: number[]): string[] {
  const order = names.map((_, index) => index);
  order.sort((a, b) => heights[b] - heights[a]);
  return order.map((index) => names[index]);
}

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
