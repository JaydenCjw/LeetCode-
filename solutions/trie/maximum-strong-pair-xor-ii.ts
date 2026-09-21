/**
 * 最大强数对异或值 II
 * 难度：★★★★☆
 * 若 |x - y| <= min(x, y)，则 (x, y) 是强数对。返回强数对异或的最大值，x 和 y 可以相同。
 *
 * 示例：[1,2,3,4,5] => 7
 *
 * 思路：排序后用滑动窗口维护 y <= 2x 的数，窗口内放进可删除的二进制 Trie，查询最大异或。
 * 时间 O(n * 31)，空间 O(n * 31)
 */

class StrongNode {
  child: [StrongNode | null, StrongNode | null] = [null, null];
  count = 0;
}

export function maximumStrongPairXor(nums: number[]): number {
  const values = nums.slice().sort((a, b) => a - b);
  const root = new StrongNode();
  const highest = 20;

  const insert = (value: number, delta: number): void => {
    let node = root;
    for (let bit = highest; bit >= 0; bit--) {
      const branch = (value >> bit) & 1;
      if (!node.child[branch]) {
        node.child[branch] = new StrongNode();
      }
      const next = node.child[branch];
      if (!next) {
        return;
      }
      next.count += delta;
      node = next;
    }
  };

  const query = (value: number): number => {
    let node = root;
    let answer = 0;
    for (let bit = highest; bit >= 0; bit--) {
      const branch = (value >> bit) & 1;
      const prefer = node.child[branch ^ 1];
      if (prefer && prefer.count > 0) {
        answer |= 1 << bit;
        node = prefer;
      } else {
        const same = node.child[branch];
        if (!same || same.count === 0) {
          break;
        }
        node = same;
      }
    }
    return answer;
  };

  let best = 0;
  let left = 0;
  for (let right = 0; right < values.length; right++) {
    insert(values[right], 1);
    while (values[right] > values[left] * 2) {
      insert(values[left], -1);
      left++;
    }
    best = Math.max(best, query(values[right]));
  }
  return best;
}

console.log(maximumStrongPairXor([1, 2, 3, 4, 5]));
