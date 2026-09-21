/**
 * 对角线遍历 II
 * 难度：★★☆☆☆
 * 按对角线遍历锯齿状二维数组。同一条对角线（行号+列号相同）上，行号更大的元素先出现。
 *
 * 示例：nums=[[1,2,3],[4,5,6],[7,8,9]] => [1,4,2,7,5,3,8,6,9]
 *
 * 思路：按 i+j 分桶。从上到下、从左到右放入桶后，每桶反转，就变成行号从大到小。
 * 时间 O(元素个数)，空间 O(元素个数)
 */

export function findDiagonalOrderII(nums: number[][]): number[] {
  const buckets: number[][] = [];
  for (let row = 0; row < nums.length; row += 1) {
    for (let col = 0; col < nums[row].length; col += 1) {
      const key = row + col;
      if (!buckets[key]) {
        buckets[key] = [];
      }
      buckets[key].push(nums[row][col]);
    }
  }
  const result: number[] = [];
  for (const bucket of buckets) {
    for (let index = bucket.length - 1; index >= 0; index -= 1) {
      result.push(bucket[index]);
    }
  }
  return result;
}

console.log(
  findDiagonalOrderII([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
