/**
 * 去除重复字母
 * 难度：★★★★☆
 * 去除重复字母，使每个字母只出现一次，且结果字典序最小。
 *
 * 示例："bcabc" => "abc"
 *
 * 思路：单调栈，后面还会出现的更大字母可以弹出。
 * 时间 O(n)，空间 O(1)
 */

export function removeDuplicateLetters(s: string): string {
  const last = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    last.set(s[i], i);
  }
  const stack: string[] = [];
  const used = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    if (used.has(s[i])) {
      continue;
    }
    while (stack.length > 0 && stack[stack.length - 1] > s[i] && (last.get(stack[stack.length - 1]) ?? -1) > i) {
      used.delete(stack.pop()!);
    }
    stack.push(s[i]);
    used.add(s[i]);
  }
  return stack.join("");
}

console.log(removeDuplicateLetters("bcabc"));
