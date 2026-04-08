const fs = require('fs');
const path = require('path');

// Folder where your JSON files are
const folderPath = './Exams/000_PYQ';

const files = fs.readdirSync(folderPath);

// Filter only .json files (exclude compact if you want)
const jsonFiles = files.filter(file => 
    file.endsWith('.json') && !file.includes('compact')
);

// Convert into array format
const result = jsonFiles.map(file => `    "Exams/000_PYQ/${file}"`)

// Final output
const output = `const exams = [\n${result}\n];\n\nexport default exams;`;

// Write to exam_index.js
fs.writeFileSync('exam_index.js', output);

console.log("✅ exam_index.js generated successfully!");
