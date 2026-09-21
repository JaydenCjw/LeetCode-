/**
 * 有效的括号
 * 判断字符串中的括号是否有效（开闭匹配且顺序正确）。
 *
 * 示例：s = "()[]{}" => true；s = "(]" => false
 *
 * 思路：栈匹配开括号。
 * 时间 O(n)，空间 O(n)
 */

export function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    if (stack.pop() !== pairs[char]) {
      return false;
    }
  }

  return stack.length === 0;
}

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
