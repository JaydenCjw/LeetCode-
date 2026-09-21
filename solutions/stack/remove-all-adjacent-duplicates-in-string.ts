/**
 * 删除字符串中的所有相邻重复项
 * 难度：★☆☆☆☆
 * 反复删除两个相邻且相同的字符，返回最终字符串。
 *
 * 示例："abbaca" => "ca"
 *
 * 思路：栈顶与当前字符相同就弹出，否则入栈。
 * 时间 O(n)，空间 O(n)
 */

export function removeDuplicates(s: string): string {
  const stack: string[] = [];
  for (const char of s) {
    if (stack[stack.length - 1] === char) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}

console.log(removeDuplicates("abbaca"));
