/**
 * 除法求值
 * 难度：★★★☆☆
 * equations[i] = [Ai, Bi] 表示 Ai / Bi = values[i]。对每个查询计算 Cj / Dj，无法确定返回 -1。
 *
 * 思路：带权并查集，权值表示节点到根的比值。
 * 时间 O((n+q) α(n))，空间 O(n)
 */

export function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  const parent = new Map<string, string>();
  const weight = new Map<string, number>();

  const find = (x: string): string => {
    if (!parent.has(x)) {
      parent.set(x, x);
      weight.set(x, 1);
    }
    if (parent.get(x) !== x) {
      const root = find(parent.get(x)!);
      weight.set(x, weight.get(x)! * weight.get(parent.get(x)!)!);
      parent.set(x, root);
    }
    return parent.get(x)!;
  };

  const union = (a: string, b: string, value: number): void => {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA === rootB) {
      return;
    }
    parent.set(rootA, rootB);
    weight.set(rootA, (weight.get(b)! * value) / weight.get(a)!);
  };

  for (let i = 0; i < equations.length; i++) {
    union(equations[i][0], equations[i][1], values[i]);
  }

  return queries.map(([a, b]) => {
    if (!parent.has(a) || !parent.has(b) || find(a) !== find(b)) {
      return -1;
    }
    return weight.get(a)! / weight.get(b)!;
  });
}

console.log(calcEquation([["a", "b"], ["b", "c"]], [2.0, 3.0], [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]));
