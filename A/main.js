
let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];

function matrixElementsSum(matrix) {
    let total = 0;
    for (let i = 0; i < matrix.length; i++) {
        
        for (let j = 0; j < matrix[i].length; j++) {
          if (i === 0) {
            total += matrix[i][j];
            
          } else {
            if(matrix[i-1][j] !== 0) {
                total += matrix[i][j]
              }
          }
        }
      }
    return total
  }

let calcMatrix = matrixElementsSum(matrix);
console.log(calcMatrix);