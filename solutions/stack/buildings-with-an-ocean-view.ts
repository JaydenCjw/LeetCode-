/**
 * 看得见海景的建筑物
 * 难度：★★☆☆☆
 * 海在最右边。一栋建筑能看见海，当且仅当它右侧没有严格更高的建筑。返回这些建筑的下标。
 *
 * 示例：[4,2,3,1] => [0,2,3]
 *
 * 思路：从右向左维护右侧最大高度，当前高度严格大于它就能看见海。
 * 时间 O(n)，空间 O(1)（不计答案）
 */

export function findBuildings(heights: number[]): number[] {
  const result: number[] = [];
  let maxHeight = 0;
  for (let i = heights.length - 1; i >= 0; i -= 1) {
    if (heights[i] > maxHeight) {
      result.push(i);
      maxHeight = heights[i];
    }
  }
  result.reverse();
  return result;
}

console.log(findBuildings([4, 2, 3, 1]));
