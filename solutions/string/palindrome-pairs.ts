/**
 * 回文对
 * 难度：★★★★☆
 * 找出所有不同下标对 (i, j)，使 words[i] + words[j] 是回文。
 *
 * 示例：words = ["abcd","dcba","lls","s","sssll"] => [[0,1],[1,0],[2,4],[3,2]]
 *
 * 思路：哈希记录单词下标。枚举每个单词的切分点，前缀或后缀是回文时，去找另一半的逆序。
 * 时间 O(n * L^2)，空间 O(n * L)
 */

function isPalindrome(word: string, left: number, right: number): boolean {
  while (left < right) {
    if (word[left] !== word[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

export function palindromePairs(words: string[]): number[][] {
  const indexByWord = new Map<string, number>();
  words.forEach((word, index) => indexByWord.set(word, index));
  const result: number[][] = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let cut = 0; cut <= word.length; cut++) {
      if (isPalindrome(word, 0, cut - 1)) {
        const reversed = word.slice(cut).split("").reverse().join("");
        const other = indexByWord.get(reversed);
        if (other !== undefined && other !== i) {
          result.push([other, i]);
        }
      }
      if (cut !== word.length && isPalindrome(word, cut, word.length - 1)) {
        const reversed = word.slice(0, cut).split("").reverse().join("");
        const other = indexByWord.get(reversed);
        if (other !== undefined && other !== i) {
          result.push([i, other]);
        }
      }
    }
  }
  result.sort((left, right) => left[0] - right[0] || left[1] - right[1]);
  return result;
}

console.log(palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]));
