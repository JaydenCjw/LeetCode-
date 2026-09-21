/**
 * 课程表
 * 难度：★★★☆☆
 * 共有 numCourses 门课，prerequisites[i] = [a,b] 表示学 a 前必须先学 b。
 * 判断是否可能完成所有课程。
 *
 * 示例：numCourses = 2, prerequisites = [[1,0]] => true
 *
 * 思路：拓扑排序（Kahn），检测有向图是否有环。
 * 时间 O(V+E)，空间 O(V+E)
 */

export function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const indegree = new Array<number>(numCourses).fill(0);

  for (const [course, pre] of prerequisites) {
    graph[pre].push(course);
    indegree[course]++;
  }

  const queue: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  let learned = 0;
  while (queue.length > 0) {
    const current = queue.shift()!;
    learned++;
    for (const next of graph[current]) {
      indegree[next]--;
      if (indegree[next] === 0) {
        queue.push(next);
      }
    }
  }

  return learned === numCourses;
}

console.log(canFinish(2, [[1, 0]]));
console.log(canFinish(2, [[1, 0], [0, 1]]));
