/**
 * 扰乱字符串
 * 难度：★★★★☆
 * 把字符串拆成两段，可以交换这两段，再递归扰乱。判断 s2 是否是 s1 的扰乱结果。
 *
 * 示例：s1 = "great", s2 = "rgeat" => true
 *
 * 思路：记忆化搜索。字符计数不同则不可能；否则枚举分割点，比较交换与不交换两种拼接。
 * 时间 O(n^4)，空间 O(n^3)
 */

export function isScramble(s1: string, s2: string): boolean {
  const memo = new Map<string, boolean>();

  function dfs(a: string, b: string): boolean {
    const key = `${a}#${b}`;
    const cached = memo.get(key);
    if (cached !== undefined) {
      return cached;
    }
    if (a === b) {
      memo.set(key, true);
      return true;
    }
    const count = new Array<number>(26).fill(0);
    for (let i = 0; i < a.length; i++) {
      count[a.charCodeAt(i) - 97]++;
      count[b.charCodeAt(i) - 97]--;
    }
    if (count.some((value) => value !== 0)) {
      memo.set(key, false);
      return false;
    }
    const n = a.length;
    for (let i = 1; i < n; i++) {
      const noSwap =
        dfs(a.slice(0, i), b.slice(0, i)) && dfs(a.slice(i), b.slice(i));
      const swap =
        dfs(a.slice(0, i), b.slice(n - i)) && dfs(a.slice(i), b.slice(0, n - i));
      if (noSwap || swap) {
        memo.set(key, true);
        return true;
      }
    }
    memo.set(key, false);
    return false;
  }

  return dfs(s1, s2);
}

console.log(isScramble("great", "rgeat"));
