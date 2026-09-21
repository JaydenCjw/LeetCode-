/**
 * 摧毁小行星
 * 难度：★★☆☆☆
 * 行星质量不小于小行星就能摧毁它，并把质量加上去。按任意顺序，判断能否摧毁全部。
 *
 * 示例：mass = 10, asteroids = [3,9,19,5,21] => true
 *
 * 思路：从小到大摧毁。只要当前质量够小的，后面只会更容易。
 * 时间 O(n log n)，空间 O(1)
 */

export function asteroidsDestroyed(mass: number, asteroids: number[]): boolean {
  asteroids.sort((a, b) => a - b);
  let current = mass;
  for (const asteroid of asteroids) {
    if (current < asteroid) {
      return false;
    }
    current += asteroid;
  }
  return true;
}

console.log(asteroidsDestroyed(10, [3, 9, 19, 5, 21]));
