/**
 * 搜索推荐系统
 * 难度：★★★☆☆
 * 每输入 searchWord 的一个前缀，返回字典序最小且拥有该前缀的最多 3 个产品名。
 *
 * 示例：products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
 * => [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
 *
 * 思路：产品排序后，对每个前缀二分下界，再向后取最多 3 个匹配项。
 * 时间 O(n log n + m log n)，空间 O(1)（不计输出）
 */

export function suggestedProducts(products: string[], searchWord: string): string[][] {
  products.sort();
  const result: string[][] = [];
  let prefix = "";
  for (const ch of searchWord) {
    prefix += ch;
    let left = 0;
    let right = products.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (products[mid] < prefix) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    const suggestions: string[] = [];
    for (let i = left; i < products.length && suggestions.length < 3; i++) {
      if (!products[i].startsWith(prefix)) {
        break;
      }
      suggestions.push(products[i]);
    }
    result.push(suggestions);
  }
  return result;
}

console.log(suggestedProducts(["mobile", "mouse", "moneypot", "monitor", "mousepad"], "mouse"));
