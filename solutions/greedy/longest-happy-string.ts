/**
 * 最长快乐字符串
 * 难度：★★★☆☆
 * 最多使用 a 个 'a'、b 个 'b'、c 个 'c'，且不能有三个相同字符连续。返回一种最长字符串。
 *
 * 示例：a = 1, b = 1, c = 7 => "ccaccbcc"（长度 8）
 *
 * 思路：每次优先放剩余最多、且不会造成三连的字符。
 * 时间 O((a+b+c) log 3)，空间 O(a+b+c)
 */

export function longestDiverseString(a: number, b: number, c: number): string {
  const counts: [string, number][] = [
    ["a", a],
    ["b", b],
    ["c", c],
  ];
  const parts: string[] = [];
  while (true) {
    counts.sort((x, y) => y[1] - x[1]);
    let placed = false;
    for (const item of counts) {
      if (item[1] === 0) {
        continue;
      }
      const len = parts.length;
      if (len >= 2 && parts[len - 1] === item[0] && parts[len - 2] === item[0]) {
        continue;
      }
      parts.push(item[0]);
      item[1]--;
      placed = true;
      break;
    }
    if (!placed) {
      break;
    }
  }
  return parts.join("");
}

console.log(longestDiverseString(1, 1, 7));
