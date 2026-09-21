/**
 * 区域和检索 - 数组可修改
 * 难度：★★☆☆☆
 * NumArray：update 把下标改成新值，sumRange(left, right) 返回闭区间和。
 *
 * 示例：nums=[1,3,5]。sumRange(0,2)=9，update(1,2) 后 sumRange(0,2)=8
 *
 * 思路：树状数组。更新时写入差值，区间和用两个前缀和相减。
 * 时间每次 O(log n)，空间 O(n)
 */

export class NumArray {
  private readonly bit: number[];
  private readonly values: number[];
  private readonly size: number;

  constructor(nums: number[]) {
    this.size = nums.length;
    this.values = nums.slice();
    this.bit = Array.from({ length: this.size + 1 }, () => 0);
    for (let i = 0; i < this.size; i += 1) {
      this.add(i + 1, nums[i]);
    }
  }

  private add(index: number, delta: number): void {
    let cursor = index;
    while (cursor <= this.size) {
      this.bit[cursor] += delta;
      cursor += cursor & -cursor;
    }
  }

  private prefix(index: number): number {
    let cursor = index;
    let sum = 0;
    while (cursor > 0) {
      sum += this.bit[cursor];
      cursor -= cursor & -cursor;
    }
    return sum;
  }

  update(index: number, val: number): void {
    const delta = val - this.values[index];
    this.values[index] = val;
    this.add(index + 1, delta);
  }

  sumRange(left: number, right: number): number {
    return this.prefix(right + 1) - this.prefix(left);
  }
}

const mutable = new NumArray([1, 3, 5]);
const before = mutable.sumRange(0, 2);
mutable.update(1, 2);
console.log([before, mutable.sumRange(0, 2)]);
