/**
 * 驼峰式匹配
 * 难度：★★☆☆☆
 * 查询词按驼峰写法匹配模式：模式字符必须按顺序出现，查询中多出来的大写字母会使匹配失败，小写字母可以跳过。
 *
 * 示例：queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"]，pattern = "FB"
 * => [true, false, true, true, false]
 *
 * 思路：模式看成一条链状 Trie。沿查询扫描，命中模式字符就前进，遇到模式外的大写字母则失败。
 * 时间 O(查询总长)，空间 O(1)
 */

export function camelMatch(queries: string[], pattern: string): boolean[] {
  return queries.map((query) => {
    let index = 0;
    for (const char of query) {
      if (index < pattern.length && char === pattern[index]) {
        index++;
      } else if (char >= "A" && char <= "Z") {
        return false;
      }
    }
    return index === pattern.length;
  });
}

console.log(camelMatch(["FooBar", "FooBarTest", "FootBall", "FrameBuffer", "ForceFeedBack"], "FB"));
