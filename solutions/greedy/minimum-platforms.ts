/**
 * 最少站台数
 * 难度：★★★☆☆
 * 给定列车到达和离开时间，求车站至少需要多少站台，使列车都不必等待。
 *
 * 示例：arrival = [900,940,950,1100,1500,1800], departure = [910,1200,1120,1130,1900,2000] => 3
 *
 * 思路：到达、离开分别排序。到达不晚于当前离开则多占一个站台，否则释放一个。
 * 时间 O(n log n)，空间 O(1)
 */

export function minimumPlatforms(arrival: number[], departure: number[]): number {
  const arrive = arrival.slice().sort((a, b) => a - b);
  const depart = departure.slice().sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let platforms = 0;
  let answer = 0;
  while (i < arrive.length) {
    if (arrive[i] <= depart[j]) {
      platforms++;
      answer = Math.max(answer, platforms);
      i++;
    } else {
      platforms--;
      j++;
    }
  }
  return answer;
}

console.log(minimumPlatforms([900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1130, 1900, 2000]));
