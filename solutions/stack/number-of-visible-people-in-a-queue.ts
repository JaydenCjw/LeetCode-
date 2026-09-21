/**
 * 队列中可以看到的人数
 * 难度：★★★★☆
 * 人排成一列，身高为 heights[i]。一个人能看见右侧某人，当且仅当两人之间的人都比那个人矮。返回每个人能看见的人数。
 *
 * 示例：[10,6,8,5,11,9] => [3,1,2,1,1,0]
 *
 * 思路：从右向左维护单调递减栈。弹出的人都看得见；若栈里还剩人，最近的更高的人也看得见。
 * 时间 O(n)，空间 O(n)
 */

export function canSeePersonsCount(heights: number[]): number[] {
  const answer = new Array<number>(heights.length).fill(0);
  const stack: number[] = [];
  for (let i = heights.length - 1; i >= 0; i -= 1) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] < heights[i]) {
      stack.pop();
      answer[i] += 1;
    }
    if (stack.length > 0) {
      answer[i] += 1;
    }
    stack.push(i);
  }
  return answer;
}

console.log(canSeePersonsCount([10, 6, 8, 5, 11, 9]));
