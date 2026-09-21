/**
 * 车队
 * 难度：★★★☆☆
 * 目的地 target，位置与速度已知，追上前车后同速前进。求到达目的地的车队数量。
 *
 * 思路：按位置从近到远，到达时间不小于前车则并入同一车队。
 * 时间 O(n log n)，空间 O(n)
 */

export function carFleet(target: number, position: number[], speed: number[]): number {
  const cars = position.map((pos, index) => [pos, (target - pos) / speed[index]] as const);
  cars.sort((a, b) => b[0] - a[0]);
  let fleets = 0;
  let leadTime = 0;
  for (const [, time] of cars) {
    if (time > leadTime) {
      fleets++;
      leadTime = time;
    }
  }
  return fleets;
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
