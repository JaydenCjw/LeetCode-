/**
 * 找出星型图的中心节点
 * 难度：★☆☆☆☆
 * 无向星型图有一个中心与其余每个节点相连。给定边列表，返回中心节点。
 *
 * 示例：edges = [[1,2],[2,3],[4,2]] => 2
 *
 * 思路：中心一定出现在任意两条边里，比较前两条边的公共端点即可。
 * 时间 O(1)，空间 O(1)
 */

export function findCenter(edges: number[][]): number {
  const first = edges[0];
  const second = edges[1];
  if (first[0] === second[0] || first[0] === second[1]) {
    return first[0];
  }
  return first[1];
}

console.log(
  findCenter([
    [1, 2],
    [2, 3],
    [4, 2],
  ]),
);
