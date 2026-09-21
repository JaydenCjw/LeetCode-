/**
 * 最大公约数遍历
 * 难度：★★★★☆
 * 下标 i、j 在 gcd(nums[i], nums[j]) > 1 时可以互相到达。判断能否从任意下标走到任意下标。
 *
 * 示例：[2,3,6] => true
 *
 * 思路：按下标与质因数做并查集，全部下标处于同一连通分量即可遍历。
 * 时间 O(n * sqrt(max))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

function factorsOf(value: number): number[] {
  const factors: number[] = [];
  let current = value;
  for (let prime = 2; prime * prime <= current; prime++) {
    if (current % prime !== 0) {
      continue;
    }
    factors.push(prime);
    while (current % prime === 0) {
      current = Math.floor(current / prime);
    }
  }
  if (current > 1) {
    factors.push(current);
  }
  return factors;
}

export function canTraverseAllPairs(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }
  const uf = new UnionFind(nums.length);
  const owner = new Map<number, number>();
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] === 1) {
      return false;
    }
    for (const factor of factorsOf(nums[index])) {
      const previous = owner.get(factor);
      if (previous === undefined) {
        owner.set(factor, index);
      } else {
        uf.union(index, previous);
      }
    }
  }
  return uf.count === 1;
}

console.log(canTraverseAllPairs([2, 3, 6]));
