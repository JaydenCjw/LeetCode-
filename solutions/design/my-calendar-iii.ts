/**
 * 我的日程安排表 III
 * 难度：★★★★☆
 * MyCalendarThree.book(start, end) 加入半开区间，并返回至今为止的最大 k 重预订。
 *
 * 示例：book(10,20)=1，book(50,60)=1，book(10,40)=2，book(5,15)=3，book(5,10)=3，book(25,55)=3
 *
 * 思路：差分。起点 +1、终点 -1，按时间扫描前缀和，最大值即当前最大重叠。
 * 时间每次 O(n log n)，空间 O(n)
 */

export class MyCalendarThree {
  private readonly diff = new Map<number, number>();

  book(startTime: number, endTime: number): number {
    this.diff.set(startTime, (this.diff.get(startTime) ?? 0) + 1);
    this.diff.set(endTime, (this.diff.get(endTime) ?? 0) - 1);
    const times = [...this.diff.keys()].sort((a, b) => a - b);
    let current = 0;
    let best = 0;
    for (const time of times) {
      current += this.diff.get(time) ?? 0;
      if (current > best) {
        best = current;
      }
    }
    return best;
  }
}

const calendarThree = new MyCalendarThree();
console.log([
  calendarThree.book(10, 20),
  calendarThree.book(50, 60),
  calendarThree.book(10, 40),
  calendarThree.book(5, 15),
  calendarThree.book(5, 10),
  calendarThree.book(25, 55),
]);
