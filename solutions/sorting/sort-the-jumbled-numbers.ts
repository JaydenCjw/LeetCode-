/**
 * 最小数字游戏中的混淆排序
 * 难度：★★☆☆☆
 * mapping[d] 是数字 d 映射后的新数字。把 nums 中每个整数按各位映射后的数值升序排列；映射值相同则保持原相对顺序。
 *
 * 示例：mapping=[8,9,4,0,2,1,3,5,7,6], nums=[991,338,38] => [338,38,991]
 *
 * 思路：计算每个数的映射值，按映射值稳定排序。
 * 时间 O(n log n * 位数)，空间 O(n)
 */

function mappedValue(num: number, mapping: number[]): number {
  if (num === 0) {
    return mapping[0];
  }
  let value = num;
  let place = 1;
  let mapped = 0;
  while (value > 0) {
    mapped += mapping[value % 10] * place;
    value = Math.floor(value / 10);
    place *= 10;
  }
  return mapped;
}

export function sortJumbled(mapping: number[], nums: number[]): number[] {
  return nums
    .map((num, index) => ({ num, index, key: mappedValue(num, mapping) }))
    .sort((a, b) => (a.key === b.key ? a.index - b.index : a.key - b.key))
    .map((item) => item.num);
}

console.log(sortJumbled([8, 9, 4, 0, 2, 1, 3, 5, 7, 6], [991, 338, 38]));
