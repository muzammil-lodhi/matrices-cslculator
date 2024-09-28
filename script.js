const matrixA = document.getElementById('matrixA');
const matrixB = document.getElementById('matrixB');
const resultDiv = document.getElementById('result');

// Create input fields for matrices
function createMatrixInputs(matrixElement, rows, cols) {
    matrixElement.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        const rowDiv = document.createElement('div'); 
        rowDiv.className = 'row';
        for (let j = 0; j < cols; j++) {
            const input = document.createElement('input');
            input.type = 'number';
            input.dataset.row = i;
            input.dataset.col = j;
            rowDiv.appendChild(input);
        }
        matrixElement.appendChild(rowDiv);
    }
}

// Function to get matrix values from inputs
function getMatrix(matrixElement, rows, cols) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            const input = matrixElement.querySelector(`input[data-row='${i}'][data-col='${j}']`);
            row.push(parseFloat(input.value) || 0);
        }
        matrix.push(row);
    }
    return matrix;
}

// Function to display the result
function displayResult(result) {
    resultDiv.innerHTML = '';
    result.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.textContent = row.join(' ');
        resultDiv.appendChild(rowDiv);
    });
}

// Function to add or subtract matrices
function operateMatrices(operation) {
    const rows = 2; // Set the number of rows
    const cols = 2; // Set the number of columns

    const matrix1 = getMatrix(matrixA, rows, cols);
    const matrix2 = getMatrix(matrixB, rows, cols);
    const result = [];

    for (let i = 0; i < rows; i++) {
        const resultRow = [];
        for (let j = 0; j < cols; j++) {
            const value = operation === 'add' 
                ? matrix1[i][j] + matrix2[i][j] 
                : matrix1[i][j] - matrix2[i][j];
            resultRow.push(value);
        }
        result.push(resultRow);
    }

    displayResult(result);
}

// Event listeners
document.getElementById('add').addEventListener('click', () => operateMatrices('add'));
document.getElementById('subtract').addEventListener('click', () => operateMatrices('subtract'));

// Initialize the matrices with 2x2 inputs
createMatrixInputs(matrixA, 2, 2);
createMatrixInputs(matrixB, 2, 2);
