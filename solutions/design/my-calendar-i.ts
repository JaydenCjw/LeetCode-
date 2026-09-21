/**
 * 我的日程安排表 I
 * 难度：★★☆☆☆
 * MyCalendar.book(start, end) 加入半开区间 [start, end)。与已有日程重叠则拒绝。
 *
 * 示例：book(10,20)=true，book(15,25)=false，book(20,30)=true（端点相接不算重叠）
 *
 * 思路：保存已成功的区间，新区间与任一已有区间满足 start < otherEnd 且 otherStart < end 即重叠。
 * 时间每次预订 O(n)，空间 O(n)
 */

export class MyCalendar {
  private readonly booked: Array<[number, number]> = [];

  book(start: number, end: number): boolean {
    for (const [bookedStart, bookedEnd] of this.booked) {
      if (start < bookedEnd && bookedStart < end) {
        return false;
      }
    }
    this.booked.push([start, end]);
    return true;
  }
}

const calendar = new MyCalendar();
console.log([calendar.book(10, 20), calendar.book(15, 25), calendar.book(20, 30)]);
