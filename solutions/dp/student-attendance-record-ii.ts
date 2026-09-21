/**
 * 学生出勤记录 II
 * 难度：★★★★☆
 * 长度为 n 的出勤记录只含 A、L、P。A 最多 1 次，连续 L 不超过 2 次。求方案数，对 10^9+7 取模。
 *
 * 示例：n = 2 => 8
 *
 * 思路：状态为已有缺勤数（0/1）和结尾连续迟到数（0/1/2），逐字符转移。
 * 时间 O(n)，空间 O(1)
 */

const MOD = 1_000_000_007;

export function checkRecord(n: number): number {
  let prev = [
    [1, 0, 0],
    [0, 0, 0],
  ];
  for (let i = 0; i < n; i++) {
    const next = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    for (let absent = 0; absent <= 1; absent++) {
      for (let late = 0; late <= 2; late++) {
        const value = prev[absent][late];
        if (value === 0) {
          continue;
        }
        next[absent][0] = (next[absent][0] + value) % MOD;
        if (absent < 1) {
          next[absent + 1][0] = (next[absent + 1][0] + value) % MOD;
        }
        if (late < 2) {
          next[absent][late + 1] = (next[absent][late + 1] + value) % MOD;
        }
      }
    }
    prev = next;
  }
  let answer = 0;
  for (let absent = 0; absent <= 1; absent++) {
    for (let late = 0; late <= 2; late++) {
      answer = (answer + prev[absent][late]) % MOD;
    }
  }
  return answer;
}

console.log(checkRecord(2));
