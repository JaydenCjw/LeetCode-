/**
 * 反转字符串
 * 难度：★☆☆☆☆
 * 原地反转字符数组。
 *
 * 示例：s = ['h','e','l','l','o'] => ['o','l','l','e','h']
 *
 * 思路：左右指针交换字符。
 * 时间 O(n)，空间 O(1)
 */

export function reverseString(s: string[]): void {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
}

const chars = ["h", "e", "l", "l", "o"];
reverseString(chars);
console.log(chars);
