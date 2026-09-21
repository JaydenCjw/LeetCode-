/**
 * 字符串解码
 * 难度：★★★☆☆
 * 编码规则 k[encoded_string]，表示括号内内容重复 k 次。可能嵌套。
 *
 * 示例：s = "3[a2[c]]" => "accaccacc"
 *
 * 思路：双栈分别存倍数与当前字符串。
 * 时间 O(n)，空间 O(n)
 */

export function decodeString(s: string): string {
  const countStack: number[] = [];
  const stringStack: string[] = [];
  let current = "";
  let number = 0;

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      number = number * 10 + Number(char);
    } else if (char === "[") {
      countStack.push(number);
      stringStack.push(current);
      number = 0;
      current = "";
    } else if (char === "]") {
      const repeat = countStack.pop()!;
      const previous = stringStack.pop()!;
      current = previous + current.repeat(repeat);
    } else {
      current += char;
    }
  }

  return current;
}

console.log(decodeString("3[a2[c]]"));
console.log(decodeString("2[abc]3[cd]ef"));
