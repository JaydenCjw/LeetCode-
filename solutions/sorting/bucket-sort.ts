/**
 * 桶排序
 * 难度：★★☆☆☆
 * 对 [0,1) 区间内的浮点数做桶排序，输出升序结果。
 *
 * 示例：[0.42,0.32,0.33,0.52,0.37,0.47,0.51] => 升序
 *
 * 思路：按值乘以桶数落入桶，桶内插入排序，再按桶顺序拼接。
 * 时间平均 O(n)，空间 O(n)
 */

export function bucketSort(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  }
  const buckets: number[][] = Array.from({ length: nums.length }, () => []);
  for (const value of nums) {
    const index = Math.min(nums.length - 1, Math.floor(value * nums.length));
    const bucket = buckets[index];
    let insertAt = bucket.length;
    for (let cursor = 0; cursor < bucket.length; cursor += 1) {
      if (value < bucket[cursor]) {
        insertAt = cursor;
        break;
      }
    }
    bucket.splice(insertAt, 0, value);
  }
  const result: number[] = [];
  for (const bucket of buckets) {
    result.push(...bucket);
  }
  return result;
}

console.log(bucketSort([0.42, 0.32, 0.33, 0.52, 0.37, 0.47, 0.51]));
