/**
 * 子数组按位或操作
 * 难度：★★★☆☆
 * 返回数组所有非空连续子数组按位或的不同结果个数。
 *
 * 示例：[1,1,2] => 3
 *
 * 思路：维护以当前位置结尾的或值集合。或只会置位，每个位置最多新增 32 个值。
 * 时间 O(n * 32)，空间 O(n * 32)
 */

export function subarrayBitwiseORs(arr: number[]): number {
  const answer = new Set<number>();
  let previous = new Set<number>();
  for (const value of arr) {
    const current = new Set<number>([value]);
    for (const old of previous) {
      current.add(old | value);
    }
    for (const item of current) {
      answer.add(item);
    }
    previous = current;
  }
  return answer.size;
}

console.log(subarrayBitwiseORs([1, 1, 2]));
