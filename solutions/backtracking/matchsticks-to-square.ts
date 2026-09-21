/**
 * 火柴拼正方形
 * 难度：★★★☆☆
 * 判断能否把所有火柴分成四组，每组长度相等，拼成一个正方形。
 *
 * 示例：[1,1,2,2,2] => true
 *
 * 思路：边长为总和的四分之一。火柴从长到短填入四条边，空边对称剪枝。
 * 时间 O(4^n)，空间 O(n)
 */

export function makesquare(matchsticks: number[]): boolean {
  const sum = matchsticks.reduce((acc, value) => acc + value, 0);
  if (sum % 4 !== 0) {
    return false;
  }
  const side = sum / 4;
  matchsticks.sort((a, b) => b - a);
  if (matchsticks[0] > side) {
    return false;
  }
  const sides = [0, 0, 0, 0];

  function dfs(index: number): boolean {
    if (index === matchsticks.length) {
      return true;
    }
    for (let s = 0; s < 4; s++) {
      if (sides[s] + matchsticks[index] > side) {
        continue;
      }
      sides[s] += matchsticks[index];
      if (dfs(index + 1)) {
        return true;
      }
      sides[s] -= matchsticks[index];
      if (sides[s] === 0) {
        break;
      }
    }
    return false;
  }

  return dfs(0);
}

console.log(makesquare([1, 1, 2, 2, 2]));
