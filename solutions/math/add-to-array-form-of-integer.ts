/**
 * 数组形式的整数加法
 * 难度：★★☆☆☆
 * num 从高位到低位表示一个整数，把它与整数 k 相加，仍按数组形式返回。
 *
 * 示例：num=[1,2,0,0], k=34 => [1,2,3,4]
 *
 * 思路：从低位开始把 k 加进去，处理进位。k 本身可以不断除以 10。
 * 时间 O(max(位数, log k))，空间 O(位数)
 */

export function addToArrayForm(num: number[], k: number): number[] {
  const result: number[] = [];
  let carry = k;
  let index = num.length - 1;
  while (index >= 0 || carry > 0) {
    if (index >= 0) {
      carry += num[index];
      index -= 1;
    }
    result.push(carry % 10);
    carry = Math.floor(carry / 10);
  }
  result.reverse();
  return result;
}

console.log(addToArrayForm([1, 2, 0, 0], 34));
