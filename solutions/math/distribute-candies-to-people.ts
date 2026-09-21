/**
 * 分糖果 II
 * 难度：★★☆☆☆
 * 把 candies 颗糖分给 num_people 个人。第 i 次发糖给队列中的下一个人，发 i 颗；最后一次不够就全部给出去。返回每人得到的糖果数。
 *
 * 示例：candies=7, num_people=4 => [1,2,3,1]
 *
 * 思路：按轮次模拟，每次发放 min(剩余, 当前应发数量)。
 * 时间 O(sqrt candies)，空间 O(num_people)
 */

export function distributeCandies(candies: number, num_people: number): number[] {
  const result = Array.from({ length: num_people }, () => 0);
  let remain = candies;
  let give = 1;
  let index = 0;
  while (remain > 0) {
    const amount = Math.min(remain, give);
    result[index] += amount;
    remain -= amount;
    give += 1;
    index = (index + 1) % num_people;
  }
  return result;
}

console.log(distributeCandies(7, 4));
