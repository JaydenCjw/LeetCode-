/**
 * 设计浏览器历史记录
 * 难度：★★☆☆☆
 * BrowserHistory：visit 打开新页面并清空前进记录，back / forward 最多走给定步数。
 *
 * 示例：从 leetcode.com 出发，访问 google、facebook、youtube，back(1)=facebook.com，back(1)=google.com，forward(1)=facebook.com，visit(linkedin.com) 后 forward(2) 仍是 linkedin.com，back(2)=google.com，back(7)=leetcode.com
 *
 * 思路：数组保存历史，指针表示当前页。visit 时截断指针之后的记录。
 * 时间每操作 O(1) 均摊（截断除外），空间 O(n)
 */

export class BrowserHistory {
  private readonly history: string[];
  private index = 0;

  constructor(homepage: string) {
    this.history = [homepage];
  }

  visit(url: string): void {
    this.history.length = this.index + 1;
    this.history.push(url);
    this.index += 1;
  }

  back(steps: number): string {
    this.index = Math.max(0, this.index - steps);
    return this.history[this.index];
  }

  forward(steps: number): string {
    this.index = Math.min(this.history.length - 1, this.index + steps);
    return this.history[this.index];
  }
}

const browser = new BrowserHistory("leetcode.com");
browser.visit("google.com");
browser.visit("facebook.com");
browser.visit("youtube.com");
console.log([
  browser.back(1),
  browser.back(1),
  browser.forward(1),
  (() => {
    browser.visit("linkedin.com");
    return browser.forward(2);
  })(),
  browser.back(2),
  browser.back(7),
]);
