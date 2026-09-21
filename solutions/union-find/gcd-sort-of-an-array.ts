/**
 * 通过最大公因数排序数组
 * 难度：★★★★☆
 * 若 gcd(nums[i], nums[j]) > 1，就可以交换这两个位置。判断能否把数组排成非降序。
 *
 * 示例：[7,21,3] => true
 *
 * 思路：共享质因数的下标可以任意重排。每个连通块内的值排序后，必须与目标位置上的值一致。
 * 时间 O(n log n + n * sqrt(max))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

function smallestPrimeFactors(max: number): number[] {
  const factors = Array.from({ length: max + 1 }, (_, index) => index);
  for (let prime = 2; prime * prime <= max; prime++) {
    if (factors[prime] !== prime) {
      continue;
    }
    for (let value = prime * prime; value <= max; value += prime) {
      if (factors[value] === value) {
        factors[value] = prime;
      }
    }
  }
  return factors;
}

export function gcdSort(nums: number[]): boolean {
  let max = 0;
  for (const value of nums) {
    max = Math.max(max, value);
  }
  const smallest = smallestPrimeFactors(max);
  const uf = new UnionFind(nums.length);
  const owner = new Map<number, number>();
  for (let index = 0; index < nums.length; index++) {
    let value = nums[index];
    while (value > 1) {
      const prime = smallest[value];
      const previous = owner.get(prime);
      if (previous === undefined) {
        owner.set(prime, index);
      } else {
        uf.union(index, previous);
      }
      while (value % prime === 0) {
        value = Math.floor(value / prime);
      }
    }
  }

  const sorted = nums.slice().sort((a, b) => a - b);
  const groups = new Map<number, number[]>();
  for (let index = 0; index < nums.length; index++) {
    const root = uf.find(index);
    const list = groups.get(root);
    if (list) {
      list.push(index);
    } else {
      groups.set(root, [index]);
    }
  }
  for (const indexes of groups.values()) {
    const values = indexes.map((index) => nums[index]).sort((a, b) => a - b);
    const target = indexes.map((index) => sorted[index]).sort((a, b) => a - b);
    for (let i = 0; i < values.length; i++) {
      if (values[i] !== target[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log(gcdSort([7, 21, 3]));
