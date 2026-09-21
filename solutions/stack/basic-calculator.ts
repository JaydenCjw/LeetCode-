/**
 * 基本计算器
 * 难度：★★★★☆
 * 表达式只含非负整数、加号、减号、括号和空格，可以有一元减号。返回计算结果。
 *
 * 示例："1 + 1" => 2；"(1+(4+5+2)-3)+(6+8)" => 23
 *
 * 思路：栈保存括号外的结果和符号。遇到左括号把当前结果和符号入栈，右括号再合并回来。
 * 时间 O(n)，空间 O(n)
 */

export function calculate(s: string): number {
  let result = 0;
  let sign = 1;
  let number = 0;
  const stack: number[] = [];
  for (const char of s) {
    if (char >= "0" && char <= "9") {
      number = number * 10 + (char.charCodeAt(0) - 48);
    } else if (char === "+") {
      result += sign * number;
      number = 0;
      sign = 1;
    } else if (char === "-") {
      result += sign * number;
      number = 0;
      sign = -1;
    } else if (char === "(") {
      stack.push(result);
      stack.push(sign);
      result = 0;
      sign = 1;
    } else if (char === ")") {
      result += sign * number;
      number = 0;
      const previousSign = stack.pop() ?? 1;
      const previous = stack.pop() ?? 0;
      result = previous + previousSign * result;
    }
  }
  return result + sign * number;
}

console.log(calculate("1 + 1"));
console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
