/**
 * 复原 IP 地址
 * 难度：★★★☆☆
 * 给定只含数字的字符串，返回所有可能的有效 IP 地址。每段 0..255，不能有前导零。
 *
 * 示例："25525511135" => ["255.255.11.135","255.255.111.35"]
 *
 * 思路：回溯切四段。
 * 时间 O(1)（长度有限），空间 O(1)
 */

export function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];
  const parts: string[] = [];

  const dfs = (start: number): void => {
    if (parts.length === 4) {
      if (start === s.length) {
        result.push(parts.join("."));
      }
      return;
    }
    for (let len = 1; len <= 3 && start + len <= s.length; len++) {
      const part = s.slice(start, start + len);
      if ((part.length > 1 && part[0] === "0") || Number(part) > 255) {
        continue;
      }
      parts.push(part);
      dfs(start + len);
      parts.pop();
    }
  };

  dfs(0);
  return result;
}

console.log(restoreIpAddresses("25525511135"));
