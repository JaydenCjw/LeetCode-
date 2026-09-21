/**
 * 水和罐问题
 * 难度：★★★☆☆
 * 容量为 jug1、jug2 的两个水壶，判断能否量出 target 升水。
 *
 * 思路：贝祖定理，target 是两容量最大公约数的倍数，且不超过总容量。
 * 时间 O(log min(a,b))，空间 O(1)
 */

function gcd(a: number, b: number): number {
  while (b !== 0) {
    const next = a % b;
    a = b;
    b = next;
  }
  return a;
}

export function canMeasureWater(jug1Capacity: number, jug2Capacity: number, targetCapacity: number): boolean {
  if (targetCapacity > jug1Capacity + jug2Capacity) {
    return false;
  }
  if (targetCapacity === 0) {
    return true;
  }
  return targetCapacity % gcd(jug1Capacity, jug2Capacity) === 0;
}

console.log(canMeasureWater(3, 5, 4));
