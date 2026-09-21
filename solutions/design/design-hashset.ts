/**
 * 设计哈希集合
 * 难度：★☆☆☆☆
 * MyHashSet 支持 add、remove、contains。不用语言内置 Set 作为唯一存储，用数组桶加链。
 *
 * 示例：add(1), add(2), contains(1)=true, contains(3)=false, add(2), contains(2)=true, remove(2), contains(2)=false
 *
 * 思路：对键取模分桶，桶内用数组保存键。
 * 时间均摊 O(1)，空间 O(n)
 */

export class MyHashSet {
  private readonly buckets: number[][];
  private readonly bucketCount = 997;

  constructor() {
    this.buckets = Array.from({ length: this.bucketCount }, () => []);
  }

  private bucketOf(key: number): number[] {
    return this.buckets[key % this.bucketCount];
  }

  add(key: number): void {
    const bucket = this.bucketOf(key);
    if (!bucket.includes(key)) {
      bucket.push(key);
    }
  }

  remove(key: number): void {
    const bucket = this.bucketOf(key);
    const index = bucket.indexOf(key);
    if (index >= 0) {
      bucket.splice(index, 1);
    }
  }

  contains(key: number): boolean {
    return this.bucketOf(key).includes(key);
  }
}

const hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
const containsOne = hashSet.contains(1);
const containsThree = hashSet.contains(3);
hashSet.add(2);
const containsTwo = hashSet.contains(2);
hashSet.remove(2);
console.log([containsOne, containsThree, containsTwo, hashSet.contains(2)]);
