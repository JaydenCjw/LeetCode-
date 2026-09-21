/**
 * 为运算表达式设计优先级
 * 难度：★★★☆☆
 * 给只含数字、+、-、* 的表达式加括号，返回所有可能的运算结果。
 *
 * 示例："2-1-1" => [0,2]；"2*3-4*5" => [-34,-14,-10,-10,10]
 *
 * 思路：按运算符拆成左右两段，递归求出两侧所有结果再组合。用子串记忆化。
 * 时间 O(n·Catalan)，空间 O(n·Catalan)
 */

export function diffWaysToCompute(expression: string): number[] {
  const memo = new Map<string, number[]>();

  function dfs(expr: string): number[] {
    const cached = memo.get(expr);
    if (cached !== undefined) {
      return cached;
    }
    const result: number[] = [];
    for (let i = 0; i < expr.length; i++) {
      const op = expr[i];
      if (op !== "+" && op !== "-" && op !== "*") {
        continue;
      }
      const left = dfs(expr.slice(0, i));
      const right = dfs(expr.slice(i + 1));
      for (const a of left) {
        for (const b of right) {
          if (op === "+") {
            result.push(a + b);
          } else if (op === "-") {
            result.push(a - b);
          } else {
            result.push(a * b);
          }
        }
      }
    }
    if (result.length === 0) {
      result.push(Number(expr));
    }
    memo.set(expr, result);
    return result;
  }

  return dfs(expression);
}

console.log(JSON.stringify(diffWaysToCompute("2-1-1").sort((a, b) => a - b)));
console.log(JSON.stringify(diffWaysToCompute("2*3-4*5").sort((a, b) => a - b)));
