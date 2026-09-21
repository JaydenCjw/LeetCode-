/**
 * LFU 缓存
 * 难度：★★★★☆
 * 设计 LFUCache：get / put 均为 O(1)。容量满时淘汰使用频率最低的键；频率相同则淘汰最久未使用的键。
 *
 * 示例：容量 2。put(1,1), put(2,2), get(1)=1, put(3,3) 淘汰 2, get(2)=-1, get(3)=3, put(4,4) 淘汰 1, get(1)=-1, get(3)=3, get(4)=4
 *
 * 思路：键到结点的哈希表，再按频率维护双向链表（头为最近使用）。minFreq 指向当前最低频率。
 * 时间每操作 O(1)，空间 O(capacity)
 */

class LfuNode {
  key: number;
  value: number;
  freq: number;
  prev: LfuNode | null = null;
  next: LfuNode | null = null;

  constructor(key: number, value: number) {
    this.key = key;
    this.value = value;
    this.freq = 1;
  }
}

class FreqList {
  readonly head: LfuNode;
  readonly tail: LfuNode;
  size = 0;

  constructor() {
    this.head = new LfuNode(0, 0);
    this.tail = new LfuNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  addFront(node: LfuNode): void {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next!.prev = node;
    this.head.next = node;
    this.size += 1;
  }

  remove(node: LfuNode): void {
    const prev = node.prev;
    const next = node.next;
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
    node.prev = null;
    node.next = null;
    this.size -= 1;
  }

  popTail(): LfuNode | null {
    if (this.size === 0 || !this.tail.prev || this.tail.prev === this.head) {
      return null;
    }
    const node = this.tail.prev;
    this.remove(node);
    return node;
  }
}

export class LFUCache {
  private readonly capacity: number;
  private readonly nodes = new Map<number, LfuNode>();
  private readonly freqs = new Map<number, FreqList>();
  private minFreq = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  private listOf(freq: number): FreqList {
    let list = this.freqs.get(freq);
    if (!list) {
      list = new FreqList();
      this.freqs.set(freq, list);
    }
    return list;
  }

  private touch(node: LfuNode): void {
    const oldList = this.listOf(node.freq);
    oldList.remove(node);
    if (oldList.size === 0 && node.freq === this.minFreq) {
      this.minFreq += 1;
    }
    node.freq += 1;
    this.listOf(node.freq).addFront(node);
  }

  get(key: number): number {
    const node = this.nodes.get(key);
    if (!node) {
      return -1;
    }
    this.touch(node);
    return node.value;
  }

  put(key: number, value: number): void {
    if (this.capacity === 0) {
      return;
    }
    const existing = this.nodes.get(key);
    if (existing) {
      existing.value = value;
      this.touch(existing);
      return;
    }
    if (this.nodes.size === this.capacity) {
      const evicted = this.listOf(this.minFreq).popTail();
      if (evicted) {
        this.nodes.delete(evicted.key);
      }
    }
    const node = new LfuNode(key, value);
    this.nodes.set(key, node);
    this.minFreq = 1;
    this.listOf(1).addFront(node);
  }
}

const lfu = new LFUCache(2);
lfu.put(1, 1);
lfu.put(2, 2);
const lfuLog = [
  lfu.get(1),
  (() => {
    lfu.put(3, 3);
    return lfu.get(2);
  })(),
  lfu.get(3),
  (() => {
    lfu.put(4, 4);
    return lfu.get(1);
  })(),
  lfu.get(3),
  lfu.get(4),
];
console.log(lfuLog);
