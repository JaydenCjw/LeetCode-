/**
 * 机器人碰撞
 * 难度：★★★★☆
 * 机器人沿数轴以相同速度移动。相向而行时，血量少的被摧毁，血量多的减 1；血量相同则同时摧毁。返回存活机器人按位置排序后的血量。
 *
 * 示例：positions = [5,4,3,2,1]，healths = [2,17,9,15,10]，directions = "RRRRR"
 * 都向右，不发生碰撞 => [10,15,9,17,2]
 * positions = [3,5,2,6]，healths = [10,10,15,12]，directions = "RLRL"
 * 位置 3 与 5 同归于尽，位置 2 撞上位置 6 后血量减 1 => [14]
 *
 * 思路：按位置排序。向右的机器人入栈，向左的与栈顶相撞，直到一方被摧毁。
 * 时间 O(n log n)，空间 O(n)
 */

export function survivedRobotsHealths(
  positions: number[],
  healths: number[],
  directions: string,
): number[] {
  const order = positions.map((_, index) => index).sort((a, b) => positions[a] - positions[b]);
  const health = healths.slice();
  const stack: number[] = [];
  for (const index of order) {
    if (directions[index] === "R") {
      stack.push(index);
      continue;
    }
    while (stack.length > 0 && health[index] > 0) {
      const right = stack[stack.length - 1];
      if (health[right] > health[index]) {
        health[right] -= 1;
        health[index] = 0;
      } else if (health[right] < health[index]) {
        health[index] -= 1;
        health[right] = 0;
        stack.pop();
      } else {
        health[index] = 0;
        health[right] = 0;
        stack.pop();
      }
    }
  }
  return order.filter((index) => health[index] > 0).map((index) => health[index]);
}

console.log(survivedRobotsHealths([5, 4, 3, 2, 1], [2, 17, 9, 15, 10], "RRRRR"));
console.log(survivedRobotsHealths([3, 5, 2, 6], [10, 10, 15, 12], "RLRL"));
