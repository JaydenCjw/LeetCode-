/**
 * 递增子序列
 * 难度：★★★☆☆
 * 找出所有长度至少为 2 的非递减子序列，子序列内下标递增。相同数值集合但下标不同只保留一次。
 *
 * 示例：[4,6,7,7] => [[4,6],[4,6,7],[4,6,7,7],[4,7],[4,7,7],[6,7],[6,7,7],[7,7]]
 *
 * 思路：按位置回溯。同一层用集合跳过相同取值，避免重复子序列。
 * 时间 O(n·2^n)，空间 O(n)
 */

export function findSubsequences(nums: number[]): number[][] {
  const answer: number[][] = [];

  function dfs(start: number, path: number[]): void {
    if (path.length >= 2) {
      answer.push(path.slice());
    }
    const used = new Set<number>();
    for (let i = start; i < nums.length; i++) {
      if (used.has(nums[i])) {
        continue;
      }
      if (path.length > 0 && nums[i] < path[path.length - 1]) {
        continue;
      }
      used.add(nums[i]);
      path.push(nums[i]);
      dfs(i + 1, path);
      path.pop();
    }
  }

  dfs(0, []);
  return answer;
}

console.log(JSON.stringify(findSubsequences([4, 6, 7, 7])));
