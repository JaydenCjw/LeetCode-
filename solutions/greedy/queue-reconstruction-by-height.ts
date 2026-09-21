/**
 * 根据身高重建队列
 * people[i] = [hi, ki]，表示身高 hi 且前面恰好有 ki 个身高 ≥ hi 的人。重建队列。
 *
 * 示例：[[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
 * => [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
 *
 * 思路：身高降序、k 升序排序后按 k 插入。
 * 时间 O(n^2)，空间 O(n)
 */

export function reconstructQueue(people: number[][]): number[][] {
  const sorted = [...people].sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  const queue: number[][] = [];

  for (const person of sorted) {
    queue.splice(person[1], 0, person);
  }

  return queue;
}

console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ]),
);
