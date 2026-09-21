/**
 * 移掉 K 位数字
 * 难度：★★★☆☆
 * 从数字字符串中删除 k 位，使剩下的数最小，去掉前导零。
 *
 * 思路：单调递增栈，删除比当前位更大的高位。
 * 时间 O(n)，空间 O(n)
 */

export function removeKdigits(num: string, k: number): string {
  const stack: string[] = [];
  for (const digit of num) {
    while (k > 0 && stack.length > 0 && stack[stack.length - 1] > digit) {
      stack.pop();
      k--;
    }
    stack.push(digit);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  const result = stack.join("").replace(/^0+/, "");
  return result === "" ? "0" : result;
}

console.log(removeKdigits("1432219", 3));
