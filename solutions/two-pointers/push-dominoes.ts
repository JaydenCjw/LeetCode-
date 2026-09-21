/**
 * 推多米诺
 * 难度：★★★☆☆
 * '.' 直立，'L' 向左倒，'R' 向右倒。同时受力则保持直立。返回最终状态。
 *
 * 示例：dominoes = ".L.R...LR..L.." => "LL.RR.LLRRLL.."
 *
 * 思路：在两端补哨兵，按相邻受力端点填充整段：同向铺满，R...L 从两侧向中间倒。
 * 时间 O(n)，空间 O(n)
 */

export function pushDominoes(dominoes: string): string {
  const chars = `L${dominoes}R`.split("");
  let previous = 0;
  for (let next = 1; next < chars.length; next++) {
    if (chars[next] === ".") {
      continue;
    }
    if (chars[previous] === chars[next]) {
      for (let k = previous + 1; k < next; k++) {
        chars[k] = chars[previous];
      }
    } else if (chars[previous] === "R" && chars[next] === "L") {
      let left = previous + 1;
      let right = next - 1;
      while (left < right) {
        chars[left] = "R";
        chars[right] = "L";
        left++;
        right--;
      }
    }
    previous = next;
  }
  return chars.slice(1, -1).join("");
}

console.log(pushDominoes(".L.R...LR..L.."));
