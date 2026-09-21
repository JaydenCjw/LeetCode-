/**
 * 自除数
 * 难度：★☆☆☆☆
 * 自除数每位都非 0，且能被自己的每一位整除。返回闭区间 [left, right] 内的全部自除数。
 *
 * 示例：left=1, right=22 => [1,2,3,4,5,6,7,8,9,11,12,15,22]
 *
 * 思路：逐个数检查每一位。
 * 时间 O((right-left) * 位数)，空间 O(结果个数)
 */

function isSelfDividing(num: number): boolean {
  let value = num;
  while (value > 0) {
    const digit = value % 10;
    if (digit === 0 || num % digit !== 0) {
      return false;
    }
    value = Math.floor(value / 10);
  }
  return true;
}

export function selfDividingNumbers(left: number, right: number): number[] {
  const result: number[] = [];
  for (let num = left; num <= right; num += 1) {
    if (isSelfDividing(num)) {
      result.push(num);
    }
  }
  return result;
}

console.log(selfDividingNumbers(1, 22));
