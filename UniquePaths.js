/*
On a 2-dimensional grid, there are 4 types of squares:

1 represents the starting square.  There is exactly one starting square.
2 represents the ending square.  There is exactly one ending square.
0 represents empty squares we can walk over.
-1 represents obstacles that we cannot walk over.
Return the number of 4-directional walks from the starting square to the ending square,
that walk over every non-obstacle square exactly once.
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
const uniquePathsIII = function(grid) {
//Initializations
let path = 0;

const startingSquare = 1;
const endingSquare = 2;
const obstacle = -1;
const visited = 3;
let numEmptySquares = grid.length * grid[0].length - findObstacles() - 1;
const startingIndex = findIndexOf(startingSquare);
  console.log(startingIndex);
  traverseGrid(startingIndex[0], startingIndex[1]);
if(path > 0) return path +1 ;
else return path;

function traverseGrid(row, column) {
  console.log('Grid', grid);

  if(row < 0 || row > grid.length -1 || column < 0 || column > grid[0].length - 1) return; //undefined if out of bounds
  let element = grid[row][column];

  //obstacle and visited check
  if(element === obstacle || element === visited) return;
  //end condition
  if(element === endingSquare) {  console.log('numEmptySquares', numEmptySquares) ; path++ ; return; }
  grid[row][column] = visited;
  numEmptySquares--;
  //recursive condition
    traverseGrid(row + 1, column);
    traverseGrid(row, column + 1);
    traverseGrid(row - 1, column);
    traverseGrid(row, column + 1);

}



function findIndexOf(number) {
  for(let i =0; i< grid.length; i++) {
    let values = grid[i];
    if(values.indexOf(number) !== -1) return [ i, values.indexOf(1) ];
  }
}

function findObstacles() {
  let num = 0;
  for(let row = 0; row < grid.length; row++) {
    for(let col = 0; col < grid[0].length; col++) {
      if(grid[row][col] === -1) num++;
    }
  }
  return num
}
};
const input = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]];
console.log('path', uniquePathsIII(input));
