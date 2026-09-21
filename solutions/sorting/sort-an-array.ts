/**
 * 排序数组
 * 难度：★★★☆☆
 * 对数组升序排序，返回结果（实现快排/归并可接受）。
 *
 * 示例：nums = [5,2,3,1] => [1,2,3,5]
 *
 * 思路：三路快排，减少重复元素退化。
 * 平均时间 O(n log n)，空间 O(log n)
 */

export function sortArray(nums: number[]): number[] {
  const arr = [...nums];

  const sort = (left: number, right: number): void => {
    if (left >= right) return;

    const pivot = arr[left + Math.floor(Math.random() * (right - left + 1))];
    let lt = left;
    let i = left;
    let gt = right;

    while (i <= gt) {
      if (arr[i] < pivot) {
        [arr[lt], arr[i]] = [arr[i], arr[lt]];
        lt++;
        i++;
      } else if (arr[i] > pivot) {
        [arr[i], arr[gt]] = [arr[gt], arr[i]];
        gt--;
      } else {
        i++;
      }
    }

    sort(left, lt - 1);
    sort(gt + 1, right);
  };

  sort(0, arr.length - 1);
  return arr;
}

console.log(sortArray([5, 2, 3, 1]));
console.log(sortArray([5, 1, 1, 2, 0, 0]));
