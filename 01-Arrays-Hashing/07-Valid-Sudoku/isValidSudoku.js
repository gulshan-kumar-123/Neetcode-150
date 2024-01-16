/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill(null).map(() => new Set());
  const cols = new Array(9).fill(null).map(() => new Set());
  const squares = new Array(9).fill(null).map(() => new Set());

  //   const rows = [];
  //   const cols = [];
  //   const boxes = [];
  //   for (let i = 0; i < 9; i++) {
  //     rows[i] = new Set();
  //     cols[i] = new Set();
  //     boxes[i] = new Set();
  //   }

  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      if (board[r][c] === ".") {
        continue;
      }
      if (
        rows[r].has(board[r][c]) ||
        cols[c].has(board[r][c]) ||
        squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)].has(board[r][c])
      ) {
        return false;
      }
      rows[r].add(board[r][c]);
      cols[c].add(board[r][c]);
      squares[Math.floor(r / 3) * 3 + Math.floor(c / 3)].add(board[r][c]);
    }
  }
  return true;
};
