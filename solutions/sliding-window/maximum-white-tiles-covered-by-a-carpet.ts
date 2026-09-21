/**
 * 地毯覆盖的最多白色砖块数
 * 难度：★★★☆☆
 * tiles[i] = [起点, 终点] 是一段连续白砖。地毯长度为 carpetLen，放在数轴上最多盖住多少块白砖。
 *
 * 示例：tiles = [[1,5],[10,11],[12,18],[20,25],[30,32]], carpetLen = 10 => 9
 *
 * 思路：按起点排序，滑动窗口累加完全盖住的砖段，再补上右端被部分盖住的长度。
 * 时间 O(n log n)，空间 O(1)
 */

export function maximumWhiteTiles(tiles: number[][], carpetLen: number): number {
  tiles.sort((left, right) => left[0] - right[0]);
  let cover = 0;
  let right = 0;
  let best = 0;
  for (let left = 0; left < tiles.length; left++) {
    const end = tiles[left][0] + carpetLen - 1;
    while (right < tiles.length && tiles[right][1] <= end) {
      cover += tiles[right][1] - tiles[right][0] + 1;
      right++;
    }
    let partial = 0;
    if (right < tiles.length && tiles[right][0] <= end) {
      partial = end - tiles[right][0] + 1;
    }
    best = Math.max(best, cover + partial);
    cover -= tiles[left][1] - tiles[left][0] + 1;
  }
  return best;
}

console.log(maximumWhiteTiles([[1, 5], [10, 11], [12, 18], [20, 25], [30, 32]], 10));
