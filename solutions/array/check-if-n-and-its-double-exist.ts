/**
 * 检查整数及其两倍数是否存在
 * 难度：★☆☆☆☆
 * 判断是否存在不同下标 i、j，使 arr[i] == 2 * arr[j]。
 *
 * 示例：arr = [10,2,5,3] => true
 *
 * 思路：用集合记录已见数字，检查当前值的二倍或一半是否出现过。
 * 时间 O(n)，空间 O(n)
 */

export function checkIfExist(arr: number[]): boolean {
  const seen = new Set<number>();
  for (const num of arr) {
    if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

console.log(checkIfExist([10, 2, 5, 3]));
