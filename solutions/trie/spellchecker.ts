/**
 * 拼写检查
 * 难度：★★★☆☆
 * 按优先级回答查询：完全匹配；否则大小写不敏感匹配；否则把元音当成同一类后再匹配。都取词典中最先出现的词，否则返回空串。
 *
 * 示例：wordlist = ["KiTe","kite","hare","Hare"]
 * queries = ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"]
 * => ["kite","KiTe","KiTe","Hare","hare","","","KiTe","","KiTe"]
 *
 * 思路：精确匹配用集合。大小写折叠和元音折叠各建一棵 Trie，结尾只保留词典中第一次出现的原词。
 * 时间 O(词典与查询总长)，空间 O(词典总长)
 */

class SpellNode {
  children = new Map<string, SpellNode>();
  word: string | null = null;
}

function insertSpell(root: SpellNode, key: string, original: string): void {
  let node = root;
  for (const char of key) {
    let next = node.children.get(char);
    if (!next) {
      next = new SpellNode();
      node.children.set(char, next);
    }
    node = next;
  }
  if (node.word === null) {
    node.word = original;
  }
}

function findSpell(root: SpellNode, key: string): string {
  let node = root;
  for (const char of key) {
    const next = node.children.get(char);
    if (!next) {
      return "";
    }
    node = next;
  }
  return node.word ?? "";
}

function devowel(word: string): string {
  return word.toLowerCase().replace(/[aeiou]/g, "*");
}

export function spellchecker(wordlist: string[], queries: string[]): string[] {
  const exact = new Set(wordlist);
  const lowerRoot = new SpellNode();
  const vowelRoot = new SpellNode();
  for (const word of wordlist) {
    insertSpell(lowerRoot, word.toLowerCase(), word);
    insertSpell(vowelRoot, devowel(word), word);
  }
  return queries.map((query) => {
    if (exact.has(query)) {
      return query;
    }
    const lower = findSpell(lowerRoot, query.toLowerCase());
    if (lower.length > 0) {
      return lower;
    }
    return findSpell(vowelRoot, devowel(query));
  });
}

console.log(
  spellchecker(
    ["KiTe", "kite", "hare", "Hare"],
    ["kite", "Kite", "KiTe", "Hare", "HARE", "Hear", "hear", "keti", "keet", "keto"],
  ),
);
