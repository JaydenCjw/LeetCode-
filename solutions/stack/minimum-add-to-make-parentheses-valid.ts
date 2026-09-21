/**
 * 使括号有效的最少添加
 * 难度：★★☆☆☆
 * 只含左右括号的字符串，返回使它变成有效括号串所需插入的最少括号数。
 *
 * 示例："())" => 1；"(((" => 3
 *
 * 思路：用余额记录未匹配的左括号，余额为 0 时再来右括号就要额外插入左括号。
 * 时间 O(n)，空间 O(1)
 */

export function minAddToMakeValid(s: string): number {
  let balance = 0;
  let insertions = 0;
  for (const char of s) {
    if (char === "(") {
      balance += 1;
    } else if (balance === 0) {
      insertions += 1;
    } else {
      balance -= 1;
    }
  }
  return insertions + balance;
}

console.log(minAddToMakeValid("())"));
console.log(minAddToMakeValid("((("));
