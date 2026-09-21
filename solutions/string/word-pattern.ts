/**
 * 单词规律
 * 难度：★☆☆☆☆
 * 判断 pattern 与字符串 s 是否遵循相同的双射规律。
 *
 * 示例：pattern = "abba", s = "dog cat cat dog" => true
 *
 * 思路：字符与单词双向映射。
 * 时间 O(n)，空间 O(n)
 */

export function wordPattern(pattern: string, s: string): boolean {
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  const charToWord = new Map<string, string>();
  const wordToChar = new Map<string, string>();
  for (let i = 0; i < pattern.length; i++) {
    const mappedWord = charToWord.get(pattern[i]);
    const mappedChar = wordToChar.get(words[i]);
    if ((mappedWord !== undefined && mappedWord !== words[i]) || (mappedChar !== undefined && mappedChar !== pattern[i])) {
      return false;
    }
    charToWord.set(pattern[i], words[i]);
    wordToChar.set(words[i], pattern[i]);
  }
  return true;
}

console.log(wordPattern("abba", "dog cat cat dog"));
