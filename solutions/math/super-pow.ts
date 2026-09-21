/**
 * 超级次方
 * 难度：★★☆☆☆
 * 计算 a 的 b 次方对 1337 取模。b 按十进制各位放在数组里，高位在前。
 *
 * 示例：a=2, b=[3] => 8；a=2, b=[1,0] => 1024；a=2147483647, b=[2,0,0] => 1198
 *
 * 思路：从高位到低位，当前结果先做 10 次方再乘上 a 的该位次方，全程取模。
 * 时间 O(位数 * log 模数)，空间 O(1)
 */

const SUPER_MOD = 1337;

function modPow(base: number, exp: number): number {
  let result = 1;
  let value = base % SUPER_MOD;
  let power = exp;
  while (power > 0) {
    if (power % 2 === 1) {
      result = (result * value) % SUPER_MOD;
    }
    value = (value * value) % SUPER_MOD;
    power = Math.floor(power / 2);
  }
  return result;
}

export function superPow(a: number, b: number[]): number {
  let answer = 1;
  for (const digit of b) {
    answer = (modPow(answer, 10) * modPow(a, digit)) % SUPER_MOD;
  }
  return answer;
}

console.log([superPow(2, [3]), superPow(2, [1, 0]), superPow(2147483647, [2, 0, 0])]);
