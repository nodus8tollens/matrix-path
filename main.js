const matrix1 = [
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

// Search right, left, up, and down for elements at an index different than the previous element
function searchMatrix(matrix) {
  // Start at ">" and append to path array

  let currentIndex = findStartingIndex(matrix);
  path.push(matrix[currentIndex[0]][currentIndex[1]]);

  let previousRow = currentIndex[0];
  let previousColumn = currentIndex[1];

  while (currentIndex && matrix[currentIndex[0]][currentIndex[1]] !== "s") {
    const currentRow = currentIndex[0];
    const currentColumn = currentIndex[1];

    // Check right, left, up, down

    //RIGHT
    if (
      //Check if element is out of bounds, wall (" "), or already traversed element
      currentRow + 1 >= 0 &&
      currentColumn >= 0 &&
      currentRow + 1 < matrix.length &&
      currentColumn < matrix[currentRow + 1].length &&
      matrix[currentRow + 1][currentColumn] !== " " &&
      (currentRow + 1 !== previousRow || currentColumn !== previousColumn)
    ) {
      // Proceed to next element
      previousRow = currentRow;
      previousColumn = currentColumn;
      currentIndex = [currentRow + 1, currentColumn];
      // Append newfound element to array
      path.push(matrix[currentIndex[0]][currentIndex[1]]);
      if (/^[A-Z]$/.test(matrix[currentIndex[0]][currentIndex[1]])) {
        letters.push(matrix[currentIndex[0]][currentIndex[1]]);
      }
    }
    //LEFT
    else if (
      currentRow - 1 >= 0 &&
      currentColumn >= 0 &&
      currentRow - 1 < matrix.length &&
      currentColumn < matrix[currentRow - 1].length &&
      matrix[currentRow - 1][currentColumn] !== " " &&
      (currentRow - 1 !== previousRow || currentColumn !== previousColumn)
    ) {
      previousRow = currentRow;
      previousColumn = currentColumn;
      currentIndex = [currentRow - 1, currentColumn];
      path.push(matrix[currentIndex[0]][currentIndex[1]]);
      if (/^[A-Z]$/.test(matrix[currentIndex[0]][currentIndex[1]])) {
        letters.push(matrix[currentIndex[0]][currentIndex[1]]);
      }
    }
    //UP
    else if (
      currentRow >= 0 &&
      currentColumn - 1 >= 0 &&
      currentRow < matrix.length &&
      currentColumn - 1 < matrix[currentRow].length &&
      matrix[currentRow][currentColumn - 1] !== " " &&
      (currentRow !== previousRow || currentColumn - 1 !== previousColumn)
    ) {
      previousRow = currentRow;
      previousColumn = currentColumn;
      currentIndex = [currentRow, currentColumn - 1];
      path.push(matrix[currentIndex[0]][currentIndex[1]]);
      if (/^[A-Z]$/.test(matrix[currentIndex[0]][currentIndex[1]])) {
        letters.push(matrix[currentIndex[0]][currentIndex[1]]);
      }
    }
    //DOWN
    else if (
      currentRow >= 0 &&
      currentColumn + 1 >= 0 &&
      currentRow < matrix.length &&
      currentColumn + 1 < matrix[currentRow].length &&
      matrix[currentRow][currentColumn + 1] !== " " &&
      (currentRow !== previousRow || currentColumn + 1 !== previousColumn)
    ) {
      previousRow = currentRow;
      previousColumn = currentColumn;
      currentIndex = [currentRow, currentColumn + 1];
      path.push(matrix[currentIndex[0]][currentIndex[1]]);
      if (/^[A-Z]$/.test(matrix[currentIndex[0]][currentIndex[1]])) {
        letters.push(matrix[currentIndex[0]][currentIndex[1]]);
      }
    } else {
      // If no valid moves found, break
      break;
    }
  }
}

searchMatrix(matrix1);

let pathString = path.join("");
let lettersString = letters.join("");

console.log(pathString);
console.log(lettersString);
