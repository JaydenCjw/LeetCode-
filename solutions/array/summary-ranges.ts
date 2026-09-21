/**
 * 汇总区间
 * 难度：★★☆☆☆
 * 无重复升序数组，将连续数字汇总成区间字符串。
 *
 * 示例：[0,1,2,4,5,7] => ["0->2","4->5","7"]
 *
 * 思路：双指针找每一段连续区间的终点。
 * 时间 O(n)，空间 O(1)（不计输出）
 */

export function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];
  for (let i = 0; i < nums.length; i++) {
    const start = nums[i];
    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
      i++;
    }
    result.push(start === nums[i] ? `${start}` : `${start}->${nums[i]}`);
  }
  return result;
}

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
