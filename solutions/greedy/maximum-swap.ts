/**
 * 最大交换
 * 难度：★★☆☆☆
 * 最多交换一次两个数位，求能得到的最大整数。
 *
 * 示例：num = 2736 => 7236
 *
 * 思路：记录每个数字最后出现的位置。从左到右找第一个比右侧更大数字小的位，和最右的那个最大数字交换。
 * 时间 O(位数)，空间 O(1)
 */

export function maximumSwap(num: number): number {
  const digits = String(num).split("");
  const last = new Array<number>(10).fill(-1);
  for (let i = 0; i < digits.length; i++) {
    last[Number(digits[i])] = i;
  }
  for (let i = 0; i < digits.length; i++) {
    const current = Number(digits[i]);
    for (let d = 9; d > current; d--) {
      if (last[d] > i) {
        const j = last[d];
        const temp = digits[i];
        digits[i] = digits[j];
        digits[j] = temp;
        return Number(digits.join(""));
      }
    }
  }
  return num;
}

console.log(maximumSwap(2736));
