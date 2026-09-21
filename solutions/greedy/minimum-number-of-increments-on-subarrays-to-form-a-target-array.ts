/**
 * 形成目标数组的子数组最少增加次数
 * 难度：★★★☆☆
 * 从全 0 数组开始，每次选一个子数组整体加 1，得到 target。求最少操作次数。
 *
 * 示例：[1,2,3,2,1] => 3
 *
 * 思路：第一个数必须单独加这么多次。之后每个上升沿都要新开一段增加，下降可以复用前面的操作。
 * 时间 O(n)，空间 O(1)
 */

export function minNumberOperations(target: number[]): number {
  let answer = target[0];
  for (let i = 1; i < target.length; i++) {
    answer += Math.max(0, target[i] - target[i - 1]);
  }
  return answer;
}

console.log(minNumberOperations([1, 2, 3, 2, 1]));
