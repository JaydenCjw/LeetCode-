/**
 * 克隆图
 * 给你无向连通图中一个节点的引用，返回该图的深拷贝。
 *
 * 思路：DFS / BFS + Map 记录原节点到克隆节点的映射。
 * 时间 O(V+E)，空间 O(V)
 */

export class GraphNode {
  val: number;
  neighbors: GraphNode[];

  constructor(val = 0, neighbors: GraphNode[] = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

export function cloneGraph(node: GraphNode | null): GraphNode | null {
  if (!node) {
    return null;
  }

  const cloned = new Map<GraphNode, GraphNode>();

  const dfs = (current: GraphNode): GraphNode => {
    const cached = cloned.get(current);
    if (cached) {
      return cached;
    }

    const copy = new GraphNode(current.val);
    cloned.set(current, copy);
    for (const neighbor of current.neighbors) {
      copy.neighbors.push(dfs(neighbor));
    }
    return copy;
  };

  return dfs(node);
}

const n1 = new GraphNode(1);
const n2 = new GraphNode(2);
n1.neighbors = [n2];
n2.neighbors = [n1];
const cloned = cloneGraph(n1);
console.log(cloned?.val, cloned?.neighbors[0]?.val);
