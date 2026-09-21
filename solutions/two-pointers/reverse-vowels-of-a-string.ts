/**
 * 反转字符串中的元音字母
 * 难度：★☆☆☆☆
 * 只反转字符串里的元音字母（a/e/i/o/u，不分大小写），其余字符不动。
 *
 * 示例：s = "hello" => "holle"
 *
 * 思路：左右指针跳过非元音，相遇前交换元音。
 * 时间 O(n)，空间 O(n)
 */

export function reverseVowels(s: string): string {
  const chars = s.split("");
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let left = 0;
  let right = chars.length - 1;
  while (left < right) {
    while (left < right && !vowels.has(chars[left])) {
      left++;
    }
    while (left < right && !vowels.has(chars[right])) {
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

console.log(reverseVowels("hello"));
