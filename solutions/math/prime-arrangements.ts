/**
 * 质数排列
 * 难度：★★☆☆☆
 * 把 1 到 n 排成一列，质数只能放在质数下标上（下标从 1 开始）。返回方案数，对 10^9+7 取模。
 *
 * 示例：n=5 => 12
 *
 * 思路：质数下标个数为 p，则方案是 p! * (n-p)!。
 * 时间 O(n sqrt n) 或埃氏筛 O(n log log n)，空间 O(n)
 */

const PRIME_MOD = 1_000_000_007;

function countPrimesUpTo(n: number): number {
  if (n < 2) {
    return 0;
  }
  const composite = Array.from({ length: n + 1 }, () => false);
  let count = 0;
  for (let value = 2; value <= n; value += 1) {
    if (composite[value]) {
      continue;
    }
    count += 1;
    for (let multiple = value * 2; multiple <= n; multiple += value) {
      composite[multiple] = true;
    }
  }
  return count;
}

export function numPrimeArrangements(n: number): number {
  const primes = countPrimesUpTo(n);
  let answer = 1;
  for (let value = 2; value <= primes; value += 1) {
    answer = (answer * value) % PRIME_MOD;
  }
  for (let value = 2; value <= n - primes; value += 1) {
    answer = (answer * value) % PRIME_MOD;
  }
  return answer;
}

console.log(numPrimeArrangements(5));
