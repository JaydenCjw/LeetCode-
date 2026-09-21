/**
 * 考场就座
 * 难度：★★★★☆
 * ExamRoom(n)：seat 让考生坐到与最近的人距离最大的座位（并列取编号更小者）；leave 离开某座位。两端到墙的距离按到 0 或 n-1 计算。
 *
 * 示例：n=10。依次入座 0、9、4、2，leave(4) 后再入座得到 5
 *
 * 思路：有序数组保存已坐位置。每次扫描相邻空隙，距离为间隔的一半；左端距离是首个座位，右端距离是到 n-1。
 * 时间 seat O(n)，空间 O(n)
 */

export class ExamRoom {
  private readonly seatCount: number;
  private readonly seated: number[] = [];

  constructor(n: number) {
    this.seatCount = n;
  }

  seat(): number {
    if (this.seated.length === 0) {
      this.seated.push(0);
      return 0;
    }
    let bestSeat = 0;
    let bestDist = this.seated[0];
    for (let i = 0; i < this.seated.length - 1; i += 1) {
      const left = this.seated[i];
      const right = this.seated[i + 1];
      const dist = Math.floor((right - left) / 2);
      if (dist > bestDist) {
        bestDist = dist;
        bestSeat = left + dist;
      }
    }
    const tailDist = this.seatCount - 1 - this.seated[this.seated.length - 1];
    if (tailDist > bestDist) {
      bestSeat = this.seatCount - 1;
    }
    let insertAt = this.seated.length;
    for (let i = 0; i < this.seated.length; i += 1) {
      if (this.seated[i] > bestSeat) {
        insertAt = i;
        break;
      }
    }
    this.seated.splice(insertAt, 0, bestSeat);
    return bestSeat;
  }

  leave(p: number): void {
    const index = this.seated.indexOf(p);
    if (index >= 0) {
      this.seated.splice(index, 1);
    }
  }
}

const examRoom = new ExamRoom(10);
const seated = [examRoom.seat(), examRoom.seat(), examRoom.seat(), examRoom.seat()];
examRoom.leave(4);
seated.push(examRoom.seat());
console.log(seated);
