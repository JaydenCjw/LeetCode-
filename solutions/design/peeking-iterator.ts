/**
 * 顶端迭代器
 * 难度：★★☆☆☆
 * PeekingIterator 在普通迭代器上增加 peek：查看下一个元素但不移动指针。
 *
 * 示例：迭代 [1,2,3]。next=1, peek=2, next=2, next=3, hasNext=false
 *
 * 思路：缓存下一个值。peek 只读缓存，next 返回缓存并向前取。
 * 时间每操作 O(1)，空间 O(1)
 */

class ArrayIterator {
  private index = 0;

  constructor(private readonly values: number[]) {}

  hasNext(): boolean {
    return this.index < this.values.length;
  }

  next(): number {
    const value = this.values[this.index];
    this.index += 1;
    return value;
  }
}

export class PeekingIterator {
  private cached: number | null = null;
  private cachedReady = false;

  constructor(private readonly iterator: ArrayIterator) {
    this.fill();
  }

  private fill(): void {
    if (this.iterator.hasNext()) {
      this.cached = this.iterator.next();
      this.cachedReady = true;
      return;
    }
    this.cached = null;
    this.cachedReady = false;
  }

  peek(): number {
    return this.cached ?? 0;
  }

  next(): number {
    const value = this.cached ?? 0;
    this.fill();
    return value;
  }

  hasNext(): boolean {
    return this.cachedReady;
  }
}

const peeking = new PeekingIterator(new ArrayIterator([1, 2, 3]));
const first = peeking.next();
const peeked = peeking.peek();
const second = peeking.next();
const third = peeking.next();
console.log([first, peeked, second, third, peeking.hasNext()]);
