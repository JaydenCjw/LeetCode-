/**
 * 计算质数
 * 统计所有小于非负整数 n 的质数数量。
 *
 * 示例：n = 10 => 4（2,3,5,7）
 *
 * 思路：埃氏筛。
 * 时间 O(n log log n)，空间 O(n)
 */

export function countPrimes(n: number): number {
  if (n <= 2) return 0;

  const isPrime = new Array<boolean>(n).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) continue;
    for (let j = i * i; j < n; j += i) {
      isPrime[j] = false;
    }
  }

  return isPrime.reduce((count, flag) => count + (flag ? 1 : 0), 0);
}

console.log(countPrimes(10));
console.log(countPrimes(0));
