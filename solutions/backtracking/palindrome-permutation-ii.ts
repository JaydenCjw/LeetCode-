/**
 * 回文排列 II
 * 难度：★★☆☆☆
 * 返回字符串的所有不同回文排列。无法构成回文则返回空数组。
 *
 * 示例：s = "aabb" => ["abba","baab"]
 *
 * 思路：最多一个奇数次字符放中间。对其余字符的一半做不重复全排列，再镜像拼接。
 * 时间 O(n·(n/2)!)，空间 O(n)
 */

export function generatePalindromes(s: string): string[] {
  const freq = new Map<string, number>();
  for (const ch of s) {
    freq.set(ch, (freq.get(ch) ?? 0) + 1);
  }
  let odd = "";
  const half: string[] = [];
  for (const [ch, count] of freq) {
    if (count % 2 === 1) {
      if (odd !== "") {
        return [];
      }
      odd = ch;
    }
    for (let i = 0; i < Math.floor(count / 2); i++) {
      half.push(ch);
    }
  }
  half.sort();
  const used = new Array<boolean>(half.length).fill(false);
  const answer: string[] = [];

  function dfs(path: string[]): void {
    if (path.length === half.length) {
      const left = path.join("");
      const right = left.split("").reverse().join("");
      answer.push(left + odd + right);
      return;
    }
    for (let i = 0; i < half.length; i++) {
      if (used[i]) {
        continue;
      }
      if (i > 0 && half[i] === half[i - 1] && !used[i - 1]) {
        continue;
      }
      used[i] = true;
      path.push(half[i]);
      dfs(path);
      path.pop();
      used[i] = false;
    }
  }

  dfs([]);
  return answer;
}

console.log(JSON.stringify(generatePalindromes("aabb").sort()));
