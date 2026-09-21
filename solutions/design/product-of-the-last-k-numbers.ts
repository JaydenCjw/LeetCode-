/**
 * 最后 K 个数的乘积
 * 难度：★★☆☆☆
 * ProductOfNumbers：add 追加一个数，getProduct(k) 返回最后 k 个数的乘积。序列中可能出现 0。
 *
 * 示例：add(3), add(0), add(2), add(5), add(4)。getProduct(2)=20，getProduct(3)=40，getProduct(4)=0
 *
 * 思路：维护前缀积。遇到 0 就清空前缀。若 k 超过当前段长度，说明窗口含 0，返回 0。
 * 时间 O(1)，空间 O(n)
 */

export class ProductOfNumbers {
  private readonly prefix: number[] = [1];

  add(num: number): void {
    if (num === 0) {
      this.prefix.length = 1;
      return;
    }
    this.prefix.push(this.prefix[this.prefix.length - 1] * num);
  }

  getProduct(k: number): number {
    const count = this.prefix.length - 1;
    if (k > count) {
      return 0;
    }
    return this.prefix[count] / this.prefix[count - k];
  }
}

const products = new ProductOfNumbers();
products.add(3);
products.add(0);
products.add(2);
products.add(5);
products.add(4);
console.log([products.getProduct(2), products.getProduct(3), products.getProduct(4)]);
