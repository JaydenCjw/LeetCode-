/**
 * 交换字符串中的元素
 * 难度：★★★☆☆
 * 可以任意次交换 pairs 中下标对应的字符。返回能得到的字典序最小字符串。
 *
 * 示例：s = "dcab"，pairs = [[0,3],[1,2]] => "bacd"
 *
 * 思路：可交换下标构成连通块。每个连通块内的字符排序后，按位置从小到大填回。
 * 时间 O(n log n)，空间 O(n)
 */

import { UnionFind } from "@/union-find";

export function smallestStringWithSwaps(s: string, pairs: number[][]): string {
  const uf = new UnionFind(s.length);
  for (const [left, right] of pairs) {
    uf.union(left, right);
  }

  const groups = new Map<number, number[]>();
  for (let i = 0; i < s.length; i++) {
    const root = uf.find(i);
    const list = groups.get(root);
    if (list) {
      list.push(i);
    } else {
      groups.set(root, [i]);
    }
  }

  const chars = s.split("");
  for (const indexes of groups.values()) {
    const sortedIndexes = indexes.slice().sort((a, b) => a - b);
    const values = indexes.map((index) => chars[index]).sort();
    for (let i = 0; i < sortedIndexes.length; i++) {
      chars[sortedIndexes[i]] = values[i];
    }
  }
  return chars.join("");
}

console.log(
  smallestStringWithSwaps("dcab", [
    [0, 3],
    [1, 2],
  ]),
);
