/**
 * 解码异或后的数组
 * 难度：★★☆☆☆
 * encoded[i] = arr[i] XOR arr[i+1]，且已知 arr[0] = first。还原 arr。
 *
 * 示例：encoded = [1,2,3], first = 1 => [1,0,2,1]
 *
 * 思路：下一项等于当前项异或 encoded。
 * 时间 O(n)，空间 O(n)
 */

export function decode(encoded: number[], first: number): number[] {
  const result = [first];
  for (const value of encoded) {
    result.push(result[result.length - 1] ^ value);
  }
  return result;
}

console.log(decode([1, 2, 3], 1));
