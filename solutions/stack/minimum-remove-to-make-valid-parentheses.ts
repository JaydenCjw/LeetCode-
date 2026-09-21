/**
 * 移除无效的括号
 * 难度：★★☆☆☆
 * 删除最少数量的括号，使字符串有效，返回任意一种结果。
 *
 * 思路：先统计需要删除的左右括号数量，再线性过滤。
 * 时间 O(n)，空间 O(n)
 */

export function minRemoveToMakeValid(s: string): string {
  let open = 0;
  const chars: string[] = [];
  for (const ch of s) {
    if (ch === "(") {
      open++;
      chars.push(ch);
    } else if (ch === ")") {
      if (open > 0) {
        open--;
        chars.push(ch);
      }
    } else {
      chars.push(ch);
    }
  }

  const result: string[] = [];
  for (let i = chars.length - 1; i >= 0; i--) {
    if (chars[i] === "(" && open > 0) {
      open--;
      continue;
    }
    result.push(chars[i]);
  }
  return result.reverse().join("");
}

console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
