/**
 * 课程表 II
 * 返回完成所有课程的学习顺序；若不可能返回空数组。
 *
 * 示例：numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
 * => [0,1,2,3] 或 [0,2,1,3]
 *
 * 思路：拓扑排序（Kahn）。
 * 时间 O(V+E)，空间 O(V+E)
 */

export function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const indegree = new Array<number>(numCourses).fill(0);

  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
    indegree[course]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  const order: number[] = [];
  while (queue.length > 0) {
    const current = queue.shift()!;
    order.push(current);
    for (const next of graph[current]) {
      indegree[next]--;
      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return order.length === numCourses ? order : [];
}

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
);
