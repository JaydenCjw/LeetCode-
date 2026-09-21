/**
 * 从字符串中移除星号
 * 难度：★★☆☆☆
 * 每遇到一个星号，就删除它左侧最近的非星号字符。返回删除后的字符串。
 *
 * 示例："leet**cod*e" => "lecoe"
 *
 * 思路：栈存放还没被删的字符，星号弹出栈顶。
 * 时间 O(n)，空间 O(n)
 */

export function removeStars(s: string): string {
  const stack: string[] = [];
  for (const char of s) {
    if (char === "*") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.join("");
}

console.log(removeStars("leet**cod*e"));
