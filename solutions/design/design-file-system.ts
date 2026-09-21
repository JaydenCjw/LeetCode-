/**
 * 设计文件系统
 * 难度：★★☆☆☆
 * FileSystem：createPath 在父路径已存在时创建路径并写入值（根的直接子路径除外，父路径可为空）；路径已存在则失败。get 返回路径上的值，不存在返回 -1。
 *
 * 示例：createPath("/a",1)=true，get("/a")=1，createPath("/a/b",2)=true，get("/a/b")=2，createPath("/c/d",1)=false，get("/c")=-1
 *
 * 思路：哈希表保存路径到值。创建前检查自身不存在且父路径存在。
 * 时间 O(路径长度)，空间 O(路径数)
 */

export class FileSystem {
  private readonly values = new Map<string, number>();

  createPath(path: string, value: number): boolean {
    if (this.values.has(path) || path.length === 0 || path === "/") {
      return false;
    }
    const parent = path.slice(0, path.lastIndexOf("/"));
    if (parent !== "" && !this.values.has(parent)) {
      return false;
    }
    this.values.set(path, value);
    return true;
  }

  get(path: string): number {
    return this.values.get(path) ?? -1;
  }
}

const files = new FileSystem();
console.log([
  files.createPath("/a", 1),
  files.get("/a"),
  files.createPath("/a/b", 2),
  files.get("/a/b"),
  files.createPath("/c/d", 1),
  files.get("/c"),
]);
