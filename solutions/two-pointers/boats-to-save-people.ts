/**
 * 救生艇
 * 难度：★★☆☆☆
 * 每艘船最多载两人且重量和不超过 limit，求最少船数。
 *
 * 示例：people = [3,2,2,1], limit = 3 => 3
 *
 * 思路：排序后最轻与最重配对，装不下则最重单独走。
 * 时间 O(n log n)，空间 O(1)
 */

export function numRescueBoats(people: number[], limit: number): number {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let boats = 0;

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    boats++;
  }

  return boats;
}

console.log(numRescueBoats([3, 2, 2, 1], 3));
