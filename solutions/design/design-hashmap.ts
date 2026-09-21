/**
 * 设计哈希映射
 * 难度：★☆☆☆☆
 * 不使用内置哈希表，实现 put、get、remove。
 *
 * 思路：链地址法，数组桶加链表。
 * 时间均摊 O(1)，空间 O(n)
 */

class Entry {
  constructor(
    public key: number,
    public value: number,
    public next: Entry | null = null,
  ) {}
}

export class MyHashMap {
  private readonly buckets: Array<Entry | null> = new Array<Entry | null>(1024).fill(null);

  private hash(key: number): number {
    return key & 1023;
  }

  put(key: number, value: number): void {
    const slot = this.hash(key);
    let current = this.buckets[slot];
    while (current) {
      if (current.key === key) {
        current.value = value;
        return;
      }
      current = current.next;
    }
    this.buckets[slot] = new Entry(key, value, this.buckets[slot]);
  }

  get(key: number): number {
    let current = this.buckets[this.hash(key)];
    while (current) {
      if (current.key === key) {
        return current.value;
      }
      current = current.next;
    }
    return -1;
  }

  remove(key: number): void {
    const slot = this.hash(key);
    let current = this.buckets[slot];
    let prev: Entry | null = null;
    while (current) {
      if (current.key === key) {
        if (prev) {
          prev.next = current.next;
        } else {
          this.buckets[slot] = current.next;
        }
        return;
      }
      prev = current;
      current = current.next;
    }
  }
}

const map = new MyHashMap();
map.put(1, 1);
map.put(2, 2);
console.log(map.get(1), map.get(3));
map.put(2, 1);
console.log(map.get(2));
map.remove(2);
console.log(map.get(2));
