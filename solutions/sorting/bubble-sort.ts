/**
 * 冒泡排序
 * 难度：★☆☆☆☆
 * 手写冒泡排序，把整数数组排成升序。
 *
 * 示例：[5,1,4,2,8] => [1,2,4,5,8]
 *
 * 思路：相邻元素逆序就交换，每一轮把当前最大值冒到末尾。某一轮没有交换即可提前结束。
 * 时间 O(n^2)，空间 O(1) 额外
 */

export function bubbleSort(nums: number[]): number[] {
  const values = nums.slice();
  for (let end = values.length - 1; end > 0; end -= 1) {
    let swapped = false;
    for (let index = 0; index < end; index += 1) {
      if (values[index] > values[index + 1]) {
        const temp = values[index];
        values[index] = values[index + 1];
        values[index + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return values;
}

console.log(bubbleSort([5, 1, 4, 2, 8]));
