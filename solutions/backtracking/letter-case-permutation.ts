/**
 * 字母大小写全排列
 * 难度：★★☆☆☆
 * 给定字符串，返回字母大小写的所有排列，数字保持不变。
 *
 * 示例："a1b2" => ["a1b2","a1B2","A1b2","A1B2"]
 *
 * 思路：遇到字母分两条分支。
 * 时间 O(2^k * n)，空间 O(n)
 */

export function letterCasePermutation(s: string): string[] {
  const result: string[] = [];
  const chars = s.split("");

  const dfs = (index: number): void => {
    if (index === chars.length) {
      result.push(chars.join(""));
      return;
    }
    dfs(index + 1);
    if (/[a-zA-Z]/.test(chars[index])) {
      const code = chars[index].charCodeAt(0);
      chars[index] = String.fromCharCode(code ^ 32);
      dfs(index + 1);
      chars[index] = String.fromCharCode(code);
    }
  };

  dfs(0);
  return result;
}

console.log(letterCasePermutation("a1b2"));
