/**
 * 累加数
 * 难度：★★☆☆☆
 * 判断数字串能否拆成至少三个数，且从第三个数起每个都是前两个之和。不能有前导零。
 *
 * 示例："112358" => true（1,1,2,3,5,8）
 *
 * 思路：枚举前两个数的长度，之后用字符串加法逐段匹配剩余部分。
 * 时间 O(n^3)，空间 O(n)
 */

function addStrings(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = "";
  while (i >= 0 || j >= 0 || carry > 0) {
    const da = i >= 0 ? a.charCodeAt(i) - 48 : 0;
    const db = j >= 0 ? b.charCodeAt(j) - 48 : 0;
    const sum = da + db + carry;
    result = String(sum % 10) + result;
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  return result;
}

export function isAdditiveNumber(num: string): boolean {
  const n = num.length;

  function valid(first: string, second: string): boolean {
    if ((first.length > 1 && first[0] === "0") || (second.length > 1 && second[0] === "0")) {
      return false;
    }
    let start = first.length + second.length;
    if (start >= n) {
      return false;
    }
    let x = first;
    let y = second;
    while (start < n) {
      const sum = addStrings(x, y);
      if (!num.startsWith(sum, start)) {
        return false;
      }
      start += sum.length;
      x = y;
      y = sum;
    }
    return true;
  }

  for (let i = 1; i <= Math.floor(n / 2); i++) {
    for (let j = 1; n - i - j >= Math.max(i, j); j++) {
      if (valid(num.slice(0, i), num.slice(i, i + j))) {
        return true;
      }
    }
  }
  return false;
}

console.log(isAdditiveNumber("112358"));
