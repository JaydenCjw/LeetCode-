/**
 * 删除字符串中的所有相邻重复项 II
 * 难度：★★☆☆☆
 * 删除 k 个相邻且相同的字符，删除后继续检查，直到不能再删。
 *
 * 示例："deeedbbcccbdaa"，k = 3 => "aa"
 *
 * 思路：栈里保存字符和连续出现次数，次数达到 k 就弹出。
 * 时间 O(n)，空间 O(n)
 */

export function removeDuplicates(s: string, k: number): string {
  const stack: Array<[string, number]> = [];
  for (const char of s) {
    const top = stack[stack.length - 1];
    if (top && top[0] === char) {
      top[1] += 1;
      if (top[1] === k) {
        stack.pop();
      }
    } else {
      stack.push([char, 1]);
    }
  }
  return stack.map(([char, count]) => char.repeat(count)).join("");
}

console.log(removeDuplicates("deeedbbcccbdaa", 3));
