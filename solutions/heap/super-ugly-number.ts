/**
 * 超级丑数
 * 难度：★★★☆☆
 * 超级丑数的质因子都在给定质数表里。返回第 n 个超级丑数，1 也算。
 *
 * 示例：n = 12，primes = [2,7,13,19] => 32
 *
 * 思路：每个质数维护一个下标，小根堆取出下一个最小的乘积，避免重复。
 * 时间 O(n * p log p)，空间 O(n + p)
 */

import { Heap } from "@/heap";

export function nthSuperUglyNumber(n: number, primes: number[]): number {
  const ugly = [1];
  const index = new Array<number>(primes.length).fill(0);
  const heap = new Heap<[number, number]>(
    (a, b) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]),
  );
  for (let i = 0; i < primes.length; i += 1) {
    heap.push([primes[i], i]);
  }
  while (ugly.length < n) {
    const top = heap.pop();
    const value = top[0];
    const primeIndex = top[1];
    if (value !== ugly[ugly.length - 1]) {
      ugly.push(value);
    }
    index[primeIndex] += 1;
    heap.push([ugly[index[primeIndex]] * primes[primeIndex], primeIndex]);
  }
  return ugly[n - 1];
}

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));
