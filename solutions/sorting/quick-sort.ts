/**
 * 快速排序
 * 难度：★★☆☆☆
 * 手写快速排序（与仓库里的数组排序题解不是同一份实现），把整数数组排成升序。
 *
 * 示例：[5,1,1,2,0,0] => [0,0,1,1,2,5]
 *
 * 思路：取区间末尾为基准，分区后递归左右两侧。
 * 时间平均 O(n log n)，空间 O(log n)
 */

export function quickSort(nums: number[]): number[] {
  const values = nums.slice();

  const partition = (left: number, right: number): number => {
    const pivot = values[right];
    let store = left;
    for (let index = left; index < right; index += 1) {
      if (values[index] <= pivot) {
        const temp = values[store];
        values[store] = values[index];
        values[index] = temp;
        store += 1;
      }
    }
    const temp = values[store];
    values[store] = values[right];
    values[right] = temp;
    return store;
  };

  const sort = (left: number, right: number): void => {
    if (left >= right) {
      return;
    }
    const pivot = partition(left, right);
    sort(left, pivot - 1);
    sort(pivot + 1, right);
  };

  if (values.length > 0) {
    sort(0, values.length - 1);
  }
  return values;
}

console.log(quickSort([5, 1, 1, 2, 0, 0]));
