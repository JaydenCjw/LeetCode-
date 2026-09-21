/**
 * 下一个更大元素 I
 * 难度：★★★☆☆
 * nums1 是 nums2 子集，对 nums1 每个元素找 nums2 中右侧下一个更大元素，没有则为 -1。
 *
 * 示例：nums1 = [4,1,2], nums2 = [1,3,4,2] => [-1,3,-1]
 *
 * 思路：单调栈预处理 nums2 的下一更大映射。
 * 时间 O(n)，空间 O(n)
 */

export function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const nextGreater = new Map<number, number>();
  const stack: number[] = [];

  for (const num of nums2) {
    while (stack.length > 0 && stack[stack.length - 1] < num) {
      nextGreater.set(stack.pop()!, num);
    }
    stack.push(num);
  }

  return nums1.map((num) => nextGreater.get(num) ?? -1);
}

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
