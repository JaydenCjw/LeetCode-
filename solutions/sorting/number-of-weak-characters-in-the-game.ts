/**
 * 游戏中弱角色的数量
 * 难度：★★☆☆☆
 * properties[i] = [攻击力, 防御力]。若存在另一角色攻击和防御都严格更大，则当前角色是弱角色。返回弱角色数量。
 *
 * 示例：[[5,5],[6,3],[3,6]] => 0；[[2,2],[3,3]] => 1
 *
 * 思路：攻击力降序，攻击力相同则防御力升序。从左到右维护已见过的更高攻击力的最大防御。防御更小的就是弱角色。
 * 时间 O(n log n)，空间 O(1) 额外
 */

export function numberOfWeakCharacters(properties: number[][]): number {
  const roles = properties.slice().sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]));
  let maxDefense = 0;
  let weak = 0;
  for (const role of roles) {
    if (role[1] < maxDefense) {
      weak += 1;
    } else {
      maxDefense = role[1];
    }
  }
  return weak;
}

console.log([
  numberOfWeakCharacters([
    [5, 5],
    [6, 3],
    [3, 6],
  ]),
  numberOfWeakCharacters([
    [2, 2],
    [3, 3],
  ]),
]);
