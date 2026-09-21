/**
 * 快照数组
 * 难度：★★★☆☆
 * SnapshotArray(length)：set 改当前位置，snap 拍下整个数组并返回快照编号，get(index, snap_id) 读取该快照下的值。
 *
 * 示例：长度 3。set(0,5)，snap()=0，set(0,6)，get(0,0)=5
 *
 * 思路：每个下标只记录发生变化的 (snapId, value)。查询时二分找到不超过 snap_id 的最后一次修改。
 * 时间 set O(1)，snap O(1)，get O(log 修改次数)，空间 O(修改次数)
 */

export class SnapshotArray {
  private snapId = 0;
  private readonly history: Array<Array<[number, number]>>;

  constructor(length: number) {
    this.history = Array.from({ length }, () => [[0, 0]]);
  }

  set(index: number, val: number): void {
    const records = this.history[index];
    const last = records[records.length - 1];
    if (last[0] === this.snapId) {
      last[1] = val;
      return;
    }
    records.push([this.snapId, val]);
  }

  snap(): number {
    const id = this.snapId;
    this.snapId += 1;
    return id;
  }

  get(index: number, snap_id: number): number {
    const records = this.history[index];
    let left = 0;
    let right = records.length - 1;
    let value = 0;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (records[mid][0] <= snap_id) {
        value = records[mid][1];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return value;
  }
}

const snapshots = new SnapshotArray(3);
snapshots.set(0, 5);
const snapId = snapshots.snap();
snapshots.set(0, 6);
console.log([snapId, snapshots.get(0, 0)]);
