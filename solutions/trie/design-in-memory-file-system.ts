/**
 * 设计内存文件系统
 * 难度：★★★★☆
 * 实现 ls、mkdir、addContentToFile、readContentFromFile。ls 对目录返回排序后的名字，对文件返回文件名。
 *
 * 示例：ls("/") => []；mkdir("/a/b/c")；addContentToFile("/a/b/c/d","hello")；ls("/") => ["a"]；
 * readContentFromFile("/a/b/c/d") => "hello"
 *
 * 思路：路径分段建成 Trie。目录节点保存子节点，文件节点追加内容。
 * 时间与路径长度成正比，空间 O(路径总长)
 */

class FileNode {
  children = new Map<string, FileNode>();
  content = "";
  isFile = false;
}

export class FileSystem {
  private readonly root = new FileNode();

  private walk(path: string, create: boolean): FileNode | null {
    if (path === "/") {
      return this.root;
    }
    let node = this.root;
    for (const part of path.split("/")) {
      if (part.length === 0) {
        continue;
      }
      let next = node.children.get(part);
      if (!next) {
        if (!create) {
          return null;
        }
        next = new FileNode();
        node.children.set(part, next);
      }
      node = next;
    }
    return node;
  }

  ls(path: string): string[] {
    const node = this.walk(path, false);
    if (!node) {
      return [];
    }
    if (node.isFile) {
      const parts = path.split("/").filter((part) => part.length > 0);
      return [parts[parts.length - 1] ?? ""];
    }
    return [...node.children.keys()].sort();
  }

  mkdir(path: string): void {
    this.walk(path, true);
  }

  addContentToFile(filePath: string, content: string): void {
    const node = this.walk(filePath, true);
    if (!node) {
      return;
    }
    node.isFile = true;
    node.content += content;
  }

  readContentFromFile(filePath: string): string {
    return this.walk(filePath, false)?.content ?? "";
  }
}

const fileSystem = new FileSystem();
console.log(fileSystem.ls("/"));
fileSystem.mkdir("/a/b/c");
fileSystem.addContentToFile("/a/b/c/d", "hello");
console.log(fileSystem.ls("/"));
console.log(fileSystem.readContentFromFile("/a/b/c/d"));
