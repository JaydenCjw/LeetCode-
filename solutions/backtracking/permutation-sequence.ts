/**
 * 排列序列
 * 难度：★★★★☆
 * 把 1..n 的全排列按字典序编号（从 1 开始），返回第 k 个。
 *
 * 示例：n = 3, k = 3 => "213"
 *
 * 思路：阶乘进位。剩下 i 个数时，每组有 (i-1)! 个排列，直接定位当前位并删掉该数字。
 * 时间 O(n^2)，空间 O(n)
 */

export function getPermutation(n: number, k: number): string {
  const nums: number[] = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i);
  }
  let fact = 1;
  for (let i = 2; i <= n; i++) {
    fact *= i;
  }
  let rank = k - 1;
  let answer = "";
  for (let i = n; i >= 1; i--) {
    fact = Math.floor(fact / i);
    const index = Math.floor(rank / fact);
    answer += String(nums[index]);
    nums.splice(index, 1);
    rank %= fact;
  }
  return answer;
}

console.log(getPermutation(3, 3));
