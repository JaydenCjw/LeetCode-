/**
 * 正方形数组的数目
 * 难度：★★★★☆
 * 统计有多少种排列，使任意相邻两数之和为完全平方数。
 *
 * 示例：[1,17,8] => 2
 *
 * 思路：全排列回溯，跳过同一层的重复数字，并检查相邻和是否为平方数。
 * 时间 O(n!)，空间 O(n)
 */

function isSquareSum(value: number): boolean {
  let lo = 0;
  let hi = Math.min(value, 100000);
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    const square = mid * mid;
    if (square === value) {
      return true;
    }
    if (square < value) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return false;
}

export function numSquarefulPerms(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const used = new Array<boolean>(nums.length).fill(false);
  let answer = 0;

  function dfs(path: number[]): void {
    if (path.length === nums.length) {
      answer++;
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue;
      }
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
        continue;
      }
      if (path.length > 0 && !isSquareSum(path[path.length - 1] + nums[i])) {
        continue;
      }
      used[i] = true;
      path.push(nums[i]);
      dfs(path);
      path.pop();
      used[i] = false;
    }
  }

  dfs([]);
  return answer;
}

console.log(numSquarefulPerms([1, 17, 8]));
