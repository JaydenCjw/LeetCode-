/**
 * 子集（位掩码）
 * 难度：★★☆☆☆
 * 返回数组所有子集。元素互不相同。
 *
 * 示例：[1,2,3] 共 8 个子集
 *
 * 思路：0 到 2^n-1 的每个掩码对应一个子集。
 * 时间 O(n*2^n)，空间 O(n*2^n)
 */

export function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const size = 1 << nums.length;
  for (let mask = 0; mask < size; mask++) {
    const subset: number[] = [];
    for (let bit = 0; bit < nums.length; bit++) {
      if ((mask & (1 << bit)) !== 0) {
        subset.push(nums[bit]);
      }
    }
    result.push(subset);
  }
  return result;
}

console.log(subsets([1, 2, 3]).length);
