/**
 * 我的日程安排表 II
 * 难度：★★★☆☆
 * MyCalendarTwo.book 允许双重预订，但会造成三重重叠时返回 false。区间为半开区间。
 *
 * 示例：book(10,20)、book(50,60)、book(10,40) 为 true，book(5,15) 为 false，book(5,10)、book(25,55) 为 true
 *
 * 思路：分别记录普通预订和已经双重重叠的区间。新区间若与某个双重区间相交则拒绝，否则把与旧预订的交集记入双重区间。
 * 时间每次 O(n)，空间 O(n)
 */

export class MyCalendarTwo {
  private readonly booked: Array<[number, number]> = [];
  private readonly overlaps: Array<[number, number]> = [];

  book(start: number, end: number): boolean {
    for (const [overlapStart, overlapEnd] of this.overlaps) {
      if (start < overlapEnd && overlapStart < end) {
        return false;
      }
    }
    for (const [bookedStart, bookedEnd] of this.booked) {
      if (start < bookedEnd && bookedStart < end) {
        this.overlaps.push([Math.max(start, bookedStart), Math.min(end, bookedEnd)]);
      }
    }
    this.booked.push([start, end]);
    return true;
  }
}

const calendarTwo = new MyCalendarTwo();
console.log([
  calendarTwo.book(10, 20),
  calendarTwo.book(50, 60),
  calendarTwo.book(10, 40),
  calendarTwo.book(5, 15),
  calendarTwo.book(5, 10),
  calendarTwo.book(25, 55),
]);
