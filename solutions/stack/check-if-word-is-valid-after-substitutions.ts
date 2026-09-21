/**
 * 检查替换后的词是否有效
 * 难度：★★☆☆☆
 * 字符串只含 a、b、c。若能不断删掉子串 "abc" 直到变成空串，则它有效。
 *
 * 示例："aabcbc" => true
 *
 * 思路：栈。每当栈顶三个字符组成 abc 就弹出。
 * 时间 O(n)，空间 O(n)
 */

export function isValid(s: string): boolean {
  const stack: string[] = [];
  for (const char of s) {
    stack.push(char);
    const size = stack.length;
    if (
      size >= 3 &&
      stack[size - 3] === "a" &&
      stack[size - 2] === "b" &&
      stack[size - 1] === "c"
    ) {
      stack.pop();
      stack.pop();
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(isValid("aabcbc"));
