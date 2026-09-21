/**
 * 分割回文串
 * 将 s 分割成若干回文子串，返回所有可能分割方案。
 *
 * 示例：s = "aab" => [["a","a","b"],["aa","b"]]
 *
 * 思路：回溯 + 回文判断（可预处理 DP）。
 * 时间指数级，空间 O(n)
 */

export function partition(s: string): string[][] {
  const result: string[][] = [];
  const path: string[] = [];

  const isPalindrome = (left: number, right: number): boolean => {
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  };

  const dfs = (start: number): void => {
    if (start === s.length) {
      result.push([...path]);
      return;
    }
    for (let end = start; end < s.length; end++) {
      if (!isPalindrome(start, end)) continue;
      path.push(s.slice(start, end + 1));
      dfs(end + 1);
      path.pop();
    }
  };

  dfs(0);
  return result;
}

console.log(partition("aab"));
