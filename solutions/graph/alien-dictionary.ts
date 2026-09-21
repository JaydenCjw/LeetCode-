/**
 * 外星文词典
 * 难度：★★★★☆
 * 已知一组按外星字典序排列的单词，推导字母顺序。不存在合法顺序时返回空串。
 *
 * 示例：["wrt","wrf","er","ett","rftt"] => "wertf"
 *
 * 思路：相邻单词比较得到字母先后边，再对字符图做拓扑排序。
 * 时间 O(总字符数)，空间 O(1)（字母表大小常数）
 */

export function alienOrder(words: string[]): string {
  const graph = new Map<string, Set<string>>();
  const indegree = new Map<string, number>();

  for (const word of words) {
    for (const char of word) {
      if (!graph.has(char)) {
        graph.set(char, new Set());
        indegree.set(char, 0);
      }
    }
  }

  for (let i = 0; i + 1 < words.length; i++) {
    const left = words[i];
    const right = words[i + 1];
    const limit = Math.min(left.length, right.length);
    let different = false;
    for (let j = 0; j < limit; j++) {
      if (left[j] !== right[j]) {
        const edges = graph.get(left[j]);
        if (edges && !edges.has(right[j])) {
          edges.add(right[j]);
          indegree.set(right[j], (indegree.get(right[j]) ?? 0) + 1);
        }
        different = true;
        break;
      }
    }
    if (!different && left.length > right.length) {
      return "";
    }
  }

  const queue: string[] = [];
  for (const [char, degree] of indegree) {
    if (degree === 0) {
      queue.push(char);
    }
  }

  let order = "";
  let head = 0;
  while (head < queue.length) {
    const char = queue[head];
    head++;
    if (!char) {
      continue;
    }
    order += char;
    for (const next of graph.get(char) ?? []) {
      const degree = (indegree.get(next) ?? 0) - 1;
      indegree.set(next, degree);
      if (degree === 0) {
        queue.push(next);
      }
    }
  }
  return order.length === indegree.size ? order : "";
}

console.log(alienOrder(["wrt", "wrf", "er", "ett", "rftt"]));
