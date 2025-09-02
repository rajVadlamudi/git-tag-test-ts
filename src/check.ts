import * as fs from 'fs';

export function checkJsonFileExistsSync(filePath: string): boolean {
  return fs.existsSync(filePath);
}

// Usage
// const exists = checkJsonFileExistsSync('./data.json');
// console.log(`File exists: ${exists}`);

export default checkJsonFileExistsSync