/**
 * 使用服务器处理任务
 * 难度：★★★☆☆
 * servers[i] 是服务器权重。第 j 个任务在时刻 j 到达，耗时 tasks[j]。选空闲服务器里权重最小的，权重相同则下标最小。返回每个任务分配到的服务器下标。
 *
 * 示例：servers = [3,3,2]，tasks = [1,2,3,2,1,2] => [2,2,0,2,1,2]
 *
 * 思路：空闲服务器按权重和下标放小根堆，忙碌服务器按释放时间放小根堆。
 * 时间 O((n + m) log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function assignTasks(servers: number[], tasks: number[]): number[] {
  const free = new Heap<[number, number]>(
    (a, b) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]),
  );
  const busy = new Heap<[number, number, number]>(
    (a, b) => a[0] < b[0] || (a[0] === b[0] && a[1] < b[1]) || (a[0] === b[0] && a[1] === b[1] && a[2] < b[2]),
  );
  servers.forEach((weight, index) => {
    free.push([weight, index]);
  });

  const answer: number[] = [];
  let time = 0;
  for (let i = 0; i < tasks.length; i += 1) {
    time = Math.max(time, i);
    while (busy.size > 0 && busy.peek()[0] <= time) {
      const done = busy.pop();
      free.push([done[1], done[2]]);
    }
    if (free.size === 0) {
      const done = busy.pop();
      time = done[0];
      free.push([done[1], done[2]]);
      while (busy.size > 0 && busy.peek()[0] <= time) {
        const more = busy.pop();
        free.push([more[1], more[2]]);
      }
    }
    const server = free.pop();
    answer.push(server[1]);
    busy.push([time + tasks[i], server[0], server[1]]);
  }
  return answer;
}

console.log(assignTasks([3, 3, 2], [1, 2, 3, 2, 1, 2]));
