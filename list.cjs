const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
      if (file === 'node_modules' || file === '.git') return;
      file = dir + '/' + file;
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) { 
        results = results.concat(walk(file));
      } else { 
        if (file.endsWith('.mp4') || file.endsWith('.jpg') || file.endsWith('.png')) {
          results.push(file);
        }
      }
    });
  } catch (e) {}
  return results;
}

console.log(walk('.'));
