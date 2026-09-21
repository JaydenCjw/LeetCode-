/**
 * 删除并获得点数
 * 难度：★★★☆☆
 * 选中 nums[i] 得对应点数，并删除所有等于该值 ±1 的元素。求最大点数。
 *
 * 思路：按数值聚合后等价于打家劫舍。
 * 时间 O(n + m)，空间 O(m)
 */

export function deleteAndEarn(nums: number[]): number {
  const max = Math.max(...nums);
  const points = new Array<number>(max + 1).fill(0);
  for (const num of nums) {
    points[num] += num;
  }

  let prev2 = 0;
  let prev1 = 0;
  for (const point of points) {
    const current = Math.max(prev1, prev2 + point);
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

console.log(deleteAndEarn([3, 4, 2]));
