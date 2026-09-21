/**
 * 单词搜索 II
 * 难度：★★★★☆
 * 在字符网格中找词典里的单词，单词由上下左右相邻格子组成，同一格不能重复使用。
 *
 * 示例：board 与 ["oath","pea","eat","rain"] => ["eat","oath"]
 *
 * 思路：单词建成 Trie，从每个格子 DFS，命中单词后清空标记避免重复收集。
 * 时间 O(mn·4·L)，空间 O(词典总长度)
 */

class TrieNode {
  children = new Map<string, TrieNode>();
  word: string | null = null;
}

export function findWords(board: string[][], words: string[]): string[] {
  const root = new TrieNode();
  for (const word of words) {
    let node = root;
    for (const ch of word) {
      let next = node.children.get(ch);
      if (!next) {
        next = new TrieNode();
        node.children.set(ch, next);
      }
      node = next;
    }
    node.word = word;
  }

  const m = board.length;
  const n = board[0].length;
  const answer: string[] = [];
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(r: number, c: number, node: TrieNode): void {
    const ch = board[r][c];
    const next = node.children.get(ch);
    if (!next) {
      return;
    }
    if (next.word !== null) {
      answer.push(next.word);
      next.word = null;
    }
    board[r][c] = "#";
    for (const [dr, dc] of dirs) {
      const nr = r + dr;
      const nc = c + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] !== "#") {
        dfs(nr, nc, next);
      }
    }
    board[r][c] = ch;
  }

  for (let r = 0; r < m; r++) {
    for (let c = 0; c < n; c++) {
      dfs(r, c, root);
    }
  }
  return answer;
}

const board = [
  ["o", "a", "a", "n"],
  ["e", "t", "a", "e"],
  ["i", "h", "k", "r"],
  ["i", "f", "l", "v"],
];
console.log(JSON.stringify(findWords(board, ["oath", "pea", "eat", "rain"]).sort()));
