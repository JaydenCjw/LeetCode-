/**
 * 将每个元素替换为右侧最大元素
 * 难度：★☆☆☆☆
 * 把每个元素替换成它右边所有元素的最大值，最后一个元素替换为 -1。
 *
 * 示例：arr = [17,18,5,4,6,1] => [18,6,6,6,1,-1]
 *
 * 思路：从右向左扫描，维护右侧最大值。
 * 时间 O(n)，空间 O(n)
 */

export function replaceElements(arr: number[]): number[] {
  const result = new Array<number>(arr.length);
  let maxRight = -1;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] = maxRight;
    if (arr[i] > maxRight) {
      maxRight = arr[i];
    }
  }
  return result;
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
