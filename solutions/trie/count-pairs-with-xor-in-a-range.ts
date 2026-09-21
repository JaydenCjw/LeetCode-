/**
 * 统计异或值在范围内的数对
 * 难度：★★★★☆
 * 返回下标对 i < j 的数量，使得 low <= nums[i] XOR nums[j] <= high。
 *
 * 示例：nums = [1,4,2,7]，low = 2，high = 6 => 6
 *
 * 思路：二进制 Trie 统计已插入数字里，与当前数异或不超过某个上限的个数。答案是不超过 high 的个数减去不超过 low-1 的个数。
 * 时间 O(n * 31)，空间 O(n * 31)
 */

class RangeXorNode {
  child: [RangeXorNode | null, RangeXorNode | null] = [null, null];
  count = 0;
}

export function countPairs(nums: number[], low: number, high: number): number {
  const root = new RangeXorNode();
  const highest = 14;

  const insert = (value: number): void => {
    let node = root;
    for (let bit = highest; bit >= 0; bit--) {
      const branch = (value >> bit) & 1;
      if (!node.child[branch]) {
        node.child[branch] = new RangeXorNode();
      }
      const next = node.child[branch];
      if (!next) {
        return;
      }
      next.count++;
      node = next;
    }
  };

  const countXorAtMost = (value: number, limit: number): number => {
    if (limit < 0) {
      return 0;
    }
    let node: RangeXorNode | null = root;
    let total = 0;
    for (let bit = highest; bit >= 0 && node; bit--) {
      const valueBit = (value >> bit) & 1;
      const limitBit = (limit >> bit) & 1;
      if (limitBit === 1) {
        const smaller = node.child[valueBit];
        if (smaller) {
          total += smaller.count;
        }
        node = node.child[valueBit ^ 1];
      } else {
        node = node.child[valueBit];
      }
    }
    if (node) {
      total += node.count;
    }
    return total;
  };

  let answer = 0;
  for (const value of nums) {
    answer += countXorAtMost(value, high) - countXorAtMost(value, low - 1);
    insert(value);
  }
  return answer;
}

console.log(countPairs([1, 4, 2, 7], 2, 6));
