/**
 * 航班预订统计
 * 难度：★★★☆☆
 * bookings[i] = [first, last, seats] 表示航班 first 到 last（含）各预订 seats 个座位。返回长度为 n 的每趟航班座位数。
 *
 * 示例：bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5 => [10,55,45,25,25]
 *
 * 思路：差分数组区间加，再做前缀和还原。
 * 时间 O(n + m)，空间 O(n)
 */

export function corpFlightBookings(bookings: number[][], n: number): number[] {
  const delta = new Array<number>(n + 1).fill(0);
  for (const booking of bookings) {
    const first = booking[0];
    const last = booking[1];
    const seats = booking[2];
    delta[first - 1] += seats;
    delta[last] -= seats;
  }
  const answer: number[] = [];
  let current = 0;
  for (let i = 0; i < n; i++) {
    current += delta[i];
    answer.push(current);
  }
  return answer;
}

console.log(corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5));
