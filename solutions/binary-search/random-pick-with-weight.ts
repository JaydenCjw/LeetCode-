/**
 * 按权重随机选择
 * 难度：★★☆☆☆
 * 下标 i 的权重是 w[i]。pickIndex 按权重随机返回一个下标。
 *
 * 示例：w = [1] 时 pickIndex 恒为 0
 *
 * 思路：前缀和把权重映射到一段区间，随机一个点后二分落在哪个下标。
 * 时间 构造 O(n)，抽取 O(log n)，空间 O(n)
 */

export class RandomPickWithWeight {
  private prefix: number[] = [];
  private total = 0;

  constructor(w: number[]) {
    let sum = 0;
    for (const weight of w) {
      sum += weight;
      this.prefix.push(sum);
    }
    this.total = sum;
  }

  pickIndex(): number {
    const target = Math.floor(Math.random() * this.total) + 1;
    let lo = 0;
    let hi = this.prefix.length - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (this.prefix[mid] >= target) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return lo;
  }
}

console.log(new RandomPickWithWeight([1]).pickIndex());
