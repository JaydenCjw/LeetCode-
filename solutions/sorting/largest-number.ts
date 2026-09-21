/**
 * 最大数
 * 难度：★★★☆☆
 * 重排非负整数，使其拼接成的数字最大。
 *
 * 示例：[3,30,34,5,9] => "9534330"
 *
 * 思路：按 a+b 与 b+a 的字典序排序。
 * 时间 O(n log n)，空间 O(n)
 */

export function largestNumber(nums: number[]): string {
  const texts = nums.map(String).sort((a, b) => (a + b > b + a ? -1 : 1));
  if (texts[0] === "0") {
    return "0";
  }
  return texts.join("");
}

console.log(largestNumber([3, 30, 34, 5, 9]));
