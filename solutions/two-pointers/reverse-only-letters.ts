/**
 * 仅仅反转字母
 * 难度：★☆☆☆☆
 * 只反转字符串中的英文字母，其他字符保持原位。
 *
 * 示例：s = "ab-cd" => "dc-ba"
 *
 * 思路：左右指针跳过非字母并交换字母。
 * 时间 O(n)，空间 O(n)
 */

export function reverseOnlyLetters(s: string): string {
  const chars = s.split("");
  const isLetter = (ch: string): boolean => (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");
  let left = 0;
  let right = chars.length - 1;
  while (left < right) {
    while (left < right && !isLetter(chars[left])) {
      left++;
    }
    while (left < right && !isLetter(chars[right])) {
      right--;
    }
    if (left < right) {
      const temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;
      left++;
      right--;
    }
  }
  return chars.join("");
}

console.log(reverseOnlyLetters("ab-cd"));
