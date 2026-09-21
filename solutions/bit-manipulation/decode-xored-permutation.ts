/**
 * 解码异或后的排列
 * 难度：★★★☆☆
 * perm 是 1..n 的排列，encoded[i] = perm[i] XOR perm[i+1]。n 为奇数。还原 perm。
 *
 * 示例：[3,1] => [1,2,3]
 *
 * 思路：1..n 的总异或，再异或 encoded 的奇数下标，得到 perm[0]，然后逐项还原。
 * 时间 O(n)，空间 O(n)
 */

export function decode(encoded: number[]): number[] {
  const n = encoded.length + 1;
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total ^= i;
  }
  for (let i = 1; i < encoded.length; i += 2) {
    total ^= encoded[i];
  }
  const perm = [total];
  for (const value of encoded) {
    perm.push(perm[perm.length - 1] ^ value);
  }
  return perm;
}

console.log(decode([3, 1]));
