/**
 * 归并排序
 * 难度：★★☆☆☆
 * 手写归并排序，把整数数组排成升序。
 *
 * 示例：[5,2,3,1] => [1,2,3,5]
 *
 * 思路：分治。左右两半分别排好后，用双指针合并到辅助数组。
 * 时间 O(n log n)，空间 O(n)
 */

export function mergeSort(nums: number[]): number[] {
  const values = nums.slice();
  const aux = values.slice();

  const sort = (left: number, right: number): void => {
    if (left >= right) {
      return;
    }
    const mid = (left + right) >> 1;
    sort(left, mid);
    sort(mid + 1, right);
    let i = left;
    let j = mid + 1;
    let write = left;
    while (i <= mid && j <= right) {
      if (values[i] <= values[j]) {
        aux[write] = values[i];
        i += 1;
      } else {
        aux[write] = values[j];
        j += 1;
      }
      write += 1;
    }
    while (i <= mid) {
      aux[write] = values[i];
      i += 1;
      write += 1;
    }
    while (j <= right) {
      aux[write] = values[j];
      j += 1;
      write += 1;
    }
    for (let index = left; index <= right; index += 1) {
      values[index] = aux[index];
    }
  };

  if (values.length > 0) {
    sort(0, values.length - 1);
  }
  return values;
}

console.log(mergeSort([5, 2, 3, 1]));
