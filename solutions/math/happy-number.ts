/**
 * 快乐数
 * 难度：★★☆☆☆
 * 反复把数字替换为各位平方和，最终能否变为 1。
 *
 * 示例：n = 19 => true
 *
 * 思路：快慢指针检测环。
 * 时间 O(log n)，空间 O(1)
 */

export function isHappy(n: number): boolean {
  const next = (value: number): number => {
    let sum = 0;
    while (value > 0) {
      const digit = value % 10;
      sum += digit * digit;
      value = Math.floor(value / 10);
    }
    return sum;
  };

  let slow = n;
  let fast = next(n);
  while (fast !== 1 && slow !== fast) {
    slow = next(slow);
    fast = next(next(fast));
  }
  return fast === 1;
}

console.log(isHappy(19));
console.log(isHappy(2));
