/**
 * 会议室 II
 * 难度：★★★☆☆
 * 给定会议的起止时间，返回同时进行所需的最少会议室数量。
 *
 * 示例：intervals = [[0,30],[5,10],[15,20]] => 2
 *
 * 思路：分别排序开始与结束时间，开始早于当前最早结束则新开一间，否则复用。
 * 时间 O(n log n)，空间 O(n)
 */

export function minMeetingRooms(intervals: number[][]): number {
  const starts = intervals.map((interval) => interval[0]).sort((left, right) => left - right);
  const ends = intervals.map((interval) => interval[1]).sort((left, right) => left - right);
  let rooms = 0;
  let endIndex = 0;
  for (let i = 0; i < starts.length; i++) {
    if (starts[i] < ends[endIndex]) {
      rooms++;
    } else {
      endIndex++;
    }
  }
  return rooms;
}

console.log(minMeetingRooms([[0, 30], [5, 10], [15, 20]]));
