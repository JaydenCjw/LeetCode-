/**
 * 购物优惠
 * 难度：★★★☆☆
 * 每种商品有单价，另有若干礼包（指定数量打包价）。在不超过需求的前提下求最低花费。
 *
 * 示例：price = [2,5], special = [[3,0,5],[1,2,10]], needs = [3,2] => 14
 *
 * 思路：对剩余需求记忆化。不使用礼包时按单价买完，再尝试每个买得起的礼包。
 * 时间 O(礼包数 · 需求状态)，空间 O(需求状态)
 */

export function shoppingOffers(
  price: number[],
  special: number[][],
  needs: number[],
): number {
  const memo = new Map<string, number>();

  function dfs(need: number[]): number {
    const key = need.join(",");
    const cached = memo.get(key);
    if (cached !== undefined) {
      return cached;
    }
    let best = 0;
    for (let i = 0; i < need.length; i++) {
      best += need[i] * price[i];
    }
    for (const offer of special) {
      const next = need.slice();
      let ok = true;
      let used = false;
      for (let i = 0; i < need.length; i++) {
        if (offer[i] > next[i]) {
          ok = false;
          break;
        }
        if (offer[i] > 0) {
          used = true;
        }
        next[i] -= offer[i];
      }
      if (ok && used) {
        best = Math.min(best, offer[offer.length - 1] + dfs(next));
      }
    }
    memo.set(key, best);
    return best;
  }

  return dfs(needs);
}

console.log(
  shoppingOffers(
    [2, 5],
    [
      [3, 0, 5],
      [1, 2, 10],
    ],
    [3, 2],
  ),
);
