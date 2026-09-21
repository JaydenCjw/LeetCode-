/**
 * 移位字符串分组
 * 难度：★★☆☆☆
 * 若一个字符串能通过每个字符同时移动相同位数变成另一个，则它们同组。返回分组，组内和组间都按字典序。
 *
 * 示例：strings = ["abc","bcd","acef","xyz","az","ba","a","z"]
 * => [["a","z"],["abc","bcd","xyz"],["acef"],["az","ba"]]
 *
 * 思路：相邻字符差值对 26 取模作为分组键。
 * 时间 O(n * L)，空间 O(n * L)
 */

function shiftKey(word: string): string {
  const diffs: number[] = [];
  for (let i = 1; i < word.length; i++) {
    diffs.push((word.charCodeAt(i) - word.charCodeAt(i - 1) + 26) % 26);
  }
  return diffs.join(",");
}

export function groupStrings(strings: string[]): string[][] {
  const groups = new Map<string, string[]>();
  for (const word of strings) {
    const key = shiftKey(word);
    const bucket = groups.get(key);
    if (bucket === undefined) {
      groups.set(key, [word]);
    } else {
      bucket.push(word);
    }
  }
  const result = [...groups.values()].map((group) => [...group].sort());
  result.sort((left, right) => {
    const a = left.join(",");
    const b = right.join(",");
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  return result;
}

console.log(groupStrings(["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]));
