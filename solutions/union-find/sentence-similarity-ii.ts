/**
 * 句子相似性 II
 * 难度：★★★☆☆
 * 相似词对可传递。判断两个等长句子是否逐词相似（相同或属于同一相似组）。
 *
 * 示例：sentence1 = ["great","acting","skills"]，sentence2 = ["fine","drama","talent"]，
 * similarPairs = [["great","fine"],["drama","acting"],["skills","talent"]] => true
 *
 * 思路：给单词编号后并查集合并相似对，再逐位置检查是否连通或相等。
 * 时间 O((词数+词对数) α(n))，空间 O(词数)
 */

import { UnionFind } from "@/union-find";

export function areSentencesSimilarTwo(
  sentence1: string[],
  sentence2: string[],
  similarPairs: string[][],
): boolean {
  if (sentence1.length !== sentence2.length) {
    return false;
  }
  const index = new Map<string, number>();
  const idOf = (word: string): number => {
    const found = index.get(word);
    if (found !== undefined) {
      return found;
    }
    const id = index.size;
    index.set(word, id);
    return id;
  };

  for (const word of sentence1) {
    idOf(word);
  }
  for (const word of sentence2) {
    idOf(word);
  }
  for (const pair of similarPairs) {
    idOf(pair[0]);
    idOf(pair[1]);
  }

  const uf = new UnionFind(index.size);
  for (const pair of similarPairs) {
    uf.union(idOf(pair[0]), idOf(pair[1]));
  }

  for (let i = 0; i < sentence1.length; i++) {
    if (sentence1[i] === sentence2[i]) {
      continue;
    }
    if (!uf.connected(idOf(sentence1[i]), idOf(sentence2[i]))) {
      return false;
    }
  }
  return true;
}

console.log(
  areSentencesSimilarTwo(
    ["great", "acting", "skills"],
    ["fine", "drama", "talent"],
    [
      ["great", "fine"],
      ["drama", "acting"],
      ["skills", "talent"],
    ],
  ),
);
