/**
 * 活字印刷
 * 难度：★★☆☆☆
 * 给定一组字母瓷砖（可含重复），求能印出的非空序列个数。
 *
 * 示例：tiles = "AAB" => 8
 *
 * 思路：按字母计数回溯，每次用掉一种还有剩余的字母，再把后续序列数加一。
 * 时间 O(26^n)，空间 O(n)
 */

export function numTilePossibilities(tiles: string): number {
  const count = new Array<number>(26).fill(0);
  for (const ch of tiles) {
    count[ch.charCodeAt(0) - 65]++;
  }

  function dfs(): number {
    let sum = 0;
    for (let i = 0; i < 26; i++) {
      if (count[i] === 0) {
        continue;
      }
      count[i]--;
      sum += 1 + dfs();
      count[i]++;
    }
    return sum;
  }

  return dfs();
}

console.log(numTilePossibilities("AAB"));
