/**
 * 车队 II
 * 难度：★★★★☆
 * 汽车沿数轴同向行驶，cars[i] = [位置, 速度]，位置严格递增。返回每辆车追上右侧前车的时间，追不上为 -1。
 *
 * 示例：[[1,2],[2,1],[4,3],[7,2]] => [1, -1, 3, -1]
 *
 * 思路：从右向左用单调栈。只有更快的车才可能追上，且追上时间必须早于前车自己撞上更前面的车。
 * 时间 O(n)，空间 O(n)
 */

export function getCollisionTimes(cars: number[][]): number[] {
  const answer = new Array<number>(cars.length).fill(-1);
  const stack: number[] = [];
  for (let i = cars.length - 1; i >= 0; i -= 1) {
    const position = cars[i][0];
    const speed = cars[i][1];
    while (stack.length > 0) {
      const ahead = stack[stack.length - 1];
      const aheadPosition = cars[ahead][0];
      const aheadSpeed = cars[ahead][1];
      const time = (aheadPosition - position) / (speed - aheadSpeed);
      const aheadCollidesLater = answer[ahead] < 0 || time < answer[ahead];
      if (speed <= aheadSpeed || !aheadCollidesLater) {
        stack.pop();
      } else {
        answer[i] = time;
        break;
      }
    }
    stack.push(i);
  }
  return answer;
}

console.log(
  getCollisionTimes([
    [1, 2],
    [2, 1],
    [4, 3],
    [7, 2],
  ]),
);
