/**
 * 区域和检索 - 数组不可变
 * 难度：★★☆☆☆
 * 对不变数组多次求下标 left 到 right（含）的区间和。
 *
 * 示例：nums = [-2,0,3,-5,2,-1]，sumRange(0,2) = 1，sumRange(2,5) = -1，sumRange(0,5) = -3
 *
 * 思路：前缀和，区间和等于两个前缀之差。
 * 时间 预处理 O(n)，查询 O(1)，空间 O(n)
 */

export class NumArray {
  private readonly prefix: number[];

  constructor(nums: number[]) {
    this.prefix = new Array<number>(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
      this.prefix[i + 1] = this.prefix[i] + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    return this.prefix[right + 1] - this.prefix[left];
  }
}

const numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArray.sumRange(0, 2));
console.log(numArray.sumRange(2, 5));
console.log(numArray.sumRange(0, 5));
