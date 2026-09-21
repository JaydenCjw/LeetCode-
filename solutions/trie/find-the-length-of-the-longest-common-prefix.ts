/**
 * 最长公共前缀的长度
 * 难度：★★★☆☆
 * 在 arr1 和 arr2 中各取一个整数，把它们写成十进制后，返回能得到的最长公共前缀长度。
 *
 * 示例：arr1 = [1,10,100]，arr2 = [1000] => 3
 *
 * 思路：把 arr1 的十进制形式插入 Trie，再让 arr2 的每个数沿 Trie 走，记录最长匹配长度。
 * 时间 O(数字个数 * 位数)，空间 O(数字个数 * 位数)
 */

class DigitNode {
  children = new Map<string, DigitNode>();
}

export function longestCommonPrefixLength(arr1: number[], arr2: number[]): number {
  const root = new DigitNode();
  for (const value of arr1) {
    let node = root;
    for (const char of String(value)) {
      let next = node.children.get(char);
      if (!next) {
        next = new DigitNode();
        node.children.set(char, next);
      }
      node = next;
    }
  }

  let best = 0;
  for (const value of arr2) {
    let node = root;
    let length = 0;
    for (const char of String(value)) {
      const next = node.children.get(char);
      if (!next) {
        break;
      }
      node = next;
      length++;
    }
    best = Math.max(best, length);
  }
  return best;
}

console.log(longestCommonPrefixLength([1, 10, 100], [1000]));
