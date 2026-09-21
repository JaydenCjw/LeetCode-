/**
 * 子数组范围和
 * 难度：★★★☆☆
 * 子数组范围是最大值减最小值。返回所有子数组范围之和。
 *
 * 示例：[1,2,3] => 4
 *
 * 思路：范围和等于所有子数组最大值之和减去最小值之和。两次单调栈分别统计每个元素作为最大、最小值的贡献。
 * 时间 O(n)，空间 O(n)
 */

function contributions(arr: number[], asMax: boolean): number {
  const n = arr.length;
  const left = new Array<number>(n);
  const right = new Array<number>(n);
  const stack: number[] = [];
  const worse = (stackValue: number, current: number): boolean =>
    asMax ? stackValue < current : stackValue > current;
  const worseOrEqual = (stackValue: number, current: number): boolean =>
    asMax ? stackValue <= current : stackValue >= current;

  for (let i = 0; i < n; i += 1) {
    while (stack.length > 0 && worse(arr[stack[stack.length - 1]], arr[i])) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    stack.push(i);
  }

  stack.length = 0;
  for (let i = n - 1; i >= 0; i -= 1) {
    while (stack.length > 0 && worseOrEqual(arr[stack[stack.length - 1]], arr[i])) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
    stack.push(i);
  }

  let sum = 0;
  for (let i = 0; i < n; i += 1) {
    sum += arr[i] * left[i] * right[i];
  }
  return sum;
}

export function subArrayRanges(nums: number[]): number {
  return contributions(nums, true) - contributions(nums, false);
}

console.log(subArrayRanges([1, 2, 3]));
