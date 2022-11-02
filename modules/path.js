const path = require('path')

// Apenas o Nome do arquivo
console.log(path.basename(__filename));

// Apenas o DIretorio 

console.log(path.dirname(__filename));

// EXtençao do arquivo

console.log(path.extname(__filename));