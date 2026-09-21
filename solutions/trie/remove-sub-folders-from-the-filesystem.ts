/**
 * 删除子文件夹
 * 难度：★★☆☆☆
 * 文件夹列表里，如果某个文件夹位于另一个文件夹之中，就删掉它。返回删除后剩余的文件夹。
 *
 * 示例：["/a","/a/b","/c/d","/c/d/e","/c/f"] => ["/a","/c/d","/c/f"]
 *
 * 思路：按路径分段插入 Trie。收集答案时，一旦遇到已经是文件夹的节点就不再进入子目录。
 * 时间 O(总路径长度)，空间 O(总路径长度)
 */

class FolderNode {
  children = new Map<string, FolderNode>();
  isEnd = false;
}

export function removeSubfolders(folder: string[]): string[] {
  const root = new FolderNode();
  for (const path of folder) {
    let node = root;
    for (const part of path.split("/")) {
      if (part.length === 0) {
        continue;
      }
      let next = node.children.get(part);
      if (!next) {
        next = new FolderNode();
        node.children.set(part, next);
      }
      node = next;
    }
    node.isEnd = true;
  }

  const answer: string[] = [];
  const dfs = (node: FolderNode, path: string[]): void => {
    if (node.isEnd) {
      answer.push(`/${path.join("/")}`);
      return;
    }
    for (const [name, child] of node.children) {
      path.push(name);
      dfs(child, path);
      path.pop();
    }
  };
  dfs(root, []);
  answer.sort();
  return answer;
}

console.log(removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]));
