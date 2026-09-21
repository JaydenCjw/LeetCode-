/**
 * 验证回文串 II
 * 难度：★★☆☆☆
 * 最多删除一个字符后，判断能否成为回文串。
 *
 * 示例："abca" => true（删除 b 或 c）
 *
 * 思路：双指针，失配时分别跳过左右再检查。
 * 时间 O(n)，空间 O(1)
 */

function isPalindromeRange(s: string, left: number, right: number): boolean {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

export function validPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindromeRange(s, left + 1, right) || isPalindromeRange(s, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
}

console.log(validPalindrome("abca"));
