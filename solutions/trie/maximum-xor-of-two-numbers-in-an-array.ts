/**
 * 数组中两个数的最大异或值
 * 难度：★★★☆☆
 * 返回数组中两个元素（可以相同下标）异或的最大值。
 *
 * 示例：[3,10,5,25,2,8] => 28
 *
 * 思路：二进制 Trie 从高位到低位插入每个数，查询时尽量走相反位。
 * 时间 O(n * 31)，空间 O(n * 31)
 */

class XorNode {
  child: [XorNode | null, XorNode | null] = [null, null];
}

export function findMaximumXOR(nums: number[]): number {
  const root = new XorNode();
  const highest = 30;

  const insert = (value: number): void => {
    let node = root;
    for (let bit = highest; bit >= 0; bit--) {
      const branch = (value >> bit) & 1;
      if (!node.child[branch]) {
        node.child[branch] = new XorNode();
      }
      const next = node.child[branch];
      if (!next) {
        return;
      }
      node = next;
    }
  };

  const query = (value: number): number => {
    let node = root;
    let answer = 0;
    for (let bit = highest; bit >= 0; bit--) {
      const branch = (value >> bit) & 1;
      const prefer = node.child[branch ^ 1];
      if (prefer) {
        answer |= 1 << bit;
        node = prefer;
      } else {
        const same = node.child[branch];
        if (!same) {
          break;
        }
        node = same;
      }
    }
    return answer;
  };

  let best = 0;
  for (const value of nums) {
    insert(value);
    best = Math.max(best, query(value));
  }
  return best;
}

console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]));
