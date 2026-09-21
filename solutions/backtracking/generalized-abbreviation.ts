/**
 * 广义缩写
 * 难度：★★☆☆☆
 * 单词的缩写：连续省略的字母用数字表示，字母和数字交替。返回所有缩写。
 *
 * 示例：word = "word" 共 16 种
 *
 * 思路：每个位置选择省略（累加计数）或把当前计数落地后保留字母。
 * 时间 O(n·2^n)，空间 O(n·2^n)
 */

export function generateAbbreviations(word: string): string[] {
  const answer: string[] = [];

  function dfs(index: number, current: string, count: number): void {
    if (index === word.length) {
      answer.push(current + (count > 0 ? String(count) : ""));
      return;
    }
    dfs(index + 1, current, count + 1);
    const prefix = count > 0 ? String(count) : "";
    dfs(index + 1, current + prefix + word[index], 0);
  }

  dfs(0, "", 0);
  return answer;
}

console.log(generateAbbreviations("word").length);
