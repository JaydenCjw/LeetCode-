/**
 * 通过删除字母匹配到字典里最长单词
 * 难度：★★☆☆☆
 * 在 dictionary 中找出是 s 子序列的最长单词。并列时返回字典序最小的；都不行返回空串。
 *
 * 示例：s = "abpcplea"，dictionary = ["ale","apple","monkey","plea"] => "apple"
 *
 * 思路：词典建成 Trie。从 s 中按顺序为每个子节点寻找下一次出现的字符，记录最长且字典序最小的单词。
 * 时间 O(词典字符数 * s 长度)，空间 O(词典字符数)
 */

class DeleteNode {
  children = new Map<string, DeleteNode>();
  isEnd = false;
}

export function findLongestWord(s: string, dictionary: string[]): string {
  const root = new DeleteNode();
  for (const word of dictionary) {
    let node = root;
    for (const char of word) {
      let next = node.children.get(char);
      if (!next) {
        next = new DeleteNode();
        node.children.set(char, next);
      }
      node = next;
    }
    node.isEnd = true;
  }

  let best = "";
  const dfs = (node: DeleteNode, index: number, path: string): void => {
    if (node.isEnd) {
      if (path.length > best.length || (path.length === best.length && path < best)) {
        best = path;
      }
    }
    for (const [char, child] of node.children) {
      const found = s.indexOf(char, index);
      if (found !== -1) {
        dfs(child, found + 1, path + char);
      }
    }
  };
  dfs(root, 0, "");
  return best;
}

console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]));
