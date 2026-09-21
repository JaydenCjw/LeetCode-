/**
 * 简化路径
 * 难度：★★☆☆☆
 * 将 Unix 风格绝对路径简化为规范路径。
 *
 * 示例："/home//foo/" => "/home/foo"
 *
 * 思路：按 / 切分，. 忽略，.. 弹栈。
 * 时间 O(n)，空间 O(n)
 */

export function simplifyPath(path: string): string {
  const stack: string[] = [];
  for (const part of path.split("/")) {
    if (part === "" || part === ".") {
      continue;
    }
    if (part === "..") {
      stack.pop();
    } else {
      stack.push(part);
    }
  }
  return `/${stack.join("/")}`;
}

console.log(simplifyPath("/home//foo/"));
