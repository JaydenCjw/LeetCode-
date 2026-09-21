/**
 * 括号的最大嵌套深度
 * 难度：★☆☆☆☆
 * 有效括号字符串里可能夹着数字和运算符。返回括号的最大嵌套深度。
 *
 * 示例："(1+(2*3)+((8)/4))+1" => 3
 *
 * 思路：遇到左括号深度加一，右括号减一，记录最大值。
 * 时间 O(n)，空间 O(1)
 */

export function maxDepth(s: string): number {
  let depth = 0;
  let best = 0;
  for (const char of s) {
    if (char === "(") {
      depth += 1;
      best = Math.max(best, depth);
    } else if (char === ")") {
      depth -= 1;
    }
  }
  return best;
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
