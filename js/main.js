import { tetriminos } from "./assets/tetriminos.js";
import { boardWidth, boardHeight, board } from "./assets/board.js";
import { drawBlock, drawBoard } from "./modules/draw.js";

const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");

const blockSize = 10;

drawBoard(ctx, blockSize, boardWidth, boardHeight);

console.log(board)
console.log(tetriminos)