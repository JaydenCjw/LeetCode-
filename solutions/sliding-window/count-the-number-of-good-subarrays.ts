/**
 * 统计好子数组的数目
 * 难度：★★★☆☆
 * 子数组中相同值组成的数对个数不少于 k 时称为好子数组。返回好子数组个数。
 *
 * 示例：nums = [1,1,1,1,1], k = 10 => 1；nums = [3,1,4,3,2,2,4], k = 2 => 4
 *
 * 思路：加入元素时数对增加“已有频次”。窗口内数对不少于 k 后尽量收缩，累加合法起点。
 * 时间 O(n)，空间 O(n)
 */

export function countGood(nums: number[], k: number): number {
  const freq = new Map<number, number>();
  let pairs = 0;
  let left = 0;
  let result = 0;
  for (let right = 0; right < nums.length; right++) {
    const rightCount = freq.get(nums[right]) ?? 0;
    pairs += rightCount;
    freq.set(nums[right], rightCount + 1);
    while (pairs >= k) {
      const leftCount = (freq.get(nums[left]) ?? 0) - 1;
      pairs -= leftCount;
      if (leftCount === 0) {
        freq.delete(nums[left]);
      } else {
        freq.set(nums[left], leftCount);
      }
      left++;
    }
    result += left;
  }
  return result;
}

console.log(countGood([1, 1, 1, 1, 1], 10));
console.log(countGood([3, 1, 4, 3, 2, 2, 4], 2));
