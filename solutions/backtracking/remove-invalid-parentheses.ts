/**
 * 删除无效的括号
 * 难度：★★★★☆
 * 删除最少数量的括号，使字符串有效，返回所有可能结果。
 *
 * 示例："()())()" => ["(())()","()()()"]
 *
 * 思路：先统计至少要删的左右括号数，再回溯：可删则跳过，保留时维护平衡，最后去重。
 * 时间 O(2^n)，空间 O(n)
 */

export function removeInvalidParentheses(s: string): string[] {
  let leftRemove = 0;
  let rightRemove = 0;
  for (const ch of s) {
    if (ch === "(") {
      leftRemove++;
    } else if (ch === ")") {
      if (leftRemove > 0) {
        leftRemove--;
      } else {
        rightRemove++;
      }
    }
  }
  const answer: string[] = [];
  const seen = new Set<string>();

  function dfs(
    index: number,
    left: number,
    right: number,
    leftRem: number,
    rightRem: number,
    path: string[],
  ): void {
    if (index === s.length) {
      if (leftRem === 0 && rightRem === 0 && left === right) {
        const text = path.join("");
        if (!seen.has(text)) {
          seen.add(text);
          answer.push(text);
        }
      }
      return;
    }
    const ch = s[index];
    if (ch === "(" && leftRem > 0) {
      dfs(index + 1, left, right, leftRem - 1, rightRem, path);
    } else if (ch === ")" && rightRem > 0) {
      dfs(index + 1, left, right, leftRem, rightRem - 1, path);
    }
    path.push(ch);
    if (ch !== "(" && ch !== ")") {
      dfs(index + 1, left, right, leftRem, rightRem, path);
    } else if (ch === "(") {
      dfs(index + 1, left + 1, right, leftRem, rightRem, path);
    } else if (right < left) {
      dfs(index + 1, left, right + 1, leftRem, rightRem, path);
    }
    path.pop();
  }

  dfs(0, 0, 0, leftRemove, rightRemove, []);
  return answer;
}

console.log(JSON.stringify(removeInvalidParentheses("()())()").sort()));
