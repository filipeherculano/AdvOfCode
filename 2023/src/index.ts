import fs from 'fs';

function resolve(input: string): number {
  const entireBlock: string[] = input.split('');
  const filteredBlock: string = entireBlock.reduce((acc, char) => {
    if (char in ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']) {
      return acc + char;
    } else if (char === '\n') {
      return acc + char;
    }
    return acc;
  }, '');
  const filteredLines: string[] = filteredBlock.split('\n');
  const linesIntoNumbers: number[] = filteredLines.map((line) => {
    switch (line.length) {
      case 0:
        return 0;
      default:
        return parseInt(line[0] + line[Math.max(0, line.length - 1)]);
    }
  });
  const sum: number = linesIntoNumbers.reduce((acc, num) => acc + num, 0);
  console.log(sum);
  return sum;
}

async function main(inputFilePath: string) {
  fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (!err) {
      resolve(data);
    }
  });
}

main('input.txt').then(console.log);
