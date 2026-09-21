/**
 * 二十四点游戏
 * 难度：★★★★☆
 * 用四个数各一次，通过 + - * / 判断能否得到 24。除法为实数除法。
 *
 * 示例：[4,1,8,7] => true
 *
 * 思路：枚举两个数和一种运算，把结果放回剩余数字继续搜索，最后与 24 比较误差。
 * 时间 O(1)，空间 O(1)
 */

export function judgePoint24(cards: number[]): boolean {
  const epsilon = 1e-6;

  function dfs(nums: number[]): boolean {
    if (nums.length === 1) {
      return Math.abs(nums[0] - 24) < epsilon;
    }
    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j < nums.length; j++) {
        if (i === j) {
          continue;
        }
        const next: number[] = [];
        for (let k = 0; k < nums.length; k++) {
          if (k !== i && k !== j) {
            next.push(nums[k]);
          }
        }
        const a = nums[i];
        const b = nums[j];
        const candidates = [a + b, a - b, a * b];
        if (Math.abs(b) > epsilon) {
          candidates.push(a / b);
        }
        for (const value of candidates) {
          next.push(value);
          if (dfs(next)) {
            return true;
          }
          next.pop();
        }
      }
    }
    return false;
  }

  return dfs(cards);
}

console.log(judgePoint24([4, 1, 8, 7]));
