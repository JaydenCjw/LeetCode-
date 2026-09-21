/**
 * 数组的相对排序
 * 难度：★★☆☆☆
 * arr2 中的元素互不相同，且都出现在 arr1 中。按 arr2 的顺序排列 arr1；不在 arr2 里的元素按升序放在末尾。
 *
 * 示例：arr1=[2,3,1,3,2,4,6,7,9,2,19], arr2=[2,1,4,3,9,6] => [2,2,2,1,4,3,3,9,6,7,19]
 *
 * 思路：给 arr2 中的值一个优先级，排序时先比优先级，未出现的值优先级靠后再比数值。
 * 时间 O(n log n)，空间 O(n)
 */

export function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const order = new Map<number, number>();
  arr2.forEach((value, index) => {
    order.set(value, index);
  });
  return arr1.slice().sort((a, b) => {
    const rankA = order.get(a);
    const rankB = order.get(b);
    if (rankA !== undefined && rankB !== undefined) {
      return rankA - rankB;
    }
    if (rankA !== undefined) {
      return -1;
    }
    if (rankB !== undefined) {
      return 1;
    }
    return a - b;
  });
}

console.log(relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]));
