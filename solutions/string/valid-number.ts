/**
 * 有效数字
 * 难度：★★★★☆
 * 判断字符串是否表示一个有效数字：整数或小数，后面可以跟带符号的整数指数。
 *
 * 示例：s = "0" => true；s = "e" => false；s = ".1" => true
 *
 * 思路：一次扫描记录是否见过数字、小数点和指数，符号只能出现在开头或指数后。
 * 时间 O(n)，空间 O(1)
 */

export function isNumber(s: string): boolean {
  let seenDigit = false;
  let seenDot = false;
  let seenExp = false;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch >= "0" && ch <= "9") {
      seenDigit = true;
    } else if (ch === "+" || ch === "-") {
      if (i > 0 && s[i - 1] !== "e" && s[i - 1] !== "E") {
        return false;
      }
    } else if (ch === ".") {
      if (seenDot || seenExp) {
        return false;
      }
      seenDot = true;
    } else if (ch === "e" || ch === "E") {
      if (seenExp || !seenDigit) {
        return false;
      }
      seenExp = true;
      seenDigit = false;
    } else {
      return false;
    }
  }
  return seenDigit;
}

console.log(isNumber("0"));
console.log(isNumber("e"));
console.log(isNumber(".1"));
