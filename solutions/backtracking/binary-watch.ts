/**
 * 二进制手表
 * 难度：★★☆☆☆
 * 手表有 4 个小时灯和 6 个分钟灯。返回恰好亮 turnedOn 盏灯的所有时间，分钟补零。
 *
 * 示例：turnedOn = 1 => ["0:01","0:02","0:04","0:08","0:16","0:32","1:00","2:00","4:00","8:00"]
 *
 * 思路：枚举小时 0-11、分钟 0-59，二进制 1 的个数之和等于 turnedOn 即合法。
 * 时间 O(1)，空间 O(1)
 */

function bitCount(value: number): number {
  let count = 0;
  let current = value;
  while (current > 0) {
    count += current & 1;
    current >>= 1;
  }
  return count;
}

export function readBinaryWatch(turnedOn: number): string[] {
  const answer: string[] = [];
  for (let hour = 0; hour < 12; hour++) {
    for (let minute = 0; minute < 60; minute++) {
      if (bitCount(hour) + bitCount(minute) === turnedOn) {
        answer.push(`${hour}:${minute.toString().padStart(2, "0")}`);
      }
    }
  }
  return answer;
}

console.log(JSON.stringify(readBinaryWatch(1)));
