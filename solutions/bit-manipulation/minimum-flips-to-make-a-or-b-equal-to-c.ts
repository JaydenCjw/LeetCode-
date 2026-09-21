/**
 * 或运算的最小翻转次数
 * 难度：★★☆☆☆
 * 翻转指把整数某一二进制位的 0/1 对调。返回使 (a OR b) == c 的最少翻转次数。
 *
 * 示例：a = 2, b = 6, c = 5 => 3
 *
 * 思路：按位比较。c 该位为 0 则 a、b 都必须是 0；为 1 则至少一个是 1。
 * 时间 O(1)，空间 O(1)
 */

export function minFlips(a: number, b: number, c: number): number {
  let flips = 0;
  for (let bit = 0; bit < 32; bit++) {
    const abit = (a >> bit) & 1;
    const bbit = (b >> bit) & 1;
    const cbit = (c >> bit) & 1;
    if (cbit === 0) {
      flips += abit + bbit;
    } else if (abit === 0 && bbit === 0) {
      flips++;
    }
  }
  return flips;
}

console.log(minFlips(2, 6, 5));
