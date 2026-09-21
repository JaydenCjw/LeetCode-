/**
 * 划分字母区间
 * 难度：★★★☆☆
 * 同一字母最多出现在一个片段，返回每个片段长度，且片段数尽可能多。
 *
 * 示例："ababcbacadefegdehijhklij" => [9,7,8]
 *
 * 思路：记录每个字母最后位置，扩展当前片段右端。
 * 时间 O(n)，空间 O(1)
 */

export function partitionLabels(s: string): number[] {
  const last = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    last.set(s[i], i);
  }
  const result: number[] = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last.get(s[i])!);
    if (i === end) {
      result.push(end - start + 1);
      start = i + 1;
    }
  }
  return result;
}

console.log(partitionLabels("ababcbacadefegdehijhklij"));
