/**
 * 最长公共前缀
 * 查找字符串数组的最长公共前缀；无公共前缀返回空串。
 *
 * 示例：strs = ["flower","flow","flight"] => "fl"
 *
 * 思路：以第一个串为基准，逐字符比对。
 * 时间 O(总字符数)，空间 O(1)
 */

export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
