/**
 * 比目标字母大的最小字母
 * 难度：★☆☆☆☆
 * 升序字母数组，找出严格大于 target 的最小字母。不存在则回到第一个（循环）。
 *
 * 示例：letters = ["c","f","j"], target = "a" => "c"
 *
 * 思路：二分第一个大于 target 的位置，越界则取开头。
 * 时间 O(log n)，空间 O(1)
 */

export function nextGreatestLetter(letters: string[], target: string): string {
  let left = 0;
  let right = letters.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (letters[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return letters[left % letters.length];
}

console.log(nextGreatestLetter(["c", "f", "j"], "a"));
