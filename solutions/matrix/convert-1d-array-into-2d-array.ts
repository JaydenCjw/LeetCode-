/**
 * 将一维数组转变为二维数组
 * 难度：★☆☆☆☆
 * 把 original 按行优先填进 m 行 n 列。若长度不等于 m*n，返回空数组。
 *
 * 示例：original=[1,2,3,4], m=2, n=2 => [[1,2],[3,4]]
 *
 * 思路：下标 i 对应第 floor(i/n) 行、第 i%n 列。
 * 时间 O(mn)，空间 O(mn)
 */

export function construct2DArray(original: number[], m: number, n: number): number[][] {
  if (original.length !== m * n) {
    return [];
  }
  const result = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
  for (let index = 0; index < original.length; index += 1) {
    result[Math.floor(index / n)][index % n] = original[index];
  }
  return result;
}

console.log(construct2DArray([1, 2, 3, 4], 2, 2));
