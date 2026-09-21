/**
 * 文件夹操作日志搜集器
 * 难度：★☆☆☆☆
 * "../" 返回上一级，"./" 留在当前文件夹，其他日志进入子文件夹。从主文件夹出发，返回最终深度。
 *
 * 示例：["d1/","d2/","../","d21/","./"] => 2
 *
 * 思路：用深度计数模拟栈。返回上一级时深度最小为 0。
 * 时间 O(n)，空间 O(1)
 */

export function minOperations(logs: string[]): number {
  let depth = 0;
  for (const log of logs) {
    if (log === "../") {
      depth = Math.max(0, depth - 1);
    } else if (log !== "./") {
      depth += 1;
    }
  }
  return depth;
}

console.log(minOperations(["d1/", "d2/", "../", "d21/", "./"]));
