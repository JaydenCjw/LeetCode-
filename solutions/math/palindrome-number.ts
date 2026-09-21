/**
 * 回文数
 * 难度：★☆☆☆☆
 * 判断整数是否是回文，不把整数转成字符串。
 *
 * 示例：121 => true；-121 => false
 *
 * 思路：负数直接否；反转后半段比较。
 * 时间 O(log n)，空间 O(1)
 */

export function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }
  let reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === reversed || x === Math.floor(reversed / 10);
}

console.log(isPalindrome(121));
