/**
 * 删除回文子序列
 * 难度：★★☆☆☆
 * 字符串只含 a 和 b。每次删除一个回文子序列，返回删空所需的最少次数。
 *
 * 示例："ababa" => 1；"abb" => 2；"baabb" => 2
 *
 * 思路：空串 0 次；整串已是回文则 1 次；否则先删全部 a 再删全部 b，最多 2 次。
 * 时间 O(n)，空间 O(1)
 */

export function removePalindromeSub(s: string): number {
  if (s.length === 0) {
    return 0;
  }
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return 2;
    }
    left++;
    right--;
  }
  return 1;
}

console.log(removePalindromeSub("ababa"));
console.log(removePalindromeSub("abb"));
console.log(removePalindromeSub("baabb"));
