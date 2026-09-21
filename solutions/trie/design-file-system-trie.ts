/**
 * 设计文件系统（字典树）
 * 难度：★★★☆☆
 * createPath(path, value) 在父路径已存在且自身不存在时创建路径并赋值，成功返回 true。get 返回路径的值，不存在返回 -1。
 *
 * 示例：createPath("/a",1) => true，get("/a") => 1，createPath("/a/b",2) => true，
 * get("/a/b") => 2，createPath("/c/d",1) => false，get("/c") => -1
 *
 * 思路：路径分段做成 Trie。创建时父节点必须已存在，当前名字还不能存在。
 * 时间 O(路径长度)，空间 O(路径总长)
 */

class PathNode {
  children = new Map<string, PathNode>();
  value = -1;
  exists = false;
}

export class FileSystem {
  private readonly root = new PathNode();

  constructor() {
    this.root.exists = true;
  }

  createPath(path: string, value: number): boolean {
    const parts = path.split("/").filter((part) => part.length > 0);
    let node = this.root;
    for (let i = 0; i < parts.length - 1; i++) {
      const next = node.children.get(parts[i]);
      if (!next || !next.exists) {
        return false;
      }
      node = next;
    }
    const name = parts[parts.length - 1];
    if (!name || node.children.get(name)?.exists) {
      return false;
    }
    let child = node.children.get(name);
    if (!child) {
      child = new PathNode();
      node.children.set(name, child);
    }
    child.exists = true;
    child.value = value;
    return true;
  }

  get(path: string): number {
    if (path === "/") {
      return -1;
    }
    let node = this.root;
    for (const part of path.split("/")) {
      if (part.length === 0) {
        continue;
      }
      const next = node.children.get(part);
      if (!next || !next.exists) {
        return -1;
      }
      node = next;
    }
    return node.value;
  }
}

const paths = new FileSystem();
console.log(paths.createPath("/a", 1));
console.log(paths.get("/a"));
console.log(paths.createPath("/a/b", 2));
console.log(paths.get("/a/b"));
console.log(paths.createPath("/c/d", 1));
console.log(paths.get("/c"));
