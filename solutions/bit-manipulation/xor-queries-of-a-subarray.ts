/**
 * 子数组异或查询
 * 难度：★★☆☆☆
 * 多次查询子数组 arr[left..right] 的异或。
 *
 * 示例：arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]] => [2,7,14,8]
 *
 * 思路：前缀异或，区间异或等于 prefix[right] ^ prefix[left-1]。
 * 时间 O(n+q)，空间 O(n)
 */

export function xorQueries(arr: number[], queries: number[][]): number[] {
  const prefix = [0];
  for (const value of arr) {
    prefix.push(prefix[prefix.length - 1] ^ value);
  }
  return queries.map(([left, right]) => prefix[right + 1] ^ prefix[left]);
}

console.log(xorQueries([1, 3, 4, 8], [[0, 1], [1, 2], [0, 3], [3, 3]]));
