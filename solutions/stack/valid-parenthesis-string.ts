/**
 * 有效的括号字符串
 * 难度：★★☆☆☆
 * 字符串只含 "("、")" 和 "*"。星号可以当作左括号、右括号或空串。判断能否变成有效括号串。
 *
 * 示例："(*))" => true
 *
 * 思路：用最低和最高可能的左括号余额。右括号让两者减一，星号让最低减一、最高加一。最低不能为负；结束时最低必须能回到 0。
 * 时间 O(n)，空间 O(1)
 */

export function checkValidString(s: string): boolean {
  let low = 0;
  let high = 0;
  for (const char of s) {
    if (char === "(") {
      low += 1;
      high += 1;
    } else if (char === ")") {
      low -= 1;
      high -= 1;
    } else {
      low -= 1;
      high += 1;
    }
    if (high < 0) {
      return false;
    }
    low = Math.max(low, 0);
  }
  return low === 0;
}

console.log(checkValidString("(*))"));
