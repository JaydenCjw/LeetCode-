/**
 * 反转每对括号间的子串
 * 难度：★★☆☆☆
 * 从最内层开始，反转每一对括号中的字符串，并去掉括号。
 *
 * 示例："(abcd)" => "dcba"；"(u(love)i)" => "iloveu"
 *
 * 思路：先用栈配对括号。再按方向遍历，碰到括号就跳到配对位置并反向。
 * 时间 O(n)，空间 O(n)
 */

export function reverseParentheses(s: string): string {
  const pair = new Map<number, number>();
  const stack: number[] = [];
  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      const open = stack.pop();
      if (open !== undefined) {
        pair.set(open, i);
        pair.set(i, open);
      }
    }
  }

  const result: string[] = [];
  let index = 0;
  let direction = 1;
  while (index >= 0 && index < s.length) {
    if (s[index] === "(" || s[index] === ")") {
      index = pair.get(index) ?? index;
      direction = -direction;
    } else {
      result.push(s[index]);
    }
    index += direction;
  }
  return result.join("");
}

console.log(reverseParentheses("(abcd)"));
console.log(reverseParentheses("(u(love)i)"));
