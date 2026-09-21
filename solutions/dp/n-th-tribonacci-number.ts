/**
 * 第 N 个泰波那契数
 * 难度：★☆☆☆☆
 * T0 = 0，T1 = 1，T2 = 1，其后 Tn = T(n-1) + T(n-2) + T(n-3)。
 *
 * 示例：n = 4 => 4；n = 25 => 1389537
 *
 * 思路：滚动三个变量递推。
 * 时间 O(n)，空间 O(1)
 */

export function tribonacci(n: number): number {
  if (n === 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }

  let a = 0;
  let b = 1;
  let c = 1;
  for (let i = 3; i <= n; i++) {
    const next = a + b + c;
    a = b;
    b = c;
    c = next;
  }
  return c;
}

console.log(tribonacci(4));
console.log(tribonacci(25));
