/**
 * 给表达式添加运算符
 * 难度：★★★★☆
 * 在数字串中间插入 +、-、* 或什么都不插，使表达式等于 target。不能有前导零。
 *
 * 示例：num = "123", target = 6 => ["1*2*3","1+2+3"]
 *
 * 思路：回溯切出当前数字。乘法用上一段操作数还原优先级：value - prev + prev * cur。
 * 时间 O(4^n)，空间 O(n)
 */

export function addOperators(num: string, target: number): string[] {
  const answer: string[] = [];

  function dfs(index: number, expr: string, value: number, prev: number): void {
    if (index === num.length) {
      if (value === target) {
        answer.push(expr);
      }
      return;
    }
    for (let i = index; i < num.length; i++) {
      if (i > index && num[index] === "0") {
        break;
      }
      const token = num.slice(index, i + 1);
      const current = Number(token);
      if (index === 0) {
        dfs(i + 1, token, current, current);
      } else {
        dfs(i + 1, `${expr}+${token}`, value + current, current);
        dfs(i + 1, `${expr}-${token}`, value - current, -current);
        dfs(i + 1, `${expr}*${token}`, value - prev + prev * current, prev * current);
      }
    }
  }

  dfs(0, "", 0, 0);
  return answer;
}

console.log(JSON.stringify(addOperators("123", 6).sort()));
