/**
 * 之字形迭代器
 * 难度：★★☆☆☆
 * ZigzagIterator 轮流从两个向量取下一个元素，某个向量耗尽后只从另一个取。
 *
 * 示例：v1=[1,2]，v2=[3,4,5,6]，依次为 1,3,2,4,5,6
 *
 * 思路：队列保存仍有剩余元素的数组及其下标，每次取出队头前进一格再入队。
 * 时间 O(元素个数)，空间 O(1) 额外（不含输出）
 */

export class ZigzagIterator {
  private readonly queues: number[][];
  private readonly indexes: number[];
  private turn = 0;

  constructor(v1: number[], v2: number[]) {
    this.queues = [];
    this.indexes = [];
    if (v1.length > 0) {
      this.queues.push(v1);
      this.indexes.push(0);
    }
    if (v2.length > 0) {
      this.queues.push(v2);
      this.indexes.push(0);
    }
  }

  next(): number {
    const list = this.queues[this.turn];
    const index = this.indexes[this.turn];
    const value = list[index];
    this.indexes[this.turn] = index + 1;
    if (index + 1 >= list.length) {
      this.queues.splice(this.turn, 1);
      this.indexes.splice(this.turn, 1);
      if (this.queues.length > 0) {
        this.turn %= this.queues.length;
      }
    } else {
      this.turn = (this.turn + 1) % this.queues.length;
    }
    return value;
  }

  hasNext(): boolean {
    return this.queues.length > 0;
  }
}

const zigzag = new ZigzagIterator([1, 2], [3, 4, 5, 6]);
const zigzagOut: number[] = [];
while (zigzag.hasNext()) {
  zigzagOut.push(zigzag.next());
}
console.log(zigzagOut);
