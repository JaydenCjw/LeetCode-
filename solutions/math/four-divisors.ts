/**
 * 四因数
 * 难度：★★☆☆☆
 * 若整数恰好有 4 个正因数，把这 4 个因数相加。返回数组中所有这类整数的因数和。
 *
 * 示例：nums=[21,4,7] => 32（只有 21 的因数 1+3+7+21=32）
 *
 * 思路：对每个数枚举到平方根收集因数，个数恰好为 4 时累加。
 * 时间 O(n * sqrt V)，空间 O(1)
 */

function divisorSumIfFour(num: number): number {
  const divisors: number[] = [];
  for (let factor = 1; factor * factor <= num; factor += 1) {
    if (num % factor !== 0) {
      continue;
    }
    divisors.push(factor);
    if (factor * factor !== num) {
      divisors.push(num / factor);
    }
    if (divisors.length > 4) {
      return 0;
    }
  }
  if (divisors.length !== 4) {
    return 0;
  }
  return divisors[0] + divisors[1] + divisors[2] + divisors[3];
}

export function sumFourDivisors(nums: number[]): number {
  let total = 0;
  for (const num of nums) {
    total += divisorSumIfFour(num);
  }
  return total;
}

console.log(sumFourDivisors([21, 4, 7]));
