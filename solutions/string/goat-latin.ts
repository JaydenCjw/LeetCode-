/**
 * 山羊拉丁文
 * 难度：★★☆☆☆
 * 元音开头的单词末尾加 "ma"，辅音开头则把首字母移到末尾再加 "ma"。第 i 个单词（从 1 计）再加 i 个 "a"。
 *
 * 示例：sentence = "I speak Goat Latin" => "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
 *
 * 思路：按空格分词，按规则改写每个单词。
 * 时间 O(n)，空间 O(n)
 */

export function toGoatLatin(sentence: string): string {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  return sentence.split(" ").map((word, index) => {
    const core = vowels.has(word[0]) ? word : word.slice(1) + word[0];
    return core + "ma" + "a".repeat(index + 1);
  }).join(" ");
}

console.log(toGoatLatin("I speak Goat Latin"));
