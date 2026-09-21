/**
 * 最富有客户的资产总量
 * 难度：★☆☆☆☆
 * accounts[i][j] 是第 i 位客户在第 j 家银行的存款，返回最富有客户的资产总和。
 *
 * 示例：accounts = [[1,2,3],[3,2,1]] => 6
 *
 * 思路：对每位客户求和后取最大值。
 * 时间 O(mn)，空间 O(1)
 */

export function maximumWealth(accounts: number[][]): number {
  let best = 0;
  for (const account of accounts) {
    let sum = 0;
    for (const money of account) {
      sum += money;
    }
    if (sum > best) {
      best = sum;
    }
  }
  return best;
}

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
