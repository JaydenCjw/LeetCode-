/**
 * 字母异位词分组
 * 将字符串数组中互为异位词的分到一组。
 *
 * 示例：strs = ["eat","tea","tan","ate","nat","bat"]
 * => [["eat","tea","ate"],["tan","nat"],["bat"]]
 *
 * 思路：排序后的串作为哈希键。
 * 时间 O(n * k log k)，空间 O(n*k)
 */

export function groupAnagrams(strs: string[]): string[][] {
  const groups = new Map<string, string[]>();

  for (const str of strs) {
    const key = [...str].sort().join("");
    const list = groups.get(key);
    if (list) {
      list.push(str);
    } else {
      groups.set(key, [str]);
    }
  }

  return [...groups.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
