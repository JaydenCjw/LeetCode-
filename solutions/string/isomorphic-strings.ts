/**
 * 同构字符串
 * 难度：★☆☆☆☆
 * 判断 s 与 t 是否同构：s 中字符可一一映射到 t，且映射可逆。
 *
 * 示例：s = "egg", t = "add" => true；s = "foo", t = "bar" => false
 *
 * 思路：双向映射，避免多对一。
 * 时间 O(n)，空间 O(1)
 */

export function isIsomorphic(s: string, t: string): boolean {
  const sToT = new Map<string, string>();
  const tToS = new Map<string, string>();
  for (let i = 0; i < s.length; i++) {
    const from = sToT.get(s[i]);
    const to = tToS.get(t[i]);
    if ((from !== undefined && from !== t[i]) || (to !== undefined && to !== s[i])) {
      return false;
    }
    sToT.set(s[i], t[i]);
    tToS.set(t[i], s[i]);
  }
  return true;
}

console.log(isIsomorphic("egg", "add"));
