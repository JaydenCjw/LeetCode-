/**
 * 按公因数计算最大组件大小
 * 难度：★★★★☆
 * 若两个数的最大公约数大于 1，则它们连通。返回最大连通分量的大小。
 *
 * 示例：[4,6,15,35] => 4
 *
 * 思路：每个数与自己的质因数对应的代表下标做并查集，共享质因数的数会连到一起。
 * 时间 O(n * sqrt(max))，空间 O(n)
 */

import { UnionFind } from "@/union-find";

function primeFactors(value: number): number[] {
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

export function largestComponentSize(nums: number[]): number {
  const uf = new UnionFind(nums.length);
  const size = new Array<number>(nums.length).fill(1);
  const owner = new Map<number, number>();
  let best = 1;

  const unite = (left: number, right: number): void => {
    const rootLeft = uf.find(left);
    const rootRight = uf.find(right);
    if (rootLeft === rootRight) {
      return;
    }
    uf.union(left, right);
    const root = uf.find(left);
    size[root] = size[rootLeft] + size[rootRight];
    best = Math.max(best, size[root]);
  };

  for (let index = 0; index < nums.length; index++) {
    for (const factor of primeFactors(nums[index])) {
      const previous = owner.get(factor);
      if (previous === undefined) {
        owner.set(factor, index);
      } else {
        unite(index, previous);
      }
    }
  }
  return best;
}

console.log(largestComponentSize([4, 6, 15, 35]));
