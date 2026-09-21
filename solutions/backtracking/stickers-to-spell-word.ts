/**
 * 贴纸拼词
 * 难度：★★★★☆
 * 每张贴纸是一个单词，可重复使用。每次使用消耗该贴纸上的字母。拼出 target 最少需要几张。
 *
 * 示例：stickers = ["with","example","science"], target = "thehat" => 3
 *
 * 思路：把剩余目标按字母计数记忆化。每张贴纸必须用掉当前第一个还缺的字母，再递归。
 * 时间 O(贴纸数 · 状态数 · 字母表)，空间 O(状态数)
 */

export function minStickers(stickers: string[], target: string): number {
  const stickerCounts = stickers.map((sticker) => {
    const count = new Array<number>(26).fill(0);
    for (const ch of sticker) {
      count[ch.charCodeAt(0) - 97]++;
    }
    return count;
  });
  const memo = new Map<string, number>();

  function dfs(remain: string): number {
    if (remain.length === 0) {
      return 0;
    }
    const cached = memo.get(remain);
    if (cached !== undefined) {
      return cached;
    }
    const need = new Array<number>(26).fill(0);
    for (const ch of remain) {
      need[ch.charCodeAt(0) - 97]++;
    }
    let best = Number.POSITIVE_INFINITY;
    const first = remain.charCodeAt(0) - 97;
    for (const sticker of stickerCounts) {
      if (sticker[first] === 0) {
        continue;
      }
      let next = "";
      for (let i = 0; i < 26; i++) {
        const left = need[i] - sticker[i];
        if (left > 0) {
          next += String.fromCharCode(97 + i).repeat(left);
        }
      }
      best = Math.min(best, 1 + dfs(next));
    }
    memo.set(remain, best);
    return best;
  }

  const answer = dfs(target.split("").sort().join(""));
  return answer === Number.POSITIVE_INFINITY ? -1 : answer;
}

console.log(minStickers(["with", "example", "science"], "thehat"));
