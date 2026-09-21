/**
 * 平方数之和
 * 难度：★★☆☆☆
 * 判断是否存在整数 a、b（可以为 0）使 a^2 + b^2 = c。
 *
 * 示例：c = 5 => true
 *
 * 思路：左指针从 0、右指针从 sqrt(c) 向中间夹逼。
 * 时间 O(sqrt(c))，空间 O(1)
 */

export function judgeSquareSum(c: number): boolean {
  let left = 0;
  let right = Math.floor(Math.sqrt(c));
  while (left <= right) {
    const sum = left * left + right * right;
    if (sum === c) {
      return true;
    }
    if (sum < c) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

console.log(judgeSquareSum(5));
