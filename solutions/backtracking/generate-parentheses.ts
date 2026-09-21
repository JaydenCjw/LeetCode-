/**
 * 括号生成
 * 难度：★★★☆☆
 * 数字 n 代表生成括号的对数，返回所有有效括号组合。
 *
 * 示例：n = 3
 * => ["((()))","(()())","(())()","()(())","()()()"]
 *
 * 思路：回溯，维护剩余左括号/右括号数量。
 * 时间 Catalan 相关，空间 O(n)
 */

export function generateParenthesis(n: number): string[] {
  const result: string[] = [];

  const dfs = (path: string, leftRemain: number, rightRemain: number): void => {
    if (leftRemain === 0 && rightRemain === 0) {
      result.push(path);
      return;
    }

    if (leftRemain > 0) {
      dfs(path + "(", leftRemain - 1, rightRemain);
    }
    if (rightRemain > leftRemain) {
      dfs(path + ")", leftRemain, rightRemain - 1);
    }
  };

  dfs("", n, n);
  return result;
}

console.log(generateParenthesis(3));
