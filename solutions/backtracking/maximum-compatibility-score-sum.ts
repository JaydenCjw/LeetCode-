/**
 * 最大兼容性得分和
 * 难度：★★★☆☆
 * 每位学生与一位导师一一配对。得分是答案相同的题目数。求所有配对的最大总分。
 *
 * 示例：students = [[1,1,0],[1,0,1],[0,0,1]]，mentors = [[1,0,0],[0,0,1],[1,1,0]] => 8
 *
 * 思路：学生按顺序回溯分配尚未使用的导师，累加匹配题数。
 * 时间 O(m!)，空间 O(m)
 */

export function maxCompatibilitySum(students: number[][], mentors: number[][]): number {
  const m = students.length;
  const used = new Array<boolean>(m).fill(false);

  function score(student: number[], mentor: number[]): number {
    let count = 0;
    for (let i = 0; i < student.length; i++) {
      if (student[i] === mentor[i]) {
        count++;
      }
    }
    return count;
  }

  function dfs(index: number): number {
    if (index === m) {
      return 0;
    }
    let best = 0;
    for (let j = 0; j < m; j++) {
      if (used[j]) {
        continue;
      }
      used[j] = true;
      best = Math.max(best, score(students[index], mentors[j]) + dfs(index + 1));
      used[j] = false;
    }
    return best;
  }

  return dfs(0);
}

console.log(
  maxCompatibilitySum(
    [
      [1, 1, 0],
      [1, 0, 1],
      [0, 0, 1],
    ],
    [
      [1, 0, 0],
      [0, 0, 1],
      [1, 1, 0],
    ],
  ),
);
