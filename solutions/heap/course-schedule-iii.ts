/**
 * 课程表 III
 * 难度：★★★★☆
 * 课程用 [持续天数, 最晚结束日] 表示。同一时间只能上一门课，返回最多能完成的课程数。
 *
 * 示例：[[100,200],[200,1300],[1000,1250],[2000,3200]] => 3
 *
 * 思路：按结束日排序。若来不及上当前课，且它比已选里最长的课更短，就替换掉最长的课。
 * 时间 O(n log n)，空间 O(n)
 */

import { Heap } from "@/heap";

export function scheduleCourse(courses: number[][]): number {
  const ordered = courses.slice().sort((a, b) => a[1] - b[1]);
  const durations = new Heap<number>((a, b) => a > b);
  let time = 0;
  for (const course of ordered) {
    const duration = course[0];
    const end = course[1];
    if (time + duration <= end) {
      time += duration;
      durations.push(duration);
    } else if (durations.size > 0 && durations.peek() > duration) {
      time += duration - durations.pop();
      durations.push(duration);
    }
  }
  return durations.size;
}

console.log(
  scheduleCourse([
    [100, 200],
    [200, 1300],
    [1000, 1250],
    [2000, 3200],
  ]),
);
