/**
 * 公平分发饼干
 * 难度：★★★☆☆
 * 把饼干分给 k 个孩子，每个孩子得到若干包。最小化「拿到最多饼干的孩子」的总量。
 *
 * 示例：cookies = [8,15,10,20,8], k = 2 => 31
 *
 * 思路：饼干从大到小分配。当前和已不优于已知答案则剪枝，空孩子只试一次。
 * 时间 O(k^n)，空间 O(k)
 */

export function distributeCookies(cookies: number[], k: number): number {
  cookies.sort((a, b) => b - a);
  const bags = new Array<number>(k).fill(0);
  let best = Number.POSITIVE_INFINITY;

  function dfs(index: number): void {
    if (index === cookies.length) {
      best = Math.min(best, Math.max(...bags));
      return;
    }
    for (let j = 0; j < k; j++) {
      if (bags[j] + cookies[index] >= best) {
        if (bags[j] === 0) {
          break;
        }
        continue;
      }
      bags[j] += cookies[index];
      dfs(index + 1);
      bags[j] -= cookies[index];
      if (bags[j] === 0) {
        break;
      }
    }
  }

  dfs(0);
  return best;
}

console.log(distributeCookies([8, 15, 10, 20, 8], 2));
