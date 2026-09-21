/**
 * 字符串中的加粗单词
 * 难度：★★☆☆☆
 * words 里的单词如果出现在 s 中，就把覆盖到的字符加粗。相邻或重叠的加粗段合并成一个 <b> 标签。
 *
 * 示例：words = ["ab","bc"]，s = "aabcd" => "a<b>abc</b>d"
 *
 * 思路：单词插入 Trie 后标记所有命中区间，再把连续 true 段包上标签。
 * 时间 O(n * 最长单词)，空间 O(总字符数 + n)
 */

class BoldWordNode {
  children = new Map<string, BoldWordNode>();
  isEnd = false;
}

export function boldWords(words: string[], s: string): string {
  const root = new BoldWordNode();
  for (const word of words) {
    let node = root;
    for (const char of word) {
      let next = node.children.get(char);
      if (!next) {
        next = new BoldWordNode();
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

console.log(boldWords(["ab", "bc"], "aabcd"));
