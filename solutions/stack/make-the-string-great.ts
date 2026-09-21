/**
 * 整理字符串
 * 难度：★★☆☆☆
 * 相邻且仅大小写不同的两个字母是“坏对”，反复删除它们，返回整理后的字符串。
 *
 * 示例："leEeetcode" => "leetcode"
 *
 * 思路：栈顶与当前字符是坏对就弹出，否则入栈。
 * 时间 O(n)，空间 O(n)
 */

export function makeGood(s: string): string {
  const stack: string[] = [];
  for (const char of s) {
    const prev = stack[stack.length - 1];
    if (prev && prev !== char && prev.toLowerCase() === char.toLowerCase()) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}

console.log(makeGood("leEeetcode"));
