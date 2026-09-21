/**
 * 拆除炸弹
 * 难度：★★☆☆☆
 * 环形数组。k > 0 时第 i 项换成后面 k 个数之和；k < 0 时换成前面 |k| 个数之和；k = 0 时全为 0。
 *
 * 示例：code = [5,7,1,4], k = 3 => [12,10,16,13]
 *
 * 思路：按方向在环上累加固定步数。
 * 时间 O(n * |k|)，空间 O(n)
 */

export function decrypt(code: number[], k: number): number[] {
  const n = code.length;
  const result = new Array<number>(n).fill(0);
  if (k === 0) {
    return result;
  }
  const direction = k > 0 ? 1 : -1;
  const steps = Math.abs(k);
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let step = 1; step <= steps; step++) {
      const index = (i + direction * step + n) % n;
      sum += code[index];
    }
    result[i] = sum;
  }
  return result;
}

console.log(decrypt([5, 7, 1, 4], 3));
