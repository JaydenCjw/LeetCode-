/**
 * 基数排序
 * 难度：★★☆☆☆
 * 对非负整数做最低位优先的基数排序，输出升序结果。
 *
 * 示例：[170,45,75,90,802,24,2,66] => [2,24,45,66,75,90,170,802]
 *
 * 思路：按个位、十位、百位依次做稳定的计数排序。
 * 时间 O(n * 位数)，空间 O(n)
 */

function countingByDigit(nums: number[], place: number): number[] {
  const buckets: number[][] = Array.from({ length: 10 }, () => []);
  for (const value of nums) {
    const digit = Math.floor(value / place) % 10;
    buckets[digit].push(value);
  }
  const result: number[] = [];
  for (const bucket of buckets) {
    result.push(...bucket);
  }
  return result;
}

export function radixSort(nums: number[]): number[] {
  let values = nums.slice();
  let max = 0;
  for (const value of values) {
    if (value > max) {
      max = value;
    }
  }
  for (let place = 1; Math.floor(max / place) > 0; place *= 10) {
    values = countingByDigit(values, place);
  }
  return values;
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
