/** 通用二叉堆（通过 compare 决定大小根） */
export class Heap<T> {
  private readonly data: T[] = [];
  private readonly compare: (a: T, b: T) => boolean;

  /**
   * @param compare 返回 true 表示 a 应排在 b 前面（更优先）
   * 小根堆：`(a, b) => a < b`
   * 大根堆：`(a, b) => a > b`
   */
  constructor(compare: (a: T, b: T) => boolean) {
    this.compare = compare;
  }

  get size(): number {
    return this.data.length;
  }

  peek(): T {
    return this.data[0];
  }

  push(value: T): void {
    this.data.push(value);
    this.bubbleUp(this.data.length - 1);
  }

  pop(): T {
    const top = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0 && last !== undefined) {
      this.data[0] = last;
      this.bubbleDown(0);
    }
    return top;
  }

  private bubbleUp(index: number): void {
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      if (!this.compare(this.data[index], this.data[parent])) {
        break;
      }
      this.swap(parent, index);
      index = parent;
    }
  }

  private bubbleDown(index: number): void {
    const n = this.data.length;
    while (true) {
      let best = index;
      const left = index * 2 + 1;
      const right = index * 2 + 2;
      if (left < n && this.compare(this.data[left], this.data[best])) {
        best = left;
      }
      if (right < n && this.compare(this.data[right], this.data[best])) {
        best = right;
      }
      if (best === index) {
        break;
      }
      this.swap(index, best);
      index = best;
    }
  }

  private swap(i: number, j: number): void {
    const temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }
}

export function createMinHeap<T = number>(
  compare: (a: T, b: T) => boolean = (a, b) => (a as number) < (b as number),
): Heap<T> {
  return new Heap(compare);
}

export function createMaxHeap<T = number>(
  compare: (a: T, b: T) => boolean = (a, b) => (a as number) > (b as number),
): Heap<T> {
  return new Heap(compare);
}
