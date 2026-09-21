/**
 * 因子的组合
 * 难度：★★☆☆☆
 * 返回 n 的所有因子组合。每个因子属于 [2, n)，组合内部非递减，且至少两个因子。
 *
 * 示例：n = 12 => [[2,6],[2,2,3],[3,4]]
 *
 * 思路：从因子 2 开始回溯，只尝试不超过剩余值平方根的因子，保证非递减。
 * 时间 O(n^{log n})，空间 O(log n)
 */

export function getFactors(n: number): number[][] {
  const answer: number[][] = [];

  function dfs(start: number, remain: number, path: number[]): void {
    for (let factor = start; factor * factor <= remain; factor++) {
      if (remain % factor !== 0) {
        continue;
      }
      path.push(factor);
      path.push(remain / factor);
      answer.push(path.slice());
      path.pop();
      dfs(factor, remain / factor, path);
      path.pop();
    }
  }

  dfs(2, n, []);
  return answer;
}

console.log(JSON.stringify(getFactors(12)));
