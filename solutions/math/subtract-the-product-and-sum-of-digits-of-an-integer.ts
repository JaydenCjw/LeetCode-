/**
 * 整数的各位积和之差
 * 难度：★☆☆☆☆
 * 返回 n 各位数字的乘积减去各位数字的和。
 *
 * 示例：n=234 => 15（2*3*4 - (2+3+4)）
 *
 * 思路：逐位取出，分别累乘和累加。
 * 时间 O(位数)，空间 O(1)
 */

export function subtractProductAndSum(n: number): number {
  let product = 1;
  let sum = 0;
  let value = n;
  while (value > 0) {
    const digit = value % 10;
    product *= digit;
    sum += digit;
    value = Math.floor(value / 10);
  }
  return product - sum;
}

console.log(subtractProductAndSum(234));
