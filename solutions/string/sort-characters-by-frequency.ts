/**
 * 根据字符出现频率排序
 * 难度：★★☆☆☆
 * 按字符出现频率从高到低重排字符串。频率相同则按字符码点从小到大。
 *
 * 示例：s = "tree" => "eert"
 *
 * 思路：计数后按频率和字符排序再展开。
 * 时间 O(n + k log k)，空间 O(k)，k 为字符种类
 */

export function frequencySort(s: string): string {
  const count = new Map<string, number>();
  for (const ch of s) {
    count.set(ch, (count.get(ch) ?? 0) + 1);
  }
  const chars = [...count.keys()].sort((left, right) => {
    const diff = (count.get(right) ?? 0) - (count.get(left) ?? 0);
    if (diff !== 0) {
      return diff;
    }
    return left < right ? -1 : 1;
  });
  let result = "";
  for (const ch of chars) {
    result += ch.repeat(count.get(ch) ?? 0);
  }
  return result;
}

console.log(frequencySort("tree"));
