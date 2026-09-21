/**
 * 计算右侧小于当前元素的个数
 * 难度：★★★★☆
 * 对每个下标 i，统计右侧严格小于 nums[i] 的元素个数。
 *
 * 示例：[5,2,6,1] => [2,1,1,0]
 *
 * 思路：归并排序下标。合并时，左侧元素出列前，右侧已经取出的都比它小。
 * 时间 O(n log n)，空间 O(n)
 */

export function countSmaller(nums: number[]): number[] {
  const counts = Array.from({ length: nums.length }, () => 0);
  let indexes = nums.map((_, index) => index);

  const merge = (left: number, mid: number, right: number): void => {
    const merged: number[] = [];
    let i = left;
    let j = mid + 1;
    while (i <= mid && j <= right) {
      if (nums[indexes[i]] <= nums[indexes[j]]) {
        counts[indexes[i]] += j - (mid + 1);
        merged.push(indexes[i]);
        i += 1;
      } else {
        merged.push(indexes[j]);
        j += 1;
      }
    }
    while (i <= mid) {
      counts[indexes[i]] += j - (mid + 1);
      merged.push(indexes[i]);
      i += 1;
    }
    while (j <= right) {
      merged.push(indexes[j]);
      j += 1;
    }
    for (let offset = 0; offset < merged.length; offset += 1) {
      indexes[left + offset] = merged[offset];
    }
  };

  const sort = (left: number, right: number): void => {
    if (left >= right) {
      return;
    }
    const mid = (left + right) >> 1;
    sort(left, mid);
    sort(mid + 1, right);
    merge(left, mid, right);
  };

  if (nums.length > 0) {
    sort(0, nums.length - 1);
  }
  return counts;
}

console.log(countSmaller([5, 2, 6, 1]));
