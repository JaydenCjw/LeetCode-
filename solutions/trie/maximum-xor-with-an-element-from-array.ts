/**
 * 与数组中元素的最大异或值
 * 难度：★★★★☆
 * 对每个查询 [xi, mi]，在 nums 里所有不超过 mi 的数中，找出与 xi 异或的最大值。没有可选数字时返回 -1。
 *
 * 示例：nums = [0,1,2,3,4]，queries = [[3,1],[1,3],[5,6]] => [3,3,7]
 *
 * 思路：按上限排序查询，把不超过上限的数依次插入二进制 Trie，再查询最大异或。
 * 时间 O((n+q) * 31)，空间 O(n * 31)
 */

class QueryXorNode {
  child: [QueryXorNode | null, QueryXorNode | null] = [null, null];
}

export function maximizeXor(nums: number[], queries: number[][]): number[] {
  const sortedNums = nums.slice().sort((a, b) => a - b);
  const order = queries.map((query, index) => [query[0], query[1], index]);
  order.sort((a, b) => a[1] - b[1]);

  const root = new QueryXorNode();
  const highest = 30;
  const insert = (value: number): void => {
    let node = root;
    for (let bit = highest; bit >= 0; bit--) {
      const branch = (value >> bit) & 1;
      if (!node.child[branch]) {
        node.child[branch] = new QueryXorNode();
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
          return -1;
        }
        node = same;
      }
    }
    return answer;
  };

  const answer = new Array<number>(queries.length).fill(-1);
  let index = 0;
  for (const item of order) {
    while (index < sortedNums.length && sortedNums[index] <= item[1]) {
      insert(sortedNums[index]);
      index++;
    }
    answer[item[2]] = index === 0 ? -1 : query(item[0]);
  }
  return answer;
}

console.log(
  maximizeXor(
    [0, 1, 2, 3, 4],
    [
      [3, 1],
      [1, 3],
      [5, 6],
    ],
  ),
);
