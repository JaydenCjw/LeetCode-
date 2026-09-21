/**
 * 扁平化嵌套列表迭代器
 * 难度：★★★☆☆
 * NestedIterator 按深度优先顺序依次给出嵌套整数列表中的全部整数。
 *
 * 示例：[[1,1],2,[1,1]] 展平为 [1,1,2,1,1]
 *
 * 思路：栈保存待展开结点，hasNext 时把列表展开到下一个整数。
 * 时间均摊 O(1)，空间 O(嵌套深度 + 结点数)
 */

export interface NestedInteger {
  isInteger(): boolean;
  getInteger(): number;
  getList(): NestedInteger[];
}

class NestedInt implements NestedInteger {
  constructor(private readonly value: number | NestedInt[]) {}

  isInteger(): boolean {
    return typeof this.value === "number";
  }

  getInteger(): number {
    return typeof this.value === "number" ? this.value : 0;
  }

  getList(): NestedInteger[] {
    return Array.isArray(this.value) ? this.value : [];
  }
}

export class NestedIterator {
  private readonly stack: NestedInteger[];

  constructor(nestedList: NestedInteger[]) {
    this.stack = [...nestedList].reverse();
  }

  private settle(): void {
    while (this.stack.length > 0) {
      const top = this.stack[this.stack.length - 1];
      if (top.isInteger()) {
        return;
      }
      this.stack.pop();
      const children = top.getList();
      for (let i = children.length - 1; i >= 0; i -= 1) {
        this.stack.push(children[i]);
      }
    }
  }

  hasNext(): boolean {
    this.settle();
    return this.stack.length > 0;
  }

  next(): number {
    this.settle();
    const top = this.stack.pop();
    return top ? top.getInteger() : 0;
  }
}

function buildNested(input: Array<number | Array<number | number[]>>): NestedInteger[] {
  const result: NestedInteger[] = [];
  for (const item of input) {
    if (typeof item === "number") {
      result.push(new NestedInt(item));
    } else {
      const children: NestedInt[] = [];
      for (const child of item) {
        if (typeof child === "number") {
          children.push(new NestedInt(child));
        } else {
          children.push(new NestedInt(child.map((value) => new NestedInt(value))));
        }
      }
      result.push(new NestedInt(children));
    }
  }
  return result;
}

const nested = new NestedIterator(buildNested([[1, 1], 2, [1, 1]]));
const flat: number[] = [];
while (nested.hasNext()) {
  flat.push(nested.next());
}
console.log(flat);
