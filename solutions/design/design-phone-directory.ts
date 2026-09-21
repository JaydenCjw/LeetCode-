/**
 * 电话目录
 * 难度：★★☆☆☆
 * PhoneDirectory(maxNumbers)：get 分配最小可用号码，check 查询是否可用，release 归还号码。没有可用号码时 get 返回 -1。
 *
 * 示例：容量 3。get=0，get=1，check(2)=true，get=2，check(2)=false，release(2) 后 check(2)=true
 *
 * 思路：布尔数组标记占用，并记录下一个候选起点，分配后向后找空位。
 * 时间均摊 O(1)，空间 O(maxNumbers)
 */

export class PhoneDirectory {
  private readonly used: boolean[];
  private next = 0;

  constructor(maxNumbers: number) {
    this.used = Array.from({ length: maxNumbers }, () => false);
  }

  get(): number {
    const limit = this.used.length;
    if (this.next >= limit) {
      return -1;
    }
    const number = this.next;
    this.used[number] = true;
    this.next += 1;
    while (this.next < limit && this.used[this.next]) {
      this.next += 1;
    }
    return number;
  }

  check(number: number): boolean {
    if (number < 0 || number >= this.used.length) {
      return false;
    }
    return !this.used[number];
  }

  release(number: number): void {
    if (number < 0 || number >= this.used.length || !this.used[number]) {
      return;
    }
    this.used[number] = false;
    if (number < this.next) {
      this.next = number;
    }
  }
}

const directory = new PhoneDirectory(3);
console.log([
  directory.get(),
  directory.get(),
  directory.check(2),
  directory.get(),
  directory.check(2),
  (() => {
    directory.release(2);
    return directory.check(2);
  })(),
]);
