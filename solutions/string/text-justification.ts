/**
 * 文本左右对齐
 * 难度：★★★★☆
 * 把单词排成若干行，每行宽度正好为 maxWidth。非末行单词间尽量均匀分配空格，末行左对齐。
 *
 * 示例：words = ["This","is","an","example","of","text","justification."], maxWidth = 16
 * => ["This    is    an","example  of text","justification.  "]
 *
 * 思路：贪心确定每行能放下的单词，再按间隙分配空格。
 * 时间 O(n * maxWidth)，空间 O(n * maxWidth)
 */

export function fullJustify(words: string[], maxWidth: number): string[] {
  const lines: string[] = [];
  let index = 0;
  while (index < words.length) {
    let length = words[index].length;
    let next = index + 1;
    while (next < words.length && length + 1 + words[next].length <= maxWidth) {
      length += 1 + words[next].length;
      next++;
    }
    const lineWords = words.slice(index, next);
    const gaps = lineWords.length - 1;
    const isLast = next === words.length;
    if (isLast || gaps === 0) {
      const line = lineWords.join(" ");
      lines.push(line + " ".repeat(maxWidth - line.length));
    } else {
      const spaces = maxWidth - lineWords.reduce((sum, word) => sum + word.length, 0);
      const base = Math.floor(spaces / gaps);
      let extra = spaces % gaps;
      let line = "";
      for (let i = 0; i < lineWords.length; i++) {
        line += lineWords[i];
        if (i < gaps) {
          const count = base + (extra > 0 ? 1 : 0);
          if (extra > 0) {
            extra--;
          }
          line += " ".repeat(count);
        }
      }
      lines.push(line);
    }
    index = next;
  }
  return lines;
}

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
