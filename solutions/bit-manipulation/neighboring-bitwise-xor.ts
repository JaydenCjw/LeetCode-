/**
 * 相邻值的按位异或
 * 难度：★★☆☆☆
 * derived[i] = original[i] XOR original[i+1]，最后一项与首项相邻。判断是否存在这样的 original。
 *
 * 示例：[1,1,0] => true
 *
 * 思路：假设 original[0] 为 0 推出其余项，再检查首尾是否满足最后一条异或。
 * 时间 O(n)，空间 O(1)
 */

export function doesValidArrayExist(derived: number[]): boolean {
  let xor = 0;
  for (const value of derived) {
    xor ^= value;
  }
  return xor === 0;
}

console.log(doesValidArrayExist([1, 1, 0]));
