/**
 * 字符串的编码与解码
 * 难度：★★☆☆☆
 * 设计编码和解码，使字符串列表能被还原。字符串可能为空，也可能包含分隔符。
 *
 * 示例：["lint","code","love","you"] 编码后再解码得到原列表。
 *
 * 思路：每个字符串写成“长度#内容”，解码时按长度切分，避免内容里的 # 干扰。
 * 时间 O(n)，空间 O(n)
 */

export function encode(strs: string[]): string {
  return strs.map((text) => `${text.length}#${text}`).join("");
}

export function decode(s: string): string[] {
  const result: string[] = [];
  let index = 0;
  while (index < s.length) {
    const mark = s.indexOf("#", index);
    const length = Number(s.slice(index, mark));
    const start = mark + 1;
    result.push(s.slice(start, start + length));
    index = start + length;
  }
  return result;
}

console.log(decode(encode(["lint", "code", "love", "you"])));
console.log(decode(encode(["", "#"])));
