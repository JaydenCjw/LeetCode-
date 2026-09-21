/**
 * 比较含退格的字符串
 * 难度：★★☆☆☆
 * '#' 表示退格。判断两个字符串退格处理后是否相同。
 *
 * 示例：s = "ab#c", t = "ad#c" => true
 *
 * 思路：从末尾用双指针跳过被退格删掉的字符，再逐个比较。
 * 时间 O(n + m)，空间 O(1)
 */

function nextValid(text: string, index: number): number {
  let skip = 0;
  while (index >= 0) {
    if (text[index] === "#") {
      skip++;
      index--;
    } else if (skip > 0) {
      skip--;
      index--;
    } else {
      return index;
    }
  }
  return -1;
}

export function backspaceCompare(s: string, t: string): boolean {
  let i = s.length - 1;
  let j = t.length - 1;
  while (i >= 0 || j >= 0) {
    i = nextValid(s, i);
    j = nextValid(t, j);
    if (i < 0 && j < 0) {
      return true;
    }
    if (i < 0 || j < 0 || s[i] !== t[j]) {
      return false;
    }
    i--;
    j--;
  }
  return true;
}

console.log(backspaceCompare("ab#c", "ad#c"));
