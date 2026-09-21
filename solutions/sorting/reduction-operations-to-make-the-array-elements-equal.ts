/**
 * 使数组元素相等的最少操作次数
 * 难度：★★☆☆☆
 * 每次可以把一个元素改成数组里某个严格更小的值。返回把全部元素变成相等所需的最少操作次数。
 *
 * 示例：[5,1,3] => 3
 *
 * 思路：升序后，每遇到一个新的更大值，后续元素都要多一次“降到下一档”。每个元素的操作数等于它左侧不同更小值的个数。
 * 时间 O(n log n)，空间 O(1) 额外
 */

export function reductionOperations(nums: number[]): number {
  const values = nums.slice().sort((a, b) => a - b);
  let steps = 0;
  let operations = 0;
  for (let index = 1; index < values.length; index += 1) {
    if (values[index] !== values[index - 1]) {
      steps += 1;
    }
    operations += steps;
  }
  return operations;
}

console.log(reductionOperations([5, 1, 3]));
