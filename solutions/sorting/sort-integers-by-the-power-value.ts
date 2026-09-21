/**
 * 将整数按权重排序
 * 难度：★★☆☆☆
 * x 为偶数则变为 x/2，为奇数则变为 3x+1，直到变成 1 的步数称为权重。把闭区间 [lo, hi] 内的整数按权重升序、权重相同按数值升序排列，返回第 k 个（从 1 开始）。
 *
 * 示例：lo=12, hi=15, k=2 => 13
 *
 * 思路：记忆化计算每个数的权重，再排序取第 k 个。
 * 时间 O((hi-lo) * 步数)，空间 O(hi-lo)
 */

const powerMemo = new Map<number, number>([[1, 0]]);

function collatzPower(value: number): number {
  const cached = powerMemo.get(value);
  if (cached !== undefined) {
    return cached;
  }
  const next = value % 2 === 0 ? value / 2 : value * 3 + 1;
  const steps = 1 + collatzPower(next);
  powerMemo.set(value, steps);
  return steps;
}

export function getKth(lo: number, hi: number, k: number): number {
  const values: number[] = [];
  for (let value = lo; value <= hi; value += 1) {
    values.push(value);
  }
  values.sort((a, b) => {
    const powerA = collatzPower(a);
    const powerB = collatzPower(b);
    if (powerA !== powerB) {
      return powerA - powerB;
    }
    return a - b;
  });
  return values[k - 1];
}

console.log(getKth(12, 15, 2));
