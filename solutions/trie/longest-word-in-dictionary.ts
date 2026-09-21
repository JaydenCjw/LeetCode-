/**
 * 词典中最长的单词
 * 难度：★★☆☆☆
 * 在单词数组中找出最长的单词，且它的每个前缀也都是数组中的单词。并列时返回字典序最小的。
 *
 * 示例：["w","wo","wor","worl","world"] => "world"
 *
 * 思路：全部单词插入 Trie。只沿着单词结尾节点向下走，记录最长且字典序最小的路径。
 * 时间 O(总字符数)，空间 O(总字符数)
 */

class LongestWordNode {
  children = new Map<string, LongestWordNode>();
  isEnd = false;
}

export function longestWord(words: string[]): string {
  const root = new LongestWordNode();
  for (const word of words) {
    let node = root;
    for (const char of word) {
      let next = node.children.get(char);
      if (!next) {
        next = new LongestWordNode();
        node.children.set(char, next);
      }
      node = next;
    }
    node.isEnd = true;
  }

  let best = "";
  const dfs = (node: LongestWordNode, path: string): void => {
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

console.log(longestWord(["w", "wo", "wor", "worl", "world"]));
