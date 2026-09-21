/**
 * 逆波兰表达式求值
 * 难度：★★☆☆☆
 * 根据逆波兰表示法求表达式的值。除法向零截断。
 *
 * 示例：["2","1","+","3","*"] => 9
 *
 * 思路：栈，遇到运算符弹出两个数计算。
 * 时间 O(n)，空间 O(n)
 */

export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (const token of tokens) {
    if (token === "+" || token === "-" || token === "*" || token === "/") {
      const right = stack.pop()!;
      const left = stack.pop()!;
      if (token === "+") {
        stack.push(left + right);
      } else if (token === "-") {
        stack.push(left - right);
      } else if (token === "*") {
        stack.push(left * right);
      } else {
        stack.push(Math.trunc(left / right));
      }
    } else {
      stack.push(Number(token));
    }
  }
  return stack[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"]));
