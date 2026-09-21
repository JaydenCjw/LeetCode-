/**
 * 困于环中的机器人
 * 难度：★★☆☆☆
 * 机器人从原点朝北出发，按指令 G 前进、L 左转、R 右转，无限重复。判断路径是否为有限的环。
 *
 * 示例：instructions="GGLLGG" => true；"GG" => false
 *
 * 思路：模拟一轮。若回到原点，或朝向不再朝北，则重复执行会兜圈子。
 * 时间 O(指令长度)，空间 O(1)
 */

export function isRobotBounded(instructions: string): boolean {
  const dirs: Array<[number, number]> = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let x = 0;
  let y = 0;
  let face = 0;
  for (const command of instructions) {
    if (command === "G") {
      x += dirs[face][0];
      y += dirs[face][1];
    } else if (command === "L") {
      face = (face + 3) % 4;
    } else {
      face = (face + 1) % 4;
    }
  }
  return (x === 0 && y === 0) || face !== 0;
}

console.log([isRobotBounded("GGLLGG"), isRobotBounded("GG")]);
