/**
 * 给字符串添加加粗标签
 * 难度：★★☆☆☆
 * words 中的单词若作为 s 的子串出现，就把对应区间加粗。重叠或相邻的加粗区间要合并。
 *
 * 示例：s = "abcxyz123"，words = ["abc","123"] => "<b>abc</b>xyz<b>123</b>"
 *
 * 思路：单词插入 Trie，标记所有命中区间，再把连续的加粗段包上标签。
 * 时间 O(n * 最长单词)，空间 O(总字符数 + n)
 */

class BoldNode {
  children = new Map<string, BoldNode>();
  isEnd = false;
}

export function addBoldTag(s: string, words: string[]): string {
  const root = new BoldNode();
  for (const word of words) {
    let node = root;
    for (const char of word) {
      let next = node.children.get(char);
      if (!next) {
        next = new BoldNode();
        node.children.set(char, next);
      }
      node = next;
    }
    node.isEnd = true;
  }

  const bold = new Array<boolean>(s.length).fill(false);
  for (let start = 0; start < s.length; start++) {
    let node = root;
    for (let end = start; end < s.length; end++) {
      const next = node.children.get(s[end]);
      if (!next) {
        break;
      }
      node = next;
      if (node.isEnd) {
        for (let index = start; index <= end; index++) {
          bold[index] = true;
        }
      }
    }
  }

  let answer = "";
  for (let index = 0; index < s.length; index++) {
    if (bold[index] && (index === 0 || !bold[index - 1])) {
      answer += "<b>";
    }
    answer += s[index];
    if (bold[index] && (index === s.length - 1 || !bold[index + 1])) {
      answer += "</b>";
    }
  }
  return answer;
}

console.log(addBoldTag("abcxyz123", ["abc", "123"]));
