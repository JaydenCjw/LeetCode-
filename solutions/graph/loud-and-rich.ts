/**
 * 喧闹和富有
 * 难度：★★★☆☆
 * richer[i] = [a, b] 表示 a 比 b 更有钱。quiet[x] 越小越安静。对每个人，返回不比他穷的人里最安静的那个（含自己）。
 *
 * 示例：richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]]，quiet = [3,2,5,4,6,1,7,0]
 * => [5,5,2,5,4,5,6,7]
 *
 * 思路：从较穷的人指向更富的人，记忆化 DFS 在可达的更富集合里取安静值最小者。
 * 时间 O(n+m)，空间 O(n+m)
 */

export function loudAndRich(richer: number[][], quiet: number[]): number[] {
  const n = quiet.length;
  const richerThan: number[][] = Array.from({ length: n }, () => []);
  for (const [rich, poor] of richer) {
    richerThan[poor].push(rich);
  }

  const answer = new Array<number>(n).fill(-1);
  const dfs = (person: number): number => {
    if (answer[person] !== -1) {
      return answer[person];
    }
    answer[person] = person;
    for (const next of richerThan[person]) {
      const candidate = dfs(next);
      if (quiet[candidate] < quiet[answer[person]]) {
        answer[person] = candidate;
      }
    }
    return answer[person];
  };

  for (let person = 0; person < n; person++) {
    dfs(person);
  }
  return answer;
}

console.log(
  loudAndRich(
    [
      [1, 0],
      [2, 1],
      [3, 1],
      [3, 7],
      [4, 3],
      [5, 3],
      [6, 3],
    ],
    [3, 2, 5, 4, 6, 1, 7, 0],
  ),
);
