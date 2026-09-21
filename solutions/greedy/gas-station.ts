/**
 * 加油站
 * 难度：★★★☆☆
 * gas[i] 为加油站油量，cost[i] 为到下一站油耗。判断能否绕环一周，返回起点；不能返回 -1。
 *
 * 示例：gas = [1,2,3,4,5], cost = [3,4,5,1,2] => 3
 *
 * 思路：总油量不足则无解；否则从亏损最低点的下一站出发。
 * 时间 O(n)，空间 O(1)
 */

export function canCompleteCircuit(gas: number[], cost: number[]): number {
  let total = 0;
  let tank = 0;
  let start = 0;

  for (let i = 0; i < gas.length; i++) {
    const diff = gas[i] - cost[i];
    total += diff;
    tank += diff;
    if (tank < 0) {
      start = i + 1;
      tank = 0;
    }
  }

  return total >= 0 ? start : -1;
}

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
