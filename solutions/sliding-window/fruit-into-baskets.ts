/**
 * 水果成篮
 * 难度：★★★☆☆
 * 只能采摘两种水果，每棵树一种，求最多能采的连续果树数量。
 *
 * 示例：fruits = [1,2,1] => 3；[0,1,2,2] => 3
 *
 * 思路：滑动窗口，窗口内水果种类 ≤ 2。
 * 时间 O(n)，空间 O(1)
 */

export function totalFruit(fruits: number[]): number {
  const count = new Map<number, number>();
  let left = 0;
  let best = 0;

  for (let right = 0; right < fruits.length; right++) {
    count.set(fruits[right], (count.get(fruits[right]) ?? 0) + 1);
    while (count.size > 2) {
      const leftFruit = fruits[left];
      const next = (count.get(leftFruit) ?? 0) - 1;
      if (next === 0) count.delete(leftFruit);
      else count.set(leftFruit, next);
      left++;
    }
    best = Math.max(best, right - left + 1);
  }

  return best;
}

console.log(totalFruit([1, 2, 1]));
console.log(totalFruit([0, 1, 2, 2]));
console.log(totalFruit([1, 2, 3, 2, 2]));
