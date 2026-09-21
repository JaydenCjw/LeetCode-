/**
 * 验证回文串
 * 难度：★☆☆☆☆
 * 只考虑字母和数字，忽略大小写，判断是否为回文串。
 *
 * 示例：s = "A man, a plan, a canal: Panama" => true
 *
 * 思路：双指针跳过非字母数字后比较。
 * 时间 O(n)，空间 O(1)
 */

export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  const isAlphaNumeric = (char: string): boolean => /[a-z0-9]/i.test(char);

  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) left++;
    while (left < right && !isAlphaNumeric(s[right])) right--;
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
