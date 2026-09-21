/**
 * 数组中的最长山脉
 * 难度：★★★☆☆
 * 山脉先严格上升再严格下降，长度至少为 3。没有山脉则返回 0。
 *
 * 示例：arr = [2,1,4,7,3,2,5] => 5
 *
 * 思路：找到峰顶后向两侧扩展，再从右坡终点继续扫描。
 * 时间 O(n)，空间 O(1)
 */

export function longestMountain(arr: number[]): number {
  const n = arr.length;
  let best = 0;
  let i = 1;
  while (i < n - 1) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      let left = i;
      let right = i;
      while (left > 0 && arr[left] > arr[left - 1]) {
        left--;
      }
      while (right < n - 1 && arr[right] > arr[right + 1]) {
        right++;
      }
      best = Math.max(best, right - left + 1);
      i = right;
    } else {
      i++;
    }
  }
  return best;
}

console.log(longestMountain([2, 1, 4, 7, 3, 2, 5]));
