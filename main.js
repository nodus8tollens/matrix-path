const matrix = [
  [">", "-", "-", "-", "A", "-", "-", "-", "+"],
  [" ", " ", " ", " ", " ", " ", " ", " ", "|"],
  ["s", "-", "B", "-", "+", " ", " ", " ", "C"],
  [" ", " ", " ", " ", "|", " ", " ", " ", "|"],
  [" ", " ", " ", " ", "+", "-", "-", "-", "+"],
];

const matrix2 = [
  [">", "-", "-", "-", "A", "-", "@", "-", "+"],
  [" ", " ", " ", " ", " ", " ", " ", " ", "|"],
  ["+", "-", "U", "-", "+", " ", " ", " ", "C"],
  ["|", " ", " ", " ", "|", " ", " ", " ", "|"],
  ["s", " ", " ", " ", "C", "-", "-", "-", "+"],
];

let path = [];
let letters = [];

function findStartingIndex(matrix, element = ">") {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === element) {
        return [i, j];
      }
    }
  }

  return false;
}

// Start at ">" and append to path array

let currentIndex = findStartingIndex(matrix);
path.push(matrix[currentIndex[0]][currentIndex[1]]);

let previous_row = currentIndex[0];
let previous_col = currentIndex[1];

function searchMatrix(matrix) {
  while (currentIndex && matrix[currentIndex[0]][currentIndex[1]] !== "s") {
    const row = currentIndex[0];
    const col = currentIndex[1];

    // Check right, left, up, down
    if (
      row + 1 < matrix.length &&
      matrix[row + 1][col] !== " " &&
      (row + 1 !== previous_row || col !== previous_col)
    ) {
      previous_row = row;
      previous_col = col;
      currentIndex = [row + 1, col];
      path.push(matrix[currentIndex[0]][currentIndex[1]]);
      if (/^[A-Z]$/.test(matrix[currentIndex[0]][currentIndex[1]])) {
        letters.push(matrix[currentIndex[0]][currentIndex[1]]);
      }
    } else if (
      row - 1 >= 0 &&
      matrix[row - 1][col] !== " " &&
      (row - 1 !== previous_row || col !== previous_col)
    ) {
      previous_row = row;
      previous_col = col;
      currentIndex = [row - 1, col];
      path.push(matrix[currentIndex[0]][currentIndex[1]]);
      if (/^[A-Z]$/.test(matrix[currentIndex[0]][currentIndex[1]])) {
        letters.push(matrix[currentIndex[0]][currentIndex[1]]);
      }
    } else if (
      col - 1 >= 0 &&
      matrix[row][col - 1] !== " " &&
      (row !== previous_row || col - 1 !== previous_col)
    ) {
      previous_row = row;
      previous_col = col;
      currentIndex = [row, col - 1];
      path.push(matrix[currentIndex[0]][currentIndex[1]]);
      if (/^[A-Z]$/.test(matrix[currentIndex[0]][currentIndex[1]])) {
        letters.push(matrix[currentIndex[0]][currentIndex[1]]);
      }
    } else if (
      col + 1 < matrix[row].length &&
      matrix[row][col + 1] !== " " &&
      (row !== previous_row || col + 1 !== previous_col)
    ) {
      previous_row = row;
      previous_col = col;
      currentIndex = [row, col + 1];
      path.push(matrix[currentIndex[0]][currentIndex[1]]);
      if (/^[A-Z]$/.test(matrix[currentIndex[0]][currentIndex[1]])) {
        letters.push(matrix[currentIndex[0]][currentIndex[1]]);
      }
    } else {
      // If no valid moves found, break
      break;
    }

    console.log(matrix[currentIndex[0]][currentIndex[1]]);
  }
}

searchMatrix(matrix2);
console.log(path);
console.log(letters);
