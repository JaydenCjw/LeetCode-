/**
 * 所有前缀都存在的最长单词
 * 难度：★★☆☆☆
 * 若一个单词的每个非空前缀都在 words 里，它就是合法单词。返回最长的合法单词，并列时取字典序最小。
 *
 * 示例：["k","ki","kir","kira","kiran"] => "kiran"
 *
 * 思路：插入 Trie 后只沿着单词结尾下探，在合法路径里取最长且字典序最小的单词。
 * 时间 O(总字符数)，空间 O(总字符数)
 */

class PrefixWordNode {
  children = new Map<string, PrefixWordNode>();
  isEnd = false;
}

export function longestWord(words: string[]): string {
  const root = new PrefixWordNode();
  for (const word of words) {
    let node = root;
    for (const char of word) {
      let next = node.children.get(char);
      if (!next) {
        next = new PrefixWordNode();
        node.children.set(char, next);
      }
      node = next;
    }
    node.isEnd = true;
  }

  let best = "";
  const dfs = (node: PrefixWordNode, path: string): void => {
    if (path.length > 0) {
      if (!node.isEnd) {
        return;
      }
      if (path.length > best.length || (path.length === best.length && path < best)) {
        best = path;
      }
    }
    for (const [char, child] of node.children) {
      dfs(child, path + char);
    }
  };
  dfs(root, "");
  return best;
}

console.log(longestWord(["k", "ki", "kir", "kira", "kiran"]));
