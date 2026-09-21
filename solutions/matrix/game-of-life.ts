/**
 * 生命游戏
 * 难度：★★★☆☆
 * 原地更新细胞状态。活细胞周围活细胞少于 2 或多于 3 则死亡，正好 3 则存活；死细胞周围正好 3 个活细胞则复活。
 *
 * 思路：用中间状态 2（活变死）、-1（死变活），最后归一。
 * 时间 O(m*n)，空间 O(1)
 */

export function gameOfLife(board: number[][]): void {
  const rows = board.length;
  const cols = board[0].length;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];

  const liveNeighbors = (row: number, col: number): number => {
    let count = 0;
    for (const [dr, dc] of directions) {
      const nextRow = row + dr;
      const nextCol = col + dc;
      if (nextRow < 0 || nextCol < 0 || nextRow >= rows || nextCol >= cols) {
        continue;
      }
      if (board[nextRow][nextCol] > 0) {
        count++;
      }
    }
    return count;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const neighbors = liveNeighbors(row, col);
      if (board[row][col] === 1 && (neighbors < 2 || neighbors > 3)) {
        board[row][col] = 2;
      } else if (board[row][col] === 0 && neighbors === 3) {
        board[row][col] = -1;
      }
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === 2) {
        board[row][col] = 0;
      } else if (board[row][col] === -1) {
        board[row][col] = 1;
      }
    }
  }
}

const board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
gameOfLife(board);
console.log(board);
