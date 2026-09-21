/**
 * 一周中的第几天
 * 难度：★☆☆☆☆
 * 给定公历年月日，返回英文星期名。
 *
 * 示例：day=31, month=8, year=2019 => "Saturday"
 *
 * 思路：Sakamoto 公式。1、2 月视作上一年的 13、14 月来计算星期。
 * 时间 O(1)，空间 O(1)
 */

export function dayOfTheWeek(day: number, month: number, year: number): string {
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const offset = [0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  let y = year;
  if (month < 3) {
    y -= 1;
  }
  const week =
    (y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + offset[month - 1] + day) % 7;
  return names[week];
}

console.log(dayOfTheWeek(31, 8, 2019));
