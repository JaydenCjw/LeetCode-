/**
 * 完美数
 * 难度：★☆☆☆☆
 * 完美数等于它所有真因数之和（不含自身）。判断 num 是否为完美数。
 *
 * 示例：num=28 => true（1+2+4+7+14=28）
 *
 * 思路：枚举到平方根，累加成对因数，最后减去自身。
 * 时间 O(sqrt n)，空间 O(1)
 */

export function checkPerfectNumber(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  let sum = 1;
  for (let factor = 2; factor * factor <= num; factor += 1) {
    if (num % factor === 0) {
      sum += factor;
      const pair = num / factor;
      if (pair !== factor) {
        sum += pair;
      }
    }
  }
  return sum === num;
}

console.log(checkPerfectNumber(28));
