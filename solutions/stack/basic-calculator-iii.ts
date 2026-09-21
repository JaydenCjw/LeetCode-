/**
 * 基本计算器 III
 * 难度：★★★★☆
 * 表达式含非负整数、加减乘除、括号和空格。除法向零截断。
 *
 * 示例："2*(5+5*2)/3+(6/2+8)" => 21
 *
 * 思路：遇到括号就递归求括号内的值。加减先入栈，乘除立刻与栈顶运算，最后把栈求和。
 * 时间 O(n)，空间 O(n)
 */

export function calculate(s: string): number {
  const expression = s.replaceAll(" ", "");
  const stack: number[] = [];
  let number = 0;
  let sign = "+";
  for (let i = 0; i < expression.length; i += 1) {
    const char = expression[i];
    if (char >= "0" && char <= "9") {
      number = number * 10 + (char.charCodeAt(0) - 48);
    } else if (char === "(") {
      let depth = 1;
      let end = i + 1;
      while (end < expression.length && depth > 0) {
        if (expression[end] === "(") {
          depth += 1;
        } else if (expression[end] === ")") {
          depth -= 1;
        }
        if (depth > 0) {
          end += 1;
        }
      }
      number = calculate(expression.slice(i + 1, end));
      i = end;
    }
    const atEnd = i === expression.length - 1;
    if (char === "+" || char === "-" || char === "*" || char === "/" || atEnd) {
      if (sign === "+") {
        stack.push(number);
      } else if (sign === "-") {
        stack.push(-number);
      } else if (sign === "*") {
        stack.push((stack.pop() ?? 0) * number);
      } else if (sign === "/") {
        stack.push(Math.trunc((stack.pop() ?? 0) / number));
      }
      sign = char;
      number = 0;
    }
  }
  return stack.reduce((sum, value) => sum + value, 0);
}

console.log(calculate("2*(5+5*2)/3+(6/2+8)"));
