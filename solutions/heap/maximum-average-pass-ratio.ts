/**
 * 最大平均通过率
 * 难度：★★★☆☆
 * classes[i] = [通过人数, 总人数]。可以给 extraStudents 个学生，他们一定通过。把他们分到班级里，使平均通过率最大。
 *
 * 示例：[[1,2],[3,5],[2,2]]，extraStudents = 2，结果约为 0.78333
 *
 * 思路：大根堆按“再加一个通过学生”带来的通过率增量排序，每次分给增量最大的班。
 * 时间 O((n + extra) log n)，空间 O(n)
 */

import { Heap } from "@/heap";

function gain(pass: number, total: number): number {
  return (pass + 1) / (total + 1) - pass / total;
}

export function maxAverageRatio(classes: number[][], extraStudents: number): number {
  const heap = new Heap<[number, number, number]>((a, b) => a[0] > b[0]);
  for (const item of classes) {
    heap.push([gain(item[0], item[1]), item[0], item[1]]);
  }
  for (let student = 0; student < extraStudents; student += 1) {
    const top = heap.pop();
    const pass = top[1] + 1;
    const total = top[2] + 1;
    heap.push([gain(pass, total), pass, total]);
  }
  let sum = 0;
  while (heap.size > 0) {
    const top = heap.pop();
    sum += top[1] / top[2];
  }
  return sum / classes.length;
}

console.log(
  maxAverageRatio(
    [
      [1, 2],
      [3, 5],
      [2, 2],
    ],
    2,
  ),
);
