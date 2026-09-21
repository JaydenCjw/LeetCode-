/**
 * 最小的等价字符串
 * 难度：★★★☆☆
 * s1[i] 与 s2[i] 等价，等价可传递。把 baseStr 每个字符换成它所在等价类中字典序最小的字符。
 *
 * 示例：s1 = "parker"，s2 = "morris"，baseStr = "parser" => "makkek"
 *
 * 思路：26 个字母做并查集。每个字母映射到同组里最小的字母，再改写 baseStr。
 * 时间 O(n)，空间 O(1)
 */

import { UnionFind } from "@/union-find";

export function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
  const uf = new UnionFind(26);
  for (let i = 0; i < s1.length; i++) {
    uf.union(s1.charCodeAt(i) - 97, s2.charCodeAt(i) - 97);
  }

  const best = new Array<number>(26).fill(26);
  for (let char = 0; char < 26; char++) {
    const root = uf.find(char);
    best[root] = Math.min(best[root], char);
  }

  let answer = "";
  for (const char of baseStr) {
    const root = uf.find(char.charCodeAt(0) - 97);
    answer += String.fromCharCode(97 + best[root]);
  }
  return answer;
}

console.log(smallestEquivalentString("parker", "morris", "parser"));
