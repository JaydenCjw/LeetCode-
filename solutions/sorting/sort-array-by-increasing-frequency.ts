/**
 * 按照频率将数组升序排序
 * 难度：★★☆☆☆
 * 按出现次数升序排序；次数相同则数值更大的在前。
 *
 * 示例：nums=[1,1,2,2,2,3] => [3,1,1,2,2,2]
 *
 * 思路：计数后自定义排序。
 * 时间 O(n log n)，空间 O(n)
 */

export function frequencySort(nums: number[]): number[] {
  const count = new Map<number, number>();
  for (const value of nums) {
    count.set(value, (count.get(value) ?? 0) + 1);
  }
  return nums.slice().sort((a, b) => {
    const freqA = count.get(a) ?? 0;
    const freqB = count.get(b) ?? 0;
    if (freqA !== freqB) {
      return freqA - freqB;
    }
    return b - a;
  });
}

console.log(frequencySort([1, 1, 2, 2, 2, 3]));
