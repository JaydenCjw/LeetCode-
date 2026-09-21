/**
 * 可被 5 整除的二进制前缀
 * 难度：★★☆☆☆
 * nums[i] 是 0 或 1。answer[i] 表示前 i+1 位组成的二进制数能否被 5 整除。
 *
 * 示例：[0,1,1] => [true,false,false]
 *
 * 思路：只保留对 5 的余数，避免大整数。
 * 时间 O(n)，空间 O(1)
 */

export function prefixesDivBy5(nums: number[]): boolean[] {
  const answer: boolean[] = [];
  let remainder = 0;
  for (const bit of nums) {
    remainder = (remainder * 2 + bit) % 5;
    answer.push(remainder === 0);
  }
  return answer;
}

console.log(prefixesDivBy5([0, 1, 1]));
