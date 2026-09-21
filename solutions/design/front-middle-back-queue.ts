/**
 * 设计前中后队列
 * 难度：★★☆☆☆
 * FrontMiddleBackQueue：支持头、中、尾插入，以及从头、中、尾弹出。空队列弹出返回 -1。偶数长度时，中间插入在两个中点之前，中间弹出取靠前的中点。
 *
 * 示例：pushFront(1), pushBack(2), pushMiddle(3), pushMiddle(4)，再 popFront=1, popMiddle=3, popMiddle=4, popBack=2, popFront=-1
 *
 * 思路：用数组按位置插入和删除。长度不大时直接维护顺序即可。
 * 时间每次 O(n)，空间 O(n)
 */

export class FrontMiddleBackQueue {
  private readonly data: number[] = [];

  pushFront(val: number): void {
    this.data.unshift(val);
  }

  pushMiddle(val: number): void {
    const index = Math.floor(this.data.length / 2);
    this.data.splice(index, 0, val);
  }

  pushBack(val: number): void {
    this.data.push(val);
  }

  popFront(): number {
    if (this.data.length === 0) {
      return -1;
    }
    const value = this.data.shift();
    return value === undefined ? -1 : value;
  }

  popMiddle(): number {
    if (this.data.length === 0) {
      return -1;
    }
    const index = Math.floor((this.data.length - 1) / 2);
    const [value] = this.data.splice(index, 1);
    return value;
  }

  popBack(): number {
    if (this.data.length === 0) {
      return -1;
    }
    const value = this.data.pop();
    return value === undefined ? -1 : value;
  }
}

const queue = new FrontMiddleBackQueue();
queue.pushFront(1);
queue.pushBack(2);
queue.pushMiddle(3);
queue.pushMiddle(4);
console.log([queue.popFront(), queue.popMiddle(), queue.popMiddle(), queue.popBack(), queue.popFront()]);
