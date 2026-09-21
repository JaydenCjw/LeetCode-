/**
 * 煎饼排序
 * 难度：★★☆☆☆
 * 一次翻转选择前 k 个元素并整体反转。返回一组 k，使数组变成升序。答案不唯一，这里给出煎饼排序的一组操作，并在示例里验证结果已升序。
 *
 * 示例：arr=[3,2,4,1]，翻转 [3,4,2,3,2] 后得到 [1,2,3,4]
 *
 * 思路：从大到小把当前最大值先翻到最前，再翻到它的最终位置。
 * 时间 O(n^2)，空间 O(n)
 */

export function pancakeSort(arr: number[]): number[] {
  const nums = arr.slice();
  const flips: number[] = [];
  const flip = (k: number): void => {
    flips.push(k);
    let left = 0;
    let right = k - 1;
    while (left < right) {
      const temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left += 1;
      right -= 1;
    }
  };
  for (let size = nums.length; size > 1; size -= 1) {
    let maxIndex = 0;
    for (let index = 1; index < size; index += 1) {
      if (nums[index] > nums[maxIndex]) {
        maxIndex = index;
      }
    }
    if (maxIndex === size - 1) {
      continue;
    }
    if (maxIndex > 0) {
      flip(maxIndex + 1);
    }
    flip(size);
  }
  return flips;
}

const pancake = [3, 2, 4, 1];
const flips = pancakeSort(pancake);
const sorted = pancake.slice();
for (const k of flips) {
  let left = 0;
  let right = k - 1;
  while (left < right) {
    const temp = sorted[left];
    sorted[left] = sorted[right];
    sorted[right] = temp;
    left += 1;
    right -= 1;
  }
}
console.log([flips, sorted]);
