/**
 * 括号的分数
 * 难度：★★☆☆☆
 * () 得 1 分，(A) 得 2*A，AB 得 A+B。
 *
 * 示例："(()(()))" => 6
 *
 * 思路：栈记录当前层分数，遇到 ) 结算。
 * 时间 O(n)，空间 O(n)
 */

export function scoreOfParentheses(s: string): number {
  const stack = [0];
  for (const ch of s) {
    if (ch === "(") {
      stack.push(0);
    } else {
      const inner = stack.pop()!;
      stack[stack.length - 1] += inner === 0 ? 1 : inner * 2;
    }
  }
  return stack[0];
}

console.log(scoreOfParentheses("(()(()))"));
