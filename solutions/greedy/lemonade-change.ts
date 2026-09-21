/**
 * 柠檬水找零
 * 难度：★☆☆☆☆
 * 柠檬水 5 元一杯，顾客付 5、10 或 20。一开始没有零钱，判断能否全部正确找零。
 *
 * 思路：优先用 10 元找 20，再统计 5 元。
 * 时间 O(n)，空间 O(1)
 */

export function lemonadeChange(bills: number[]): boolean {
  let five = 0;
  let ten = 0;
  for (const bill of bills) {
    if (bill === 5) {
      five++;
    } else if (bill === 10) {
      if (five === 0) {
        return false;
      }
      five--;
      ten++;
    } else if (ten > 0 && five > 0) {
      ten--;
      five--;
    } else if (five >= 3) {
      five -= 3;
    } else {
      return false;
    }
  }
  return true;
}

console.log(lemonadeChange([5, 5, 5, 10, 20]));
