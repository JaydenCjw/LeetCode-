/**
 * 行星碰撞
 * 难度：★★★☆☆
 * 正数向右、负数向左。相向碰撞时绝对值小的爆炸，相等则都爆炸。返回最终状态。
 *
 * 思路：栈模拟，只有栈顶向右且当前向左才会撞。
 * 时间 O(n)，空间 O(n)
 */

export function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];
  for (const asteroid of asteroids) {
    let alive = true;
    while (alive && asteroid < 0 && stack.length > 0 && stack[stack.length - 1] > 0) {
      const top = stack[stack.length - 1];
      if (top < -asteroid) {
        stack.pop();
      } else if (top === -asteroid) {
        stack.pop();
        alive = false;
      } else {
        alive = false;
      }
    }
    if (alive) {
      stack.push(asteroid);
    }
  }
  return stack;
}

console.log(asteroidCollision([5, 10, -5]));
