export const boardWidth = 10;
export const boardHeight = 20;
export const board = [];

//Initialize the empty board
for (let i = 0; i < boardHeight; i++) {
  const row = [];
  for (let j = 0; j < boardWidth; j++) {
    row.push(0); // Fill the board with empty cells
  }
  board.push(row);
}