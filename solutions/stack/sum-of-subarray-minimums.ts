/**
 * 子数组的最小值之和
 * 难度：★★★☆☆
 * 求所有子数组最小值之和，答案对 10^9+7 取模。
 *
 * 示例：[3,1,2,4] => 17
 *
 * 思路：单调栈求出每个位置作为最小值时，左右能延伸的距离。贡献是值乘左右长度。相等值只在一侧严格比较，避免重复计数。
 * 时间 O(n)，空间 O(n)
 */

export function sumSubarrayMins(arr: number[]): number {
  const mod = 1_000_000_007;
  const n = arr.length;
  const left = new Array<number>(n);
  const right = new Array<number>(n);
  const stack: number[] = [];

  for (let i = 0; i < n; i += 1) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
      stack.pop();
    }
    left[i] = stack.length === 0 ? i + 1 : i - stack[stack.length - 1];
    stack.push(i);
  }

  stack.length = 0;
  for (let i = n - 1; i >= 0; i -= 1) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    right[i] = stack.length === 0 ? n - i : stack[stack.length - 1] - i;
    stack.push(i);
  }

  let answer = 0;
  for (let i = 0; i < n; i += 1) {
    answer = (answer + arr[i] * left[i] * right[i]) % mod;
  }
  return answer;
}

console.log(sumSubarrayMins([3, 1, 2, 4]));
