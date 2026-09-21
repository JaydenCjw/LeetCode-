/**
 * 允许重复的 O(1) 插入删除随机
 * 难度：★★★★☆
 * RandomizedCollection：insert 返回该值原先是否不存在；remove 删除一个该值；getRandom 等概率返回一个已插入元素。允许重复。
 *
 * 示例：insert(1)=true, insert(1)=false, insert(2)=true, getRandom 为 1 或 2, remove(1)=true, 之后 getRandom 仍可能是 1 或 2
 *
 * 思路：动态数组存值，哈希表记录每个值对应的下标集合。删除时用末尾元素填坑。
 * 时间均摊 O(1)，空间 O(n)
 */

export class RandomizedCollection {
  private readonly nums: number[] = [];
  private readonly indexes = new Map<number, Set<number>>();

  insert(val: number): boolean {
    const set = this.indexes.get(val) ?? new Set<number>();
    const firstTime = set.size === 0;
    set.add(this.nums.length);
    this.indexes.set(val, set);
    this.nums.push(val);
    return firstTime;
  }

  remove(val: number): boolean {
    const set = this.indexes.get(val);
    if (!set || set.size === 0) {
      return false;
    }
    const removeIdx = set.values().next().value;
    if (removeIdx === undefined) {
      return false;
    }
    set.delete(removeIdx);
    const lastIdx = this.nums.length - 1;
    const lastVal = this.nums[lastIdx];
    if (removeIdx !== lastIdx) {
      this.nums[removeIdx] = lastVal;
      const lastSet = this.indexes.get(lastVal);
      if (lastSet) {
        lastSet.delete(lastIdx);
        lastSet.add(removeIdx);
      }
    }
    this.nums.pop();
    if (set.size === 0) {
      this.indexes.delete(val);
    }
    return true;
  }

  getRandom(): number {
    const index = Math.floor(Math.random() * this.nums.length);
    return this.nums[index];
  }
}

const collection = new RandomizedCollection();
const inserted = [collection.insert(1), collection.insert(1), collection.insert(2)];
const randomOk = [1, 2].includes(collection.getRandom());
const removed = collection.remove(1);
const randomStillOk = [1, 2].includes(collection.getRandom());
console.log([...inserted, randomOk, removed, randomStillOk]);
