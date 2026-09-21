/**
 * 基本计算器 II
 * 难度：★★★★☆
 * 实现含非负整数与 + - * / 的表达式求值（整数除法向零截断）。
 *
 * 示例：s = "3+2*2" => 7
 *
 * 思路：栈处理乘除，加减延迟入栈符号。
 * 时间 O(n)，空间 O(n)
 */

export function calculate(s: string): number {
  const stack: number[] = [];
  let number = 0;
  let sign = "+";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char >= "0" && char <= "9") {
      number = number * 10 + Number(char);
    }

    if ((char !== " " && (char < "0" || char > "9")) || i === s.length - 1) {
      if (sign === "+") stack.push(number);
      else if (sign === "-") stack.push(-number);
      else if (sign === "*") stack.push(stack.pop()! * number);
      else if (sign === "/") stack.push(Math.trunc(stack.pop()! / number));
      sign = char;
      number = 0;
    }
  }

  return stack.reduce((sum, value) => sum + value, 0);
}

console.log(calculate("3+2*2"));
console.log(calculate(" 3/2 "));
console.log(calculate(" 3+5 / 2 "));
