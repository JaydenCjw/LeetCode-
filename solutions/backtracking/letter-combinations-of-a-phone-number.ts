/**
 * 电话号码的字母组合
 * 难度：★★★☆☆
 * 给定仅含数字 2-9 的字符串，返回所有可能的字母组合。
 *
 * 示例：digits = "23"
 * => ["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * 思路：回溯按位选择字母。
 * 时间 O(4^n * n)，空间 O(n)
 */

export function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  const map: Record<string, string> = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };

  const result: string[] = [];
  const path: string[] = [];

  const dfs = (index: number): void => {
    if (index === digits.length) {
      result.push(path.join(""));
      return;
    }
    for (const char of map[digits[index]]) {
      path.push(char);
      dfs(index + 1);
      path.pop();
    }
  };

  dfs(0);
  return result;
}

console.log(letterCombinations("23"));
