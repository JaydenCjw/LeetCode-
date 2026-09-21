/**
 * 删除最外层的括号
 * 难度：★☆☆☆☆
 * 有效括号串由若干原语分解而成。去掉每个原语最外层的一对括号。
 *
 * 示例："(()())(())" => "()()()"
 *
 * 思路：深度从 0 变成 1 的左括号、以及深度回到 0 的右括号是最外层，不输出。
 * 时间 O(n)，空间 O(n)
 */

export function removeOuterParentheses(s: string): string {
  const result: string[] = [];
  let depth = 0;
  for (const char of s) {
    if (char === "(") {
      if (depth > 0) {
        result.push(char);
      }
      depth += 1;
    } else {
      depth -= 1;
      if (depth > 0) {
        result.push(char);
      }
    }
  }
  return result.join("");
}

console.log(removeOuterParentheses("(()())(())"));
