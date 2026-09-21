/**
 * 形成两个异或相等数组的三元组数目
 * 难度：★★★☆☆
 * 统计下标 (i, j, k) 使 a = arr[i..j-1]、b = arr[j..k] 的异或相等。
 *
 * 示例：[2,3,1,6,7] => 4
 *
 * 思路：两段异或相等当且仅当前缀 prefix[i-1] 与 prefix[k] 相等。每个这样的区间贡献 k-i 个 j。
 * 时间 O(n)，空间 O(n)
 */

export function countTriplets(arr: number[]): number {
  const count = new Map<number, number>([[0, 1]]);
  const indexSum = new Map<number, number>([[0, 0]]);
  let prefix = 0;
  let answer = 0;
  for (let k = 0; k < arr.length; k++) {
    prefix ^= arr[k];
    const seen = count.get(prefix) ?? 0;
    const sum = indexSum.get(prefix) ?? 0;
    answer += seen * k - sum;
    count.set(prefix, seen + 1);
    indexSum.set(prefix, sum + k + 1);
  }
  return answer;
}

console.log(countTriplets([2, 3, 1, 6, 7]));
