/**
 * 移动片段得到字符串
 * 难度：★★★☆☆
 * L 只能向左移到空位，R 只能向右移到空位，二者不能互相穿过。判断 start 能否变成 target。
 *
 * 示例：start = "_L__R__R_", target = "L______RR" => true
 *
 * 思路：跳过空位后，对应字母必须相同，且 L 不能向右、R 不能向左。
 * 时间 O(n)，空间 O(1)
 */

export function canChange(start: string, target: string): boolean {
  const n = start.length;
  let i = 0;
  let j = 0;
  while (i < n || j < n) {
    while (i < n && start[i] === "_") {
      i++;
    }
    while (j < n && target[j] === "_") {
      j++;
    }
    if (i === n || j === n) {
      return i === n && j === n;
    }
    if (start[i] !== target[j]) {
      return false;
    }
    if (start[i] === "L" && i < j) {
      return false;
    }
    if (start[i] === "R" && i > j) {
      return false;
    }
    i++;
    j++;
  }
  return true;
}

console.log(canChange("_L__R__R_", "L______RR"));
