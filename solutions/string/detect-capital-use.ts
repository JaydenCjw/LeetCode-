/**
 * 检测大写字母
 * 难度：★☆☆☆☆
 * 单词用大写合法的三种情况：全大写、全小写、仅首字母大写。
 *
 * 示例：word = "USA" => true；word = "FlaG" => false
 *
 * 思路：统计大写字母个数，对照三种合法情况。
 * 时间 O(n)，空间 O(1)
 */

export function detectCapitalUse(word: string): boolean {
  let upper = 0;
  for (const ch of word) {
    if (ch >= "A" && ch <= "Z") {
      upper++;
    }
  }
  return upper === word.length || upper === 0 || (upper === 1 && word[0] >= "A" && word[0] <= "Z");
}

console.log(detectCapitalUse("USA"));
console.log(detectCapitalUse("FlaG"));
