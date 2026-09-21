/**
 * 基于时间的键值存储
 * 难度：★★★☆☆
 * set 按时间写入键值，时间戳严格递增。get 返回该键在 timestamp 之前（含）最近的值，没有则返回空串。
 *
 * 示例：set foo=bar @1；get(foo,1) 与 get(foo,3) 都是 bar；set foo=bar2 @4；get(foo,4) 是 bar2
 *
 * 思路：每个键保存按时间排序的列表，get 时二分最后一个不超过 timestamp 的记录。
 * 时间 set O(1)，get O(log n)，空间 O(n)
 */

export class TimeMap {
  private store = new Map<string, [number, string][]>();

  set(key: string, value: string, timestamp: number): void {
    const list = this.store.get(key);
    if (list) {
      list.push([timestamp, value]);
    } else {
      this.store.set(key, [[timestamp, value]]);
    }
  }

  get(key: string, timestamp: number): string {
    const list = this.store.get(key);
    if (!list) {
      return "";
    }
    let lo = 0;
    let hi = list.length - 1;
    let answer = "";
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (list[mid][0] <= timestamp) {
        answer = list[mid][1];
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return answer;
  }
}

const timeMap = new TimeMap();
timeMap.set("foo", "bar", 1);
console.log(timeMap.get("foo", 1));
console.log(timeMap.get("foo", 3));
timeMap.set("foo", "bar2", 4);
console.log(timeMap.get("foo", 4));
