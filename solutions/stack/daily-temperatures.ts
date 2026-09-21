/**
 * 每日温度
 * 难度：★★★☆☆
 * temperatures[i] 表示第 i 天温度，返回要等多少天才会更暖和；没有则 0。
 *
 * 示例：temperatures = [73,74,75,71,69,72,76,73]
 * => [1,1,4,2,1,1,0,0]
 *
 * 思路：单调递减栈存下标。
 * 时间 O(n)，空间 O(n)
 */

export function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const answer = new Array<number>(n).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const prev = stack.pop()!;
      answer[prev] = i - prev;
    }
    stack.push(i);
  }

  return answer;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
