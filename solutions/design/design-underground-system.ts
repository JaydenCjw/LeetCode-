/**
 * 设计地铁系统
 * 难度：★★☆☆☆
 * UndergroundSystem：checkIn / checkOut 记录乘客行程，getAverageTime 返回某条路线的平均用时。
 *
 * 示例：45 号 Leyton 进站到 Waterloo 出站，以及同路线的另外两次，Paradise 到 Cambridge 平均 14，Leyton 到 Waterloo 依次为 11、11、12
 *
 * 思路：进站表记录车站与时间；出站时累加路线总时长和次数。
 * 时间每操作 O(1)，空间 O(乘客 + 路线)
 */

interface CheckInRecord {
  station: string;
  time: number;
}

interface RouteStat {
  total: number;
  count: number;
}

export class UndergroundSystem {
  private readonly pending = new Map<number, CheckInRecord>();
  private readonly routes = new Map<string, RouteStat>();

  checkIn(id: number, stationName: string, t: number): void {
    this.pending.set(id, { station: stationName, time: t });
  }

  checkOut(id: number, stationName: string, t: number): void {
    const record = this.pending.get(id);
    if (!record) {
      return;
    }
    this.pending.delete(id);
    const key = `${record.station}->${stationName}`;
    const stat = this.routes.get(key) ?? { total: 0, count: 0 };
    stat.total += t - record.time;
    stat.count += 1;
    this.routes.set(key, stat);
  }

  getAverageTime(startStation: string, endStation: string): number {
    const stat = this.routes.get(`${startStation}->${endStation}`);
    if (!stat || stat.count === 0) {
      return 0;
    }
    return stat.total / stat.count;
  }
}

const metro = new UndergroundSystem();
metro.checkIn(45, "Leyton", 3);
metro.checkIn(32, "Paradise", 8);
metro.checkIn(27, "Leyton", 10);
metro.checkOut(45, "Waterloo", 15);
metro.checkOut(27, "Waterloo", 20);
metro.checkOut(32, "Cambridge", 22);
const paradise = metro.getAverageTime("Paradise", "Cambridge");
const leytonFirst = metro.getAverageTime("Leyton", "Waterloo");
metro.checkIn(10, "Leyton", 24);
const leytonSecond = metro.getAverageTime("Leyton", "Waterloo");
metro.checkOut(10, "Waterloo", 38);
const leytonThird = metro.getAverageTime("Leyton", "Waterloo");
console.log([paradise, leytonFirst, leytonSecond, leytonThird]);
