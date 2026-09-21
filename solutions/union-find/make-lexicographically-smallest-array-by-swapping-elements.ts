/**
 * 交换后字典序最小的数组
 * 难度：★★★☆☆
 * 若两个元素差的绝对值不超过 limit，就可以交换它们（可传递）。返回能得到的字典序最小数组。
 *
 * 示例：nums = [1,5,3,9,8]，limit = 2 => [1,3,5,8,9]
 *
 * 思路：按值排序后，相邻差值不超过 limit 的下标并到一组。组内把值从小到大填回从小到大的下标。
 * 时间 O(n log n)，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function lexicographicallySmallestArray(nums: number[], limit: number): number[] {
  const order = Array.from({ length: nums.length }, (_, index) => index).sort((a, b) => nums[a] - nums[b]);
  const uf = new UnionFind(nums.length);
  for (let i = 1; i < order.length; i++) {
    const previous = order[i - 1];
    const current = order[i];
    if (nums[current] - nums[previous] <= limit) {
      uf.union(previous, current);
    }
  }

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

  const answer = nums.slice();
  for (const indexes of groups.values()) {
    const positions = indexes.slice().sort((a, b) => a - b);
    const values = indexes.map((index) => nums[index]).sort((a, b) => a - b);
    for (let i = 0; i < positions.length; i++) {
      answer[positions[i]] = values[i];
    }
  }
  return answer;
}

console.log(lexicographicallySmallestArray([1, 5, 3, 9, 8], 2));
