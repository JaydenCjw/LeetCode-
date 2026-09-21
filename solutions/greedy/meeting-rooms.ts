/**
 * 会议室
 * 难度：★★☆☆☆
 * 给定若干会议区间，判断一个人能否参加全部会议（区间不能重叠，端点相接可以）。
 *
 * 示例：[[0,30],[5,10],[15,20]] => false
 *
 * 思路：按开始时间排序，后一场开始早于前一场结束则冲突。
 * 时间 O(n log n)，空间 O(1)
 */

export function canAttendMeetings(intervals: number[][]): boolean {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }
  return true;
}

console.log(
  canAttendMeetings([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
);
