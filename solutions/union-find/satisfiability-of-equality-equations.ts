/**
 * 等式方程的可满足性
 * 难度：★★★☆☆
 * equations[i] 形如 "a==b" 或 "a!=b"，判断能否同时成立。
 *
 * 示例：["a==b","b!=a"] => false；["a==b","b==c","a==c"] => true
 *
 * 思路：先并查集合并所有 ==，再检查 != 是否冲突。
 * 时间 O(n α(26))，空间 O(1)
 */

import { UnionFind } from "@/union-find";

export function equationsPossible(equations: string[]): boolean {
  const uf = new UnionFind(26);
  const code = (char: string): number => char.charCodeAt(0) - 97;

  for (const equation of equations) {
    if (equation[1] === "=") {
      uf.union(code(equation[0]), code(equation[3]));
    }
  }

  for (const equation of equations) {
    if (equation[1] === "!" && uf.connected(code(equation[0]), code(equation[3]))) {
      return false;
    }
  }

  return true;
}

console.log(equationsPossible(["a==b", "b!=a"]));
console.log(equationsPossible(["a==b", "b==c", "a==c"]));
