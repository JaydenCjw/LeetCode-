/**
 * 使绳子变成彩色的最少时间
 * 难度：★★★☆☆
 * 相邻同色气球必须删到只剩一个。删除第 i 个需要 neededTime[i]。求最少总时间。
 *
 * 示例：colors = "abaac", neededTime = [1,2,3,4,5] => 3
 *
 * 思路：同一颜色连续段里保留耗时最大的，其余都删掉。
 * 时间 O(n)，空间 O(1)
 */

export function minCost(colors: string, neededTime: number[]): number {
  let answer = 0;
  let i = 0;
  while (i < colors.length) {
    let j = i;
    let sum = 0;
    let maxTime = 0;
    while (j < colors.length && colors[j] === colors[i]) {
      sum += neededTime[j];
      maxTime = Math.max(maxTime, neededTime[j]);
      j++;
    }
    if (j - i > 1) {
      answer += sum - maxTime;
    }
    i = j;
  }
  return answer;
}

console.log(minCost("abaac", [1, 2, 3, 4, 5]));
