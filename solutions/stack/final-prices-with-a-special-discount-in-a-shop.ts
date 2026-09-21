/**
 * 商品折扣后的最终价格
 * 难度：★★☆☆☆
 * 第 i 件商品的折扣是它右侧第一个小于等于它的价格。最终价格是原价减去折扣，没有折扣则不变。
 *
 * 示例：[8,4,6,2,3] => [4,2,4,2,3]
 *
 * 思路：单调非递增栈。当前价格小于等于栈顶时，栈顶商品就能使用这个折扣。
 * 时间 O(n)，空间 O(n)
 */

export function finalPrices(prices: number[]): number[] {
  const result = prices.slice();
  const stack: number[] = [];
  for (let i = 0; i < prices.length; i += 1) {
    while (stack.length > 0 && prices[stack[stack.length - 1]] >= prices[i]) {
      const index = stack.pop() ?? 0;
      result[index] = prices[index] - prices[i];
    }
    stack.push(i);
  }
  return result;
}

console.log(finalPrices([8, 4, 6, 2, 3]));
