/**
 * 删除系统中的重复文件夹
 * 难度：★★★★★
 * 给出文件系统的所有文件夹路径。若两棵子树结构完全相同，就删掉这两棵子树。返回删除后仍保留的路径。
 *
 * 示例：[["a"],["c"],["d"],["a","b"],["c","b"],["d","a"]] => [["d"],["d","a"]]
 *
 * 思路：路径建成 Trie。用子树序列化统计相同结构，出现超过一次的非空子树整棵删除。
 * 时间 O(节点数 * 序列长度)，空间 O(节点数)
 */

class DupNode {
  children = new Map<string, DupNode>();
  serial = "";
  deleted = false;
}

export function deleteDuplicateFolder(paths: string[][]): string[][] {
  const root = new DupNode();
  for (const path of paths) {
    let node = root;
    for (const name of path) {
      let next = node.children.get(name);
      if (!next) {
        next = new DupNode();
        node.children.set(name, next);
      }
      node = next;
    }
  }

  const serialCount = new Map<string, number>();
  const encode = (node: DupNode, isRoot: boolean): string => {
    if (node.children.size === 0) {
      return "";
    }
    const parts: string[] = [];
    for (const name of [...node.children.keys()].sort()) {
      const child = node.children.get(name);
      if (!child) {
        continue;
      }
      parts.push(`${name}(${encode(child, false)})`);
    }
    node.serial = parts.join("");
    if (!isRoot) {
      serialCount.set(node.serial, (serialCount.get(node.serial) ?? 0) + 1);
    }
    return node.serial;
  };
  encode(root, true);

  const mark = (node: DupNode, isRoot: boolean): void => {
    if (!isRoot && node.serial.length > 0 && (serialCount.get(node.serial) ?? 0) > 1) {
      node.deleted = true;
      return;
    }
    for (const child of node.children.values()) {
      mark(child, false);
    }
  };
  mark(root, true);

  const answer: string[][] = [];
  const collect = (node: DupNode, path: string[]): void => {
    if (node.deleted) {
      return;
    }
    if (path.length > 0) {
      answer.push(path.slice());
    }
    for (const [name, child] of node.children) {
      path.push(name);
      collect(child, path);
      path.pop();
    }
  };
  collect(root, []);
  return answer;
}

console.log(
  deleteDuplicateFolder([["a"], ["c"], ["d"], ["a", "b"], ["c", "b"], ["d", "a"]]),
);
