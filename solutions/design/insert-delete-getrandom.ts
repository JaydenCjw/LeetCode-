/**
 * O(1) 时间插入、删除和获取随机元素
 * 难度：★★★☆☆
 * 实现集合，insert、remove、getRandom 平均 O(1)。getRandom 等概率返回已有元素。
 *
 * 思路：数组存值，哈希表存下标；删除时用末尾元素填坑。
 * 时间均摊 O(1)，空间 O(n)
 */

export class RandomizedSet {
  private readonly values: number[] = [];
  private readonly index = new Map<number, number>();

  insert(val: number): boolean {
    if (this.index.has(val)) {
      return false;
    }
    this.index.set(val, this.values.length);
    this.values.push(val);
    return true;
  }

  remove(val: number): boolean {
    const position = this.index.get(val);
    if (position === undefined) {
      return false;
    }
    const last = this.values[this.values.length - 1];
    this.values[position] = last;
    this.index.set(last, position);
    this.values.pop();
    this.index.delete(val);
    return true;
  }

  getRandom(): number {
    const position = Math.floor(Math.random() * this.values.length);
    return this.values[position];
  }
}

const set = new RandomizedSet();
console.log(set.insert(1), set.remove(2), set.insert(2), set.getRandom());
