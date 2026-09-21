/**
 * 复写零
 * 难度：★★☆☆☆
 * 把数组中的每个 0 再复制一份，后续元素右移。数组长度固定，超出部分丢弃。原地修改。
 *
 * 示例：arr = [1,0,2,3,0,4,5,0] => [1,0,0,2,3,0,0,4]
 *
 * 思路：先数零，再从后向前写到扩展后的下标，避免覆盖未读元素。
 * 时间 O(n)，空间 O(1)
 */

export function duplicateZeros(arr: number[]): void {
  let zeros = 0;
  for (const num of arr) {
    if (num === 0) {
      zeros++;
    }
  }
  let read = arr.length - 1;
  let write = arr.length - 1 + zeros;
  while (read >= 0) {
    if (write < arr.length) {
      arr[write] = arr[read];
    }
    if (arr[read] === 0) {
      write--;
      if (write < arr.length) {
        arr[write] = 0;
      }
    }
    read--;
    write--;
  }
}

const arr = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(arr);
console.log(arr);
