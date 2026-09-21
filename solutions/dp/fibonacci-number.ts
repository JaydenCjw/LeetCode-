/**
 * 斐波那契数
 * 难度：★☆☆☆☆
 * F(0)=0，F(1)=1，F(n)=F(n-1)+F(n-2)。
 *
 * 示例：n = 4 => 3
 *
 * 思路：滚动两个变量。
 * 时间 O(n)，空间 O(1)
 */

export function fib(n: number): number {
  if (n < 2) {
    return n;
  }
  let prev2 = 0;
  let prev1 = 1;
  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }
  return prev1;
}

console.log(fib(4));
