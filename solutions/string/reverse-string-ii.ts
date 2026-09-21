/**
 * 反转字符串 II
 * 难度：★★☆☆☆
 * 从下标 0 开始，每 2k 个字符把前 k 个反转，剩余不足 k 个则全部反转。
 *
 * 示例：s = "abcdefg", k = 2 => "bacdfeg"
 *
 * 思路：每隔 2k 对长度为 k 的区间做双指针反转。
 * 时间 O(n)，空间 O(n)
 */

export function reverseStr(s: string, k: number): string {
  const chars = s.split("");
  for (let start = 0; start < chars.length; start += 2 * k) {
    let left = start;
    let right = Math.min(start + k - 1, chars.length - 1);
    while (left < right) {
      const temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    }
  }
  return chars.join("");
}

console.log(reverseStr("abcdefg", 2));
