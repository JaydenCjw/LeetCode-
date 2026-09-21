/**
 * 外观数列
 * 难度：★★☆☆☆
 * 下一项是上一项的读法：连续相同数字读成“次数 + 数字”。从 "1" 开始，返回第 n 项。
 *
 * 示例：n = 4 => "1211"
 *
 * 思路：从 "1" 迭代 n-1 次，双指针切分连续段。
 * 时间 O(n * L)，空间 O(L)，L 为结果长度
 */

export function countAndSay(n: number): string {
  let current = "1";
  for (let step = 1; step < n; step++) {
    let next = "";
    let i = 0;
    while (i < current.length) {
      let j = i;
      while (j < current.length && current[j] === current[i]) {
        j++;
      }
      next += String(j - i) + current[i];
      i = j;
    }
    current = next;
  }
  return current;
}

console.log(countAndSay(4));
