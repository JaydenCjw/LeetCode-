/**
 * 视频拼接
 * 难度：★★★★☆
 * 片段 [start, end] 可覆盖这段时间。用最少片段覆盖 [0, time]。
 *
 * 示例：clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], time = 10 => 3
 *
 * 思路：按起点排序，每次在当前覆盖内选能延伸最远的片段，类似跳跃游戏 II。
 * 时间 O(n log n)，空间 O(1)
 */

export function videoStitching(clips: number[][], time: number): number {
  clips.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let end = 0;
  let farthest = 0;
  let index = 0;
  let count = 0;
  while (end < time) {
    while (index < clips.length && clips[index][0] <= end) {
      farthest = Math.max(farthest, clips[index][1]);
      index++;
    }
    if (farthest <= end) {
      return -1;
    }
    end = farthest;
    count++;
  }
  return count;
}

console.log(
  videoStitching(
    [
      [0, 2],
      [4, 6],
      [8, 10],
      [1, 9],
      [1, 5],
      [5, 9],
    ],
    10,
  ),
);
