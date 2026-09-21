/**
 * 解析布尔表达式
 * 难度：★★★★☆
 * 表达式由 t、f 以及 !、&、| 和括号组成。返回它的布尔值。
 *
 * 示例："&(t,f)" => false；"|(f,t)" => true；"!(f)" => true
 *
 * 思路：递归下降。运算符后面是括号参数列表，按与、或、非归约。
 * 时间 O(n)，空间 O(n)
 */

export function parseBoolExpr(expression: string): boolean {
  const parse = (cursor: { index: number }): boolean => {
    const char = expression[cursor.index];
    if (char === "t") {
      cursor.index += 1;
      return true;
    }
    if (char === "f") {
      cursor.index += 1;
      return false;
    }
    const operator = char;
    cursor.index += 2;
    const values: boolean[] = [];
    while (expression[cursor.index] !== ")") {
      if (expression[cursor.index] === ",") {
        cursor.index += 1;
        continue;
      }
      values.push(parse(cursor));
    }
    cursor.index += 1;
    if (operator === "!") {
      return !values[0];
    }
    if (operator === "&") {
      return values.every((value) => value);
    }
    return values.some((value) => value);
  };
  return parse({ index: 0 });
}

console.log(parseBoolExpr("&(t,f)"));
console.log(parseBoolExpr("|(f,t)"));
console.log(parseBoolExpr("!(f)"));
