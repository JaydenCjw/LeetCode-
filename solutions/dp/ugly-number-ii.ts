/**
 * 丑数 II
 * 难度：★★★☆☆
 * 丑数是只含质因数 2、3、5 的正整数。返回第 n 个丑数。
 *
 * 示例：n = 10 => 12
 *
 * 思路：三指针分别乘 2/3/5，每次取最小的新丑数。
 * 时间 O(n)，空间 O(n)
 */

export function nthUglyNumber(n: number): number {
  const ugly = new Array<number>(n);
  ugly[0] = 1;
  let i2 = 0;
  let i3 = 0;
  let i5 = 0;

  for (let i = 1; i < n; i++) {
    const next = Math.min(ugly[i2] * 2, ugly[i3] * 3, ugly[i5] * 5);
    ugly[i] = next;
    if (next === ugly[i2] * 2) {
      i2++;
    }
    if (next === ugly[i3] * 3) {
      i3++;
    }
    if (next === ugly[i5] * 5) {
      i5++;
    }
  }

  return ugly[n - 1];
}

console.log(nthUglyNumber(10));
