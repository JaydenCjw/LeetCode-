/**
 * 删除子串后的字符串最小长度
 * 难度：★★☆☆☆
 * 可以反复删除子串 "AB" 或 "CD"。返回能得到的最短长度。
 *
 * 示例："ABFCACDB" => 2
 *
 * 思路：栈。栈顶和当前字符组成 AB 或 CD 就弹出，否则入栈。
 * 时间 O(n)，空间 O(n)
 */

export function minLength(s: string): number {
  const stack: string[] = [];
  for (const char of s) {
    const prev = stack[stack.length - 1];
    if ((prev === "A" && char === "B") || (prev === "C" && char === "D")) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }
  return stack.length;
}

console.log(minLength("ABFCACDB"));
