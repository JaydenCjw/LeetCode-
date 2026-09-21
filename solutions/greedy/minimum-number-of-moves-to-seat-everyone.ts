/**
 * 使每位学生都有座位的最少移动次数
 * 难度：★★☆☆☆
 * 座位和学生都在数轴上。一次移动让一名学生走一格。求让每个学生都坐到不同座位的最少移动。
 *
 * 示例：seats = [3,1,5], students = [2,7,4] => 4
 *
 * 思路：两边排序后一一对应，绝对差之和最小。
 * 时间 O(n log n)，空间 O(1)
 */

export function minMovesToSeat(seats: number[], students: number[]): number {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < seats.length; i++) {
    answer += Math.abs(seats[i] - students[i]);
  }
  return answer;
}

console.log(minMovesToSeat([3, 1, 5], [2, 7, 4]));
